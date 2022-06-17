// Your code here
const table = document.querySelector(`table`);
const addRowButton = document
  .querySelector(`#add-row`)
  .addEventListener("click", function () {
    makeRow();
  });

function makeRow(input) {
  const row = document.createElement(`tr`);
  for (let i = 0; i < 20; i++) {
    const td = document.createElement(`td`);
    row.appendChild(td);
  }
  table.appendChild(row);
}

makeRow();
makeRow();
makeRow();
makeRow();

// table.addEventListener("click") {
//     colorize();
// }

// function colorize(event) {
//   let clickedEvent = event.target;
//   if (clickedEvent.className === "") {
//     clickedEvent.className = "red";
//   } else {
//     clickedEvent.className = "";
//   }
// });

function colorize(event) {
  const clickedEvent = event.target;
  if (clickedEvent.className === "") {
    clickedEvent.className = "red";
  } else {
    clickedEvent.className = "";
  }
}

table.addEventListener("click", function (event) {
  colorize(event);
});
