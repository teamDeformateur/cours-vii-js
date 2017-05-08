/**
 * 
 */
function date() {
	var balise = document.getElementById('demo');
	balise.innerHTML = Date();
}

var table = document.createElement("table");
for (var i = 1; i <= 10; i++) {
	var row = document.createElement("tr");
	for (var j = 1; j <= 10; j++) {
		var cell = document.createElement("td");
		cell.appendChild(document.createTextNode(i * j));
		row.appendChild(cell);
	}
	table.appendChild(row);
}
var p = document.getElementById("demo");
p.appendChild(table);