/**
 * Created by khutaijashariff on 11/22/16.
 */
var incrementDay = 1;
function addDay() {
    incrementDay++;
    var parentDiv = document.createElement('div');
    parentDiv.classList.add("flex-item");
    parentDiv.id = "day" + incrementDay ;
    parentDiv.innerHTML = '<div class="flex-header">Day' + incrementDay+ '</div>';
    var addDayControlDiv = document.createElement('div');
    addDayControlDiv.className = ("flex-item-add");
    addDayControlDiv.id = "addDayControl";
    addDayControlDiv.innerHTML = '<div onclick="addDay()" class="fa fa-plus fa-5x plus"></div>';
    document.getElementById('addDayContainer').removeChild(addDayControl);
    document.getElementById('addDayContainer').appendChild(parentDiv);
    document.getElementById('addDayContainer').appendChild(addDayControlDiv);

}


var cityNames = JSON.parse(localStorage.getItem('CityNamesC'));
for(var i=0; i<cityNames.length; i++){
    document.getElementById(cityNames[i]).className = "jumbotron";
}
var beijingLocations = [];
beijingLocations[0] = localStorage.getItem('beijingPlace2');
beijingLocations[1] = localStorage.getItem('beijingPlace3');
beijingLocations[2] = localStorage.getItem('beijingPlace4');
beijingLocations[3] = localStorage.getItem('beijingPlace5');
beijingLocations[4] = localStorage.getItem('beijingPlace6');
var beijingLocationsDisplay = [];
var b=1;
beijingLocationsDisplay[0] = "Beijing National Stadium";
for(var i=0; i< beijingLocations.length; i++) {
    if(beijingLocations[i]!=null){
        beijingLocationsDisplay[b]= " " + beijingLocations[i];
        b++;
    }
}
document.getElementById('addLocationsB').innerHTML = beijingLocationsDisplay;


var guangzhouLocations = [];
guangzhouLocations[0] = localStorage.getItem('guangzhouPlace2');
guangzhouLocations[1] = localStorage.getItem('guangzhouPlace3');
guangzhouLocations[2] = localStorage.getItem('guangzhouPlace4');
guangzhouLocations[3] = localStorage.getItem('guangzhouPlace5');
guangzhouLocations[4] = localStorage.getItem('guangzhouPlace6');
var guangzhouLocationsDisplay = [];
var g=1;
guangzhouLocationsDisplay[0] = "Sacred Heart Cathedral";
for(var i=0; i< guangzhouLocations.length; i++) {
    if(guangzhouLocations[i]!=null){
        guangzhouLocationsDisplay[g]= " " + guangzhouLocations[i];
        g++;
    }
}
document.getElementById('addLocationsG').innerHTML = guangzhouLocationsDisplay;

var shanghaiLocations = [];
shanghaiLocations[0] = localStorage.getItem('shanghaiPlace2');
shanghaiLocations[1] = localStorage.getItem('shanghaiPlace3');
shanghaiLocations[2] = localStorage.getItem('shanghaiPlace4');
shanghaiLocations[3] = localStorage.getItem('shanghaiPlace5');
shanghaiLocations[4] = localStorage.getItem('shanghaiPlace6');
var shanghaiLocationsDisplay = [];
var s=1;
shanghaiLocationsDisplay[0] = "Oriental Pearl Tower";
for(var i=0; i< shanghaiLocations.length; i++) {
    if(shanghaiLocations[i]!=null){
        shanghaiLocationsDisplay[s]= " " + shanghaiLocations[i];
        s++;
    }
}

document.getElementById('addLocationsS').innerHTML = shanghaiLocationsDisplay;
