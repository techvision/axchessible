var UI = (function() {

  function createHeaderRow(id, items) {
    var tr = $(document.createElement("tr"));
    tr.attr("id", id);
    for(var i = 0; i < items.length; i++) {
      tr.append(createHeaderCell(id + "_" + i, items[i]));
    }
    return tr;

  }
  function createHeaderCell(id, value) {
    var th = $(document.createElement("th"));
    th.attr("id", id);
    th.text(value);
    return th;
  }
  function createTable(id, numRows, numColumns) {
    var table = $(document.createElement("table"));
    table.attr("id", id);
    table.attr("role", "grid");
    for(var i = 0; i < numRows; i++) {
      table.append(createRow(id, i, numColumns));
    }
    return table;
  }

  function createRow(id, rowIndex, numColumns) {
    var tr = $(document.createElement("tr"));
    tr.attr("role", "row");
    for(var i = 0; i < numColumns; i++) {
      tr.append($(document.createElement("td")).attr("id", id + rowIndex + "_" + i).attr("role", "gridcell"));
    }
    return tr;
  }

  return {
    createHeaderRow: createHeaderRow,
    createHeaderCell: createHeaderCell,
    createTable: createTable
  };
})();