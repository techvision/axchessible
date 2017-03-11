var UI = (function() {
  function createList(id, items) {
    var ul = $(document.createElement("ul"));
    ul.attr("id", id);
    for(var i = 0; i < items.length; i++) {
      ul.append($(document.createElement("li")).attr("id", id + "_" + i).text(items[i]));
    }
    return ul;
  }
  function createTable(id, numRows, numColumns) {
    var table = $(document.createElement("table"));
    table.attr("id", id);
    table.attr("role", "grid");
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
    createList: createList,
    createTable: createTable
  };
})();