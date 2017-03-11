function Chess(container) {
  var board = UI.createTable("chessBoard", 8, 8).addClass("board");
  formatChessBoard();
  var rankLabels = UI.createList(["8", "7", "6", "5", "4", "3", "2", "1"]).addClass("rankLabels").addClass("leftLabelSpace");
  var upperSection = $(document.createElement("div")).addClass("upperSection");
  upperSection.append(rankLabels).append(board);
  var lowerSection = $(document.createElement("div")).addClass("lowerSection");
  var emptyLeftSpace = $(document.createElement("div")).addClass("leftLabelSpace");
  lowerSection.append(emptyLeftSpace);
  var fileLabels = UI.createList(["a", "b", "c", "d", "e", "f", "g", "h"]).addClass("fileLabels");
  lowerSection.append(fileLabels);
  var boardWrapper = $(document.createElement("div")).addClass("boardWrapper");
  boardWrapper.append(upperSection);
  //boardWrapper.append(lowerSection);
  $("#" + container).append(boardWrapper);

  function formatChessBoard() {
    var squares = board.find("td");
    squares.each(function(index) {
      $(this).addClass("boardSquare");
      if(Math.floor(index / 8) % 2 == 0) {
        if(index % 2 == 0) $(this).addClass("whiteSquare");
        else $(this).addClass("blackSquare");
      } else {
        if(index % 2 == 0) $(this).addClass("blackSquare");
        else $(this).addClass("whiteSquare");
      }
    });
  }
}