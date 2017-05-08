/*
var values = [0, 1, 2, 3, 4];
values.reverse(); // 4,3,2,1,0
values = [0, 1, 5, 10, 15];
values.sort(); // 0,1,10,15,5
function compare(value1, value2) {
	if(parseInt(value1) > parseInt(value2)){
		return value1;
	} else {
		return value2;
	}
}
alert(values.sort(compare));
// 0,1,5,10,15
*/

window.addEventListener("keydown", function(){
	var div = document.getElementById("block");
    if(div.className == "fondRouge"){
    	div.className = "fondBlanc";
    }
    else {
    	div.className = "fondRouge";
    }
});