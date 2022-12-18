const BASE_URL = "https://anapioficeandfire.com"

const getAllRecords = async () => {
  const response = await fetch(`${BASE_URL}/api/books`);
  const records = await response.json();
   prepareGrid(records);
  
}
const prepareGrid= (records) =>{
  let tableContent = "";
  records.map((record) => {
    tableContent += ` <tr>
    <th scope="row">${record.name}</th>
    <td>${record.isbn}</td>
    <td>${record.authors}</td>
    <td>${new Date(record.released).toLocaleDateString()}</td>
    <td>${record.numberOfPages}</td>
    <td>${record.characters.name}</td>
  </tr>`
  });
  document.getElementById("books").innerHTML = tableContent;
};
const record = async (recorfd) => {
  await fetch (`${BASE_URL}/api`,{
method : "post",
headers : {
  "Content-Type" : "application/json",
} ,
body : JSON.stringify(record),
  })
}



getAllRecords();