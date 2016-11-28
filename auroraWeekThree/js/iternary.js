/**
 * Created by khutaijashariff on 11/22/16.
 */



var incrementDay = 1;
function addDay() {
    incrementDay++;
    var parentDiv = document.createElement('div');
    parentDiv.classList.add("flex-item");
    parentDiv.id = "day" + incrementDay;
    parentDiv.innerHTML = '<div class="flex-header">Day' + incrementDay + '</div>';
    var addDayControlDiv = document.createElement('div');
    addDayControlDiv.className = ("flex-item-add");
    addDayControlDiv.id = "addDayControl";
    addDayControlDiv.innerHTML = '<div onclick="addDay()" class="fa fa-plus fa-5x plus"></div>';
    document.getElementById('addDayContainer').removeChild(addDayControl);
    document.getElementById('addDayContainer').appendChild(parentDiv);
    document.getElementById('addDayContainer').appendChild(addDayControlDiv);
}

function stringToArray(sceneList)
{
    if(sceneList == null || sceneList == "")
    {
        return new Array();
    }
    return sceneList.split(",");
}

function getChinaLocations() {
    var cityNames = localStorage.getItem('cityList-CN');
    cityNames = stringToArray(cityNames);
    console.log(cityNames);
    for (var i = 0; i < cityNames.length; i++) {
        console.log(cityNames);
        document.getElementById(cityNames[i]).className = "jumbotron";
    }
    var beijingLocations = localStorage.getItem('BeijingLocations');
    if(beijingLocations == null || beijingLocations.length!=0) {
        document.getElementById('addLocationsBJ').innerHTML = beijingLocations;
    }
    var guangzhouLocations = localStorage.getItem('GuangzhouLocations');
    if(guangzhouLocations == null || guangzhouLocations.length!=0) {
        document.getElementById('addLocationsG').innerHTML = guangzhouLocations;
    }
    var shanghaiLocations = localStorage.getItem('ShanghaiLocations');
    if(shanghaiLocations == null || shanghaiLocations.length!=0) {
        document.getElementById('addLocationsS').innerHTML = shanghaiLocations;
    }
}

function getIndiaLocations() {
    var cityNames = localStorage.getItem('cityList-IN');
    cityNames = stringToArray(cityNames);
    console.log(cityNames);
    for (var i = 0; i < cityNames.length; i++) {
        document.getElementById(cityNames[i]).className = "jumbotron";
    }
}

function getAmericaLocations() {
    var cityNames = localStorage.getItem('cityList-US');
    var cityNamesWithoutSpace = cityNames.replace(/\s/g,"");
    cityNamesWithoutSpace = stringToArray(cityNamesWithoutSpace);
    for (var i = 0; i < cityNamesWithoutSpace.length; i++) {
        console.log(cityNamesWithoutSpace);
        document.getElementById(cityNamesWithoutSpace[i]).className = "jumbotron";
    }
    var newyorkLocations = localStorage.getItem('NewyorkLocations');
    if(newyorkLocations == null || newyorkLocations.length!=0){
        document.getElementById('addLocationsN').innerHTML = newyorkLocations;
    }
    var bostonLocations = localStorage.getItem('BostonLocations');
    if(bostonLocations== null || bostonLocations.length!=0) {
        document.getElementById('addLocationsB').innerHTML = bostonLocations;
    }
    var sanfranciscoLocations = localStorage.getItem('SanfranciscoLocations');
    if(sanfranciscoLocations == null || sanfranciscoLocations.length!=0) {
        document.getElementById('addLocationsS').innerHTML = sanfranciscoLocations;
    }
}

