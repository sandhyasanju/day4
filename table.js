function create() {
  var arrayHeader = [
    "S.No",
    "Name",
    "Gender",
    "salary"
  ];
  var arrayRow1 = [
    1,
    "Sandhya",
    "F",
    2456789
  ];
  var arrayRow2 = [
    2,
    "Swetha",
    "F",
    123456789
  ];
  var arrayRow3 = [
    3,
    "Harika",
    "F",
    123456798
  ];
  var arrayRow4 = [
    4,
    "Siva",
    "M",
    123456987
  ];
  var table = document.createElement("table");
  table.id = "table20";
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var th3 = document.createElement("th");
  var th4 = document.createElement("th");
  var tr5 = document.createElement("tr");
  var tr1 = document.createElement("tr");
  var tr2 = document.createElement("tr");
  var tr3 = document.createElement("tr");
  var tr4 = document.createElement("tr");
  var td11 = document.createElement("td");
  var td12 = document.createElement("td");
  var td13 = document.createElement("td");
  var td14 = document.createElement("td");
  var td21 = document.createElement("td");
  var td22 = document.createElement("td");
  var td23 = document.createElement("td");
  var td24 = document.createElement("td");
  var td31 = document.createElement("td");
  var td32 = document.createElement("td");
  var td33 = document.createElement("td");
  var td34 = document.createElement("td");
  var td41 = document.createElement("td");
  var td42 = document.createElement("td");
  var td43 = document.createElement("td");
  var td44 = document.createElement("td");

    th1.innerHTML = arrayHeader[0];
    th1.id = "th1";
    th2.innerHTML = arrayHeader[1];
    th2.id = "th2";
    th3.innerHTML = arrayHeader[2];
    th3.id = "th3";
    th4.innerHTML = arrayHeader[3];
    th4.id = "th4";

    td11.innerHTML = arrayRow1[0];
    td12.innerHTML = arrayRow1[1];
    td13.innerHTML = arrayRow1[2];
    td14.innerHTML = arrayRow1[3];

    td21.innerHTML = arrayRow2[0];
    td22.innerHTML = arrayRow2[1];
    td23.innerHTML = arrayRow2[2];
    td24.innerHTML = arrayRow2[3];

    td31.innerHTML = arrayRow3[0];
    td32.innerHTML = arrayRow3[1];
    td33.innerHTML = arrayRow3[2];
    td34.innerHTML = arrayRow3[3];

    td41.innerHTML = arrayRow4[0];
    td42.innerHTML = arrayRow4[1];
    td43.innerHTML = arrayRow4[2];
    td44.innerHTML = arrayRow4[3];

    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);

    tr2.appendChild(td11);
    tr2.appendChild(td12);
    tr2.appendChild(td13);
    tr2.appendChild(td14);

    tr3.appendChild(td21);
    tr3.appendChild(td22);
    tr3.appendChild(td23);
    tr3.appendChild(td24);

    tr4.appendChild(td31);
    tr4.appendChild(td32);
    tr4.appendChild(td33);
    tr4.appendChild(td34);

    tr5.appendChild(td41);
    tr5.appendChild(td42);
    tr5.appendChild(td43);
    tr5.appendChild(td44);

    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    table.appendChild(tr4);
    table.appendChild(tr5);
    table.border = 1;

    var tab = document.getElementById("division");
    tab.appendChild(table);
  }

  function textFields()
  {
    var input1 = document.createElement("input");
    input1.id = "input1";
    var input2 = document.createElement("input");
    input2.id = "input2";
    var input3 = document.createElement("input");
    input3.id = "input3";
    var input4 = document.createElement("input");
    input4.id = "input4";
    var div = document.getElementById("text");

    div.appendChild(input1);
    div.appendChild(input2);
    div.appendChild(input3);
    div.appendChild(input4);
  }
  function filter()
  {
    var searchterm1 = document.getElementById("input1");
    var searchterm2 = document.getElementById("input2");
    var searchterm3 = document.getElementById("input3");
    var searchterm4 = document.getElementById("input4");
    var table = document.getElementById("table20");

    searchterm1.innerHTML = searchterm1.value;
    searchterm2.innerHTML = searchterm2.value;
    searchterm3.innerHTML = searchterm3.value;
    searchterm4.innerHTML = searchterm4.value;

    for ( var c = 1 ; c <= table.rows.cells.length ; c++ )
    {
      for ( var r = 1 ; r <= table.rows.length ; r++ )
      {
        if ( searchterm1.value == table.rows[r].cells[c].innerHTML)
        {
          table.rows.display = table.rows[r].cells[c];
        }
        else if ( searchterm2.value == table.rows[r].cells[c].innerHTML)
        {
          table.rows.display = table.rows[r].cells[c];
        }
        else if ( searchterm3.value == table.rows[r].cells[c].innerHTML)
        {
          table.rows.display = table.rows[r].cells[c];
        }
        else if ( searchterm4.value == table.rows[r].cells[c].innerHTML)
        {
          table.rows.display = table.rows[r].cells[c];
        }
        else
        {
          table.rows.display = table.rows[r].cells[c];
        }
      }
    }

  }
