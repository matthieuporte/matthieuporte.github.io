var pts = 0;
var nbCalcDone = 0;
var tempsCalc = 0;
var allChiffres = [];
var allOperators = "+-/*";
var finalCalc = "";
var pointsAajouter = 0;
var Rep = "";
var TrueOne = 0;
var t;
var t2;

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function alertMessage(message,color){
	clearTimeout(t2);
	$("#conteneurValidation").html("<p class=\"swing-in-top-fwd validation\">"+message+"</p>")
	$(".validation").css("color",color);
	t2 = setTimeout(function(){ clearMessage() }, 4000);
}

function clearMessage(){
	$("#conteneurValidation").fadeOut(500,function(){
		$("#conteneurValidation").html("");
		$("#conteneurValidation").show();
	});
}

function createCalc() {	
	tempsCalc = 0;
	allChiffres = [];
 	finalCalc = "";
 	TrueOne = 0;
	Rep = "";
	var nb_chiffre = getRandom(1, 5);
	for (var i = nb_chiffre; i >= 0; i--) {
		allChiffres.push(Math.trunc(getRandom(2, 20)));
	}
	for (var i = allChiffres.length - 1; i >= 0; i--) {
		finalCalc += allChiffres[i] + allOperators.charAt(Math.floor(Math.random()*allOperators.length));
	}
	if(allChiffres.length == 2){
		tempsCalc = 6;
	} else if (allChiffres.length == 3){
		tempsCalc = 14;
	} else if (allChiffres.length == 4){
		tempsCalc = 21;
	} else {
		tempsCalc = 31;
	}
	pointsAajouter = tempsCalc; 
	finalCalc = finalCalc.slice(0, -1);
	rep = Math.trunc(eval(finalCalc)*100);
	rep = rep/100;
	$("#enonce").html(finalCalc);
	$("#temps").html(tempsCalc);
	var randPos = Math.trunc(getRandom(1, 4));
	var randcalc = Math.trunc(getRandom(1, 5));
	if (randcalc == 1){
		var rdmRep1 = rep + Math.trunc(getRandom(2, 51));
		var rdmRep2 = rep + Math.trunc(getRandom(2, 51));
	} else if (randcalc == 2){
		var rdmRep1 = rep + Math.trunc(getRandom(2, 51));
		var rdmRep2 = rep - Math.trunc(getRandom(2, 51));
	} else if (randcalc == 3){
		var rdmRep1 = rep - Math.trunc(getRandom(2, 51));
		var rdmRep2 = rep + Math.trunc(getRandom(2, 51));
	} else {
		var rdmRep1 = rep - Math.trunc(getRandom(2, 51));
		var rdmRep2 = rep -	Math.trunc(getRandom(2, 51));
	}
	if (randPos == 1){
		TrueOne = 1;
		$(".1").html(rep);
		$(".2").html(Math.trunc(rdmRep1));
		$(".3").html(Math.trunc(rdmRep2));
	} else if (randPos == 2){
		TrueOne = 2;
		$(".2").html(rep);
		$(".1").html(Math.trunc(rdmRep1));
		$(".3").html(Math.trunc(rdmRep2));
	} else {
		TrueOne = 3;
		$(".3").html(rep);
		$(".1").html(Math.trunc(rdmRep1));
		$(".2").html(Math.trunc(rdmRep2));
	}
	startTime();
}
function startTime() {
	if (tempsCalc > 1){
	  tempsCalc--;
	  $("#temps").html(tempsCalc);
	  t = setTimeout(function(){ startTime() }, 999);
	} else {
		clearTimeout(t);
		createCalc();
		$("#temps").html("0");
		pts -= 2;
		$("#points").html(pts);
		alertMessage("temps écoulé ¯\\_(ツ)_/¯<br>La bonne réponse était : " + rep,"#96281b");
	}
}

$(".reponse").on("click",function(){
	var thisId = $(this).attr('id');
	if(thisId == TrueOne){
		pts += tempsCalc;
		$("#points").html(pts);
		clearTimeout(t);
		createCalc();
		alertMessage("Bien Joué (̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄","#1e824c");
	} else {
		alertMessage("Dommage ¯\\_(ツ)_/¯<br>La bonne réponse était : " + rep,"#96281b");	
		pts -= 10;
		$("#points").html(pts);
		clearTimeout(t);
		createCalc();
	}
});



createCalc();