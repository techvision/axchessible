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
  var boardWrapper = $(document.createElement("div")).addClass("boardWrapper");
  boardWrapper.append(board);
  $("#" + container).append(boardWrapper);
  addRankLabels();
  addFileLabels();
  formatChessBoard();
  bindHandlers();

  function formatChessBoard() {
    var ranks = board.find("tr");
    var fileLabels = $("#file").find("th");
    ranks.each(function(rowIndex) {
      if(rowIndex < 8) {
        var squares = $(this).find("td");
        var rankLabel = $(this).find("th").first();
        squares.each(function(index) {
          var fileLabel = $(fileLabels.get(index + 1));
          $(this).attr("aria-labelledby", fileLabel.attr("id") + " " + rankLabel.attr("id"));
        });
      }
    });
  }


  function addFileLabels() {
    board.append(UI.createHeaderRow("file", ["", "a", "b", "c", "d", "e", "f", "g", "h"]));
  }

  function addRankLabels() {
    var ranks = board.find("tr");
    var rankNumber = 8;
    ranks.each(function(rowIndex) {
      var rankCell = UI.createHeaderCell("rank_" + rowIndex, rankNumber);
      rankNumber--;
      $(this).prepend(rankCell);
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
    if(getCurrentSquare() === null) {
      var firstRow = $(board.find("tr").get(0));
      var firstCell = $(firstRow.find("td").get(0));
      setActive(firstCell);
    }
  }
  function bindHandlers() {
    board.focus(handleFocus);
    board.keydown(handleKeyDown);
  }

  function navigateLeft() {
    var currentSquare = getCurrentSquare();
    var currentRow = currentSquare.parent();
    if(currentSquare.index() > 1) {
      var previousSquare = $(currentRow.children().get(currentSquare.index() - 1));
      setActive(previousSquare);
    }
  }

  function navigateRight() {
    var currentSquare = getCurrentSquare();
    var currentRow = currentSquare.parent();
    if(currentSquare.index() < 8) {
      var nextSquare = $(currentRow.children().get(currentSquare.index() + 1));
      setActive(nextSquare);
    }
  }

  function navigateUp() {
    var currentSquare = getCurrentSquare();
    var currentRow = currentSquare.parent();
    if(currentRow.index() > 0) {
      var previousRow = $(currentRow.parent().find("tr").get(currentRow.index() - 1));
      var previousSquare = $(previousRow.children().get(currentSquare.index()));
      setActive(previousSquare);
    }
  }

  function navigateDown() {
    var currentSquare = getCurrentSquare();
    var currentRow = currentSquare.parent();
    if(currentRow.index() < 7) {
      var nextRow = $(currentRow.parent().find("tr").get(currentRow.index() + 1));
      var nextSquare = $(nextRow.children().get(currentSquare.index()));
      setActive(nextSquare);
    }
  }

  function getCurrentSquare() {
    return (board.attr("aria-activedescendant") === undefined) ? null: $("#" + board.attr("aria-activedescendant"));
  }
  function setActive(square) {
    var currentSquare = getCurrentSquare();
    if(currentSquare != null) currentSquare.removeClass("active");
    square.addClass("active");
    board.attr("aria-activedescendant", square.attr("id"));
  }
}