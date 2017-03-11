function Chess(container) {
  var board = UI.createTable("chessBoard", 8, 8).addClass("centerBoard");
  $("#" + container).append(board);

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
  formatChessBoard();
}