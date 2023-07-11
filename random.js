var planes = [];
var visitedplanes = [];
var planepicture = document.getElementById("cardimage");
var planeswalkbitton = document.getElementById("Planeswalk");
var pastplanes = document.getElementById("pastplanes")
function randomArray(arr) {
  var selectedarr = Math.floor(Math.random()*arr.length);
  return selectedarr;
}

function planeswalk() {
  var plane = planes.splice(randomArray(planes), 1)[0];
  planepicture.src = plane;
  visitedplanes.push(plane);
  updatevisitedplanes();
}

function updatevisitedplanes() {
  var planesvisited = "";
  visitedplanes.forEach((plane, i) => {
    planesvisited += '<a href="'+plane+'" target="_blank">'+(i+1)+'</a> <br>'
  });
  pastplanes.innerHTML = planesvisited;
}


window.onload = function() {
for (i=423582; i<=423667; i++) {
  var thyplanetoadd = "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=" + i + "&type=card";
  planes.push(thyplanetoadd);
}
for (i=614930; i<=614954; i++) {
  var thyplanetoadd = "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=" + i + "&type=card";
  planes.push(thyplanetoadd);
}
planeswalkbitton.addEventListener("click", planeswalk);
}
