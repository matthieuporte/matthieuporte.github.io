if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

	var mouseX = 0 ;
	var mouseY = 0 ;


	var scene = new THREE.Scene();
		scene.background = new THREE.Color( 0x000 );
		var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

		var renderer = new THREE.WebGLRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight );
		$("#canvas3d").append( renderer.domElement );

		// var geometry = new THREE.SphereGeometry( 2, 8, 5 );
		var verticesOfCube = [
		    -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
		    -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
		];

		var indicesOfFaces = [
		    2,1,0,    0,3,2,
		    0,4,7,    7,3,0,
		    0,1,5,    5,4,0,
		    1,2,6,    6,5,1,
		    2,3,7,    7,6,2,
		    4,5,6,    6,7,4
		];

		var geometry = new THREE.PolyhedronBufferGeometry( verticesOfCube, indicesOfFaces, 6, 2 );
		var edges = new THREE.EdgesGeometry( geometry );
		var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x7c7c7c } ) );
		scene.add( line );

		camera.position.z = 1.7;

		$(document).mousemove(function(e){
		    mouseX = e.pageX;
		    mouseY = e.pageY;
		});

			var animate = function () {
				requestAnimationFrame( animate );
					line.rotation.x = (mouseY * 0.015);
					line.rotation.y = (mouseX * 0.01);

				renderer.render( scene, camera );
			};
		animate();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

$("#maintitle").addClass("rotate");
$("#description").addClass("rotate");

function dataWord () {

  $("[data-words]").attr("data-words", function(i, d){
    var $self  = $(this),
        $words = d.split("|"),
        tot    = $words.length,
        c      = 0; 

    // CREATE SPANS INSIDE SPAN
    for(var i=0; i<tot; i++) $self.append($('<span/>',{text:$words[i]}));

    // COLLECT WORDS AND HIDE
    $words = $self.find("span").hide();

    // ANIMATE AND LOOP
    (function loop(){
      $self.animate({ width: $words.eq( c ).width() });
      $words.stop().fadeOut().eq(c).fadeIn().delay(1000).show(0, loop);
      c = ++c % tot;
    }());
    
  });

}

// dataWord(); // If you don't use external fonts use this on DOM ready; otherwise use:
$(window).on("load", dataWord);


AOS.init();

$(".typewriter p").hide();

var msg1 = "chargement en cours";
var msg2 = "--> Mes compétences";
var msg3 = "HTML : 90%";
var msg4 = "CSS : 85%";
var msg5 = "JS : 70%";
var msg6 = "Rails : 65%";
var msg7 = "C# : 60%";
var msg8 = "GIMP : 60%";
var msg9 = "League of Legend : 60%";
var Timeout = 30;
var delay_total = 0;
var indexExec = 0;

function prepareText(message){
	var index = 0;
	var idAppende = '#txt' + indexExec;
	indexExec++;
	setTimeout(function(){
		$(idAppende).fadeIn(250);
		showText(message,index,idAppende);
	}, delay_total);
	delay_total += message.length*30;
}

function showText(message,index,idAppend){
	if ( index < message.length ){
		$( "" + idAppend ).append( message[ index++ ] );

		setTimeout( function(){
			showText( message, index, idAppend, Timeout);
		}, Timeout);
	}
}

var mavar = 0; 	

$(window).scroll( function(){	
            
    var bottom_of_object = $(".experience").offset().top + $(".experience").outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
   


	if ($(window).scrollTop() == 0) {
		$("#accueil").removeClass("gradient-accueil");
	} else {
		$("#accueil").addClass("gradient-accueil");
	}

    if( bottom_of_window > bottom_of_object && mavar != 1){
           mavar = 1;
           prepareText(msg1);
			prepareText(msg2);
			prepareText(msg3);
			prepareText(msg4);
			prepareText(msg5);
			prepareText(msg6);
			prepareText(msg7);
			prepareText(msg8);
			prepareText(msg9);
    }
});

window.onload=function(){
var compteur = 0, i;
var total = document.getElementsByTagName("img").length;
while(compteur!=total){
	compteur = 0;
	for(i=0; i<total; i++){
		if(document.getElementsByTagName("img")[i].complete){
			compteur++;
			$("#loading_text").html("Chargement en cours, veuillez patienter...<br />Element " + compteur + "/" + total);
		}
	}
}
$("#loader").fadeOut("normal");
}




  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-127136960-1');