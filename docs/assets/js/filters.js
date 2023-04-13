window.onload = function()
{
    console.log("hello world")
    var LPall = document.getElementById("LPall");
    var LPrecent = document.getElementById("LPrecent");
    var LPfeatured = document.getElementById("LPfeatured");
    var Pall = document.getElementById("Pall");
    var Precent = document.getElementById("Precent");
    var Pfeatured = document.getElementById("Pfeatured");

    var LAall = document.getElementById("LAall");
    var LArecent = document.getElementById("LArecent");
    var LAfeatured = document.getElementById("LAfeatured");
    var Aall = document.getElementById("Aall");
    var Arecent = document.getElementById("Arecent");
    var Afeatured = document.getElementById("Afeatured");

    Aall.onclick = function(){
        Arecent.classList.remove("text-crossed-vermeil");
        Afeatured.classList.remove("text-crossed-vermeil");
        Aall.classList.add("text-crossed-vermeil");
        LArecent.classList.add("display-none");
        LAfeatured.classList.add("display-none");
        LAall.classList.remove("display-none");
    }
    Afeatured.onclick = function(){
        Arecent.classList.remove("text-crossed-vermeil");
        Aall.classList.remove("text-crossed-vermeil");
        Afeatured.classList.add("text-crossed-vermeil");
        LArecent.classList.add("display-none");
        LAall.classList.add("display-none");
        LAfeatured.classList.remove("display-none");
    }
    Arecent.onclick = function(){
        Aall.classList.remove("text-crossed-vermeil");
        Afeatured.classList.remove("text-crossed-vermeil");
        Arecent.classList.add("text-crossed-vermeil");
        LAfeatured.classList.add("display-none");
        LAall.classList.add("display-none");
        LArecent.classList.remove("display-none");
    }

    Pall.onclick = function(){
        Precent.classList.remove("text-crossed-vermeil");
        Pfeatured.classList.remove("text-crossed-vermeil");
        Pall.classList.add("text-crossed-vermeil");
        LPrecent.classList.add("display-none");
        LPfeatured.classList.add("display-none");
        LPall.classList.remove("display-none");
    }
    Pfeatured.onclick = function(){
        Precent.classList.remove("text-crossed-vermeil");
        Pall.classList.remove("text-crossed-vermeil");
        Pfeatured.classList.add("text-crossed-vermeil");
        LPrecent.classList.add("display-none");
        LPall.classList.add("display-none");
        LPfeatured.classList.remove("display-none");
    }
    Precent.onclick = function(){
        Pall.classList.remove("text-crossed-vermeil");
        Pfeatured.classList.remove("text-crossed-vermeil");
        Precent.classList.add("text-crossed-vermeil");
        LPfeatured.classList.add("display-none");
        LPall.classList.add("display-none");
        LPrecent.classList.remove("display-none");
    }
  
}