// Question 02

function showMessage() {
  alert('Thanks for purchasing a phone from us')
}

// Question 03

function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

// Question 05

var counter = 0;

function increase() {
  counter++
  document.getElementById('counter').innerHTML = counter
}

function decrease() {
  counter--
  document.getElementById('counter').innerHTML = counter
}