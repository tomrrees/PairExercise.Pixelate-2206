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

function colorize(event) {
  const clickedEvent = event.target;
  const tag = event.target.tagName;
    if (clickedEvent.className === "") {
        clickedEvent.className = globalClassName;
    }  else {
        clickedEvent.className = "";
    }
}

table.addEventListener("click", function (event) {
  const tag = event.target.tagName;
  if (tag != "TABLE") colorize(event);
});

const sel = document.querySelector("select");

sel.addEventListener("change", function(event) {
    colorizeAgain(event);
});

function colorizeAgain(event) {
    const target = event.target;
    console.log(event.target.value)
    //target.className = event.target.value;
    globalClassName = event.target.value;
}

let globalClassName = 'red';

