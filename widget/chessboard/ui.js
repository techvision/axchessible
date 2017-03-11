var UI = (function() {
  function createTable(id, numRows, numColumns) {
    var table = $(document.createElement("table"));
    table.attr("id", id);
    table.attr("role", "grid");
    table.attr("border", "1");
    for(var i = 0; i < numRows; i++) {
      table.append(createRow(numColumns));
    }
    return table;
  }

  function createRow(numColumns) {
    var tr = $(document.createElement("tr"));
    tr.attr("role", "row");
    for(var i = 0; i < numColumns; i++) {
      tr.append($(document.createElement("td")).attr("role", "gridcell"));
    }
    return tr;
  }

  return {
    createTable: createTable
  };
})();