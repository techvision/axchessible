function Chess(container) {
  var board = UI.createTable("chessBoard", 8, 8).addClass("board").addClass("rightBoardSpace");
  formatChessBoard();
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

  function formatChessBoard() {
    var ranks = board.find("tr");
    ranks.each(function(rowIndex) {
      var squares = $(this).find("td");
      squares.each(function(index) {
        $(this).addClass("boardSquare");
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
}