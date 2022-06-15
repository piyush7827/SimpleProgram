var currentTurn = "X";
var gameOver = false;
var count = 0;
// turn should get toggled
// if cell is already filled, dont do anything

function play(id) {
  var idInString = "" + id;

  // if inside the element, O or X is not written, then only write a O or X
  var isNotAEmptyCell = document.getElementById(idInString).innerText !== "";

  if (isNotAEmptyCell || gameOver) {
    return;
  }

  document.getElementById(idInString).innerText = currentTurn;
  calculateWinner();

  if (currentTurn === "X") {
    currentTurn = "O";
  } else {
    currentTurn = "X";
  }
}

function calculateWinner() {
  var cell1Value = document.getElementById("1").innerText;
  var cell2Value = document.getElementById("2").innerText;
  var cell3Value = document.getElementById("3").innerText;
  var cell4Value = document.getElementById("4").innerText;
  var cell5Value = document.getElementById("5").innerText;
  var cell6Value = document.getElementById("6").innerText;
  var cell7Value = document.getElementById("7").innerText;
  var cell8Value = document.getElementById("8").innerText;
  var cell9Value = document.getElementById("9").innerText;

  if (
    // row 1
    (cell1Value !== "" &&
      cell1Value === cell2Value &&
      cell2Value === cell3Value) ||
    // row 2
    (cell4Value !== "" &&
      cell4Value === cell5Value &&
      cell5Value === cell6Value) ||
    // row 3
    (cell7Value !== "" &&
      cell7Value === cell8Value &&
      cell8Value === cell9Value) ||
    //column
    (cell1Value !== "" &&
      cell1Value === cell4Value &&
      cell4Value === cell7Value) ||
    (cell2Value !== "" &&
      cell2Value === cell5Value &&
      cell5Value === cell8Value) ||
    (cell3Value !== "" &&
      cell3Value === cell6Value &&
      cell6Value === cell9Value) ||
    //diagonal
    (cell1Value !== "" &&
      cell1Value === cell5Value &&
      cell5Value === cell9Value) ||
    (cell3Value !== "" &&
      cell3Value === cell5Value &&
      cell5Value === cell7Value)
  ) {
    gameOver = true;
    document.getElementById("message").innerText =
      "GAME OVER. " + currentTurn + " WON";
  }
}

function reset() {
  location.reload();
}
