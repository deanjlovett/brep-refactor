let timeGenerated = "";
const timeStamp = document.createElement('div');
  
function createTable(students){
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const tableBody = document.createElement('tbody');
  
  let tr;
  let td;

  students.map(function (student){
    tr = document.createElement('tr');
    td = document.createElement('td');

    td.appendChild(document.createTextNode(`(${student.skill}) ${student.name} `));
    tr.appendChild(td);
    tableBody.appendChild(tr);
  });
  
  table.appendChild(tableBody)
  document.body.appendChild(table);
  timeStamp.innerHTML = timeGenerated;
  document.body.appendChild(timeStamp);
}

fetch('/group')
  .then(res => res.json())
  .then((result)=> {
    let groups = result.groups
    timeGenerated = result.lastGenerated.toString();
    groups.map(group => createTable(group));
  })
  .catch(err => console.log(err));
