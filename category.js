var title = "";
var address = "";
var unit_price1 ;
var unit_price2 ;

function category1(){
	address = "images/Shopping.png";
	title = "Shopping";
}

function category2(){
	address = "images/Eating.png";
	title = "Eating";
}

function category3(){
	address = "images/Transport.png";
	title = "Transport";
}

function category4(){
	address = "images/Entertainment.png";
	title = "Entertainment";
}

function category5(){
	address = "images/HomeMaintenance.png";
	title = "Maintenance";
}

function category6(){
	address = "images/Fitness.png";
	title = "Fitness";
}

function makingcomparison(){
	unit_price1 = document.getElementById("itemprice1").value/document.getElementById("itemsize1").value;
	unit_price2 = document.getElementById("itemprice2").value/document.getElementById("itemsize2").value;
	unit_price1 = unit_price1.toFixed(2);
	unit_price2 = unit_price2.toFixed(2);
	
	if(unit_price1 < unit_price2){
		document.getElementById("outcome").innerHTML = "Our Recommendation: " + " Item1 is a better choice";
	}	
	else{
		document.getElementById("outcome").innerHTML = "Our Recommendation: " + "Item2 is a better choice";	
	}
	document.getElementById("unit-price1").innerHTML = "Unit-Price1: " + unit_price1;	
	document.getElementById("unit-price2").innerHTML = "Unit-Price2: " + unit_price2;
}