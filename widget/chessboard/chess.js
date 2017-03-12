console.log("loading Chess Class");
var keys = {
left: 37,
right: 39,
down: 40,
up: 38,
enter: 13,
space: 32
};
function Chess(container) {
  var board = UI.createTable("chessBoard", 8, 8).addClass("board").addClass("rightBoardSpace");
  board.attr("tabindex", "0");
  var rankLabels = UI.createList("rank", ["8", "7", "6", "5", "4", "3", "2", "1"]).addClass("rankLabels").addClass("leftLabelSpace");
  var upperSection = $(document.createElement("div")).addClass("upperSection");
  upperSection.append(rankLabels).append(board);
  var lowerSection = $(document.createElement("div")).addClass("lowerSection");
  var emptyLeftSpace = $(document.createElement("div")).addClass("leftLabelSpace");
  lowerSection.append(emptyLeftSpace);
  var fileLabels = UI.createList("file", ["a", "b", "c", "d", "e", "f", "g", "h"]).addClass("fileLabels").addClass("rightBoardSpace");
  lowerSection.append(fileLabels);
  var boardWrapper = $(document.createElement("div")).addClass("boardWrapper");
  boardWrapper.append(upperSection);
  boardWrapper.append(lowerSection);
  $("#" + container).append(boardWrapper);
  formatChessBoard();
  bindHandlers();

  function formatChessBoard() {
    var ranks = board.find("tr");
    ranks.each(function(rowIndex) {
      var squares = $(this).find("td");
      var rankLabel = $(rankLabels.find("li").get(rowIndex));
      squares.each(function(index) {
        var fileLabel = $(fileLabels.find("li").get(index));
        $(this).addClass("boardSquare");
        $(this).attr("aria-labelledby", fileLabel.attr("id") + " " + rankLabel.attr("id"));
        if(rowIndex % 2 == 0) {
          if(index % 2 == 0) $(this).addClass("whiteSquare");
          else $(this).addClass("blackSquare");
        } else {
          if(index % 2 == 0) $(this).addClass("blackSquare");
          else $(this).addClass("whiteSquare");
        }
      });
    });


  }

  function handleKeyDown(e) {
    switch(e.which) {
      case keys.left:
        navigateLeft();
      break;
      case keys.right:
        navigateRight();
      break;
      case keys.up:
        navigateUp();
      break;
      case keys.down:
        navigateDown();
      break;
      default:
    }
  }
  function handleFocus(e) {
    var firstRow = $(board.find("tr").get(0));
    var firstCell = $(firstRow.find("td").get(0));
    setActive(firstCell);
  }
  function bindHandlers() {
    board.focus(handleFocus);
    board.keydown(handleKeyDown);
  }

  function navigateLeft() {
    var currentSquare = getCurrentSquare();
    var currentRow = currentSquare.parent();
    if(currentSquare.index() > 0) {
      var previousSquare = $(currentRow.find("td").get(currentSquare.index() - 1));
      setActive(previousSquare);
    }
  }

  function navigateRight() {
    var currentSquare = getCurrentSquare();
    var currentRow = currentSquare.parent();
    if(currentSquare.index() < 7) {
      var nextSquare = $(currentRow.find("td").get(currentSquare.index() + 1));
      setActive(nextSquare);
    }
  }

  function navigateUp() {
    var currentSquare = getCurrentSquare();
    var currentRow = currentSquare.parent();
    if(currentRow.index() > 0) {
      var previousRow = $(currentRow.parent().find("tr").get(currentRow.index() - 1));
      var previousSquare = $(previousRow.find("td").get(currentSquare.index()));
      setActive(previousSquare);
    }
  }

  function navigateDown() {
    var currentSquare = getCurrentSquare();
    var currentRow = currentSquare.parent();
    if(currentRow.index() < 7) {
      var nextRow = $(currentRow.parent().find("tr").get(currentRow.index() + 1));
      var nextSquare = $(nextRow.find("td").get(currentSquare.index()));
      setActive(nextSquare);
    }
  }

  function getCurrentSquare() {
    return $("#" + board.attr("aria-activedescendant"));
  }
  function setActive(square) {
    getCurrentSquare().removeClass("active");
    square.addClass("active");
    board.attr("aria-activedescendant", square.attr("id"));
  }
}