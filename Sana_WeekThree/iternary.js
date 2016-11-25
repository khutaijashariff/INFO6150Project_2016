/**
 * Created by khutaijashariff on 11/22/16.
 */
var cityNames = JSON.parse(localStorage.getItem('CityNames'));
for (var i = 0; i < cityNames.length; i++) {
    document.getElementById(cityNames[i]).className = "jumbotron";
}
function openIternaryB1() {
    window.location = "iternaryChina.html";
}
function openIternaryB2() {
    var places1 = document.getElementById('b2').innerHTML;
    localStorage.setItem('beijingPlace1', places1);
    window.location = "iternaryChina.html";
}
function openIternaryB3() {
    var places2 = document.getElementById('b3').innerHTML;
    localStorage.setItem('beijingPlace2', places2);
    window.location = "iternaryChina.html";
}
function openIternaryB4() {
    var places3 = document.getElementById('b4').innerHTML;
    localStorage.setItem('beijingPlace3', places3);
    window.location = "iternaryChina.html";
}
function openIternaryB5() {
    var places4 = document.getElementById('b5').innerHTML;
    localStorage.setItem('beijingPlace4', places4);
    window.location = "iternaryChina.html";
}
function openIternaryB6() {
    var places5 = document.getElementById('b6').innerHTML;
    localStorage.setItem('beijingPlace5', places5);
    window.location = "iternaryChina.html";
}

function openIternaryG1() {
    window.location = "iternaryChina.html";
}
function openIternaryG2() {
    var places2 = document.getElementById('g2').innerHTML;
    localStorage.setItem('guangzhouPlace1', places2);
    window.location = "iternaryChina.html";
}
function openIternaryG3() {
    var places3 = document.getElementById('g3').innerHTML;
    localStorage.setItem('guangzhouPlace2', places3);
    window.location = "iternaryChina.html";
}
function openIternaryG4() {
    var places4 = document.getElementById('g4').innerHTML;
    localStorage.setItem('guangzhouPlace3', places4);
    window.location = "iternaryChina.html";
}
function openIternaryG5() {
    var places5 = document.getElementById('g5').innerHTML;
    localStorage.setItem('guangzhouPlace4', places5);
    window.location = "iternaryChina.html";
}
function openIternaryG6() {
    var places6 = document.getElementById('g6').innerHTML;
    localStorage.setItem('guangzhouPlace5', places6);
    window.location = "iternaryChina.html";
}

function openIternaryS1() {
    window.location = "iternaryChina.html";
}
function openIternaryS2() {
    var places2 = document.getElementById('s2').innerHTML;
    localStorage.setItem('shanghaiPlace1', places2);
    window.location = "iternaryChina.html";
}
function openIternaryS3() {
    var places3 = document.getElementById('s3').innerHTML;
    localStorage.setItem('shanghaiPlace2', places3);
    window.location = "iternaryChina.html";
}
function openIternaryS4() {
    var places4 = document.getElementById('s4').innerHTML;
    localStorage.setItem('shanghaiPlace3', places4);
    window.location = "iternaryChina.html";
}
function openIternaryS5() {
    var places5 = document.getElementById('s5').innerHTML;
    localStorage.setItem('shanghaiPlace4', places5);
    window.location = "iternaryChina.html";
}
function openIternaryS6() {
    var places6 = document.getElementById('s6').innerHTML;
    localStorage.setItem('shanghaiPlace5', places6);
    window.location = "iternaryChina.html";
}

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






function openIternaryK1() {
    window.location = "iternaryIndia.html";
}
function openIternaryK2() {
    var places2 = document.getElementById('k2').innerHTML;
    localStorage.setItem('kashmirPlace1', places2);
    window.location = "iternaryIndia.html";
}
function openIternaryK3() {
    var places3 = document.getElementById('k3').innerHTML;
    localStorage.setItem('kashmirPlace2', places3);
    window.location = "iternaryIndia.html";
}
function openIternaryK4() {
    var places4 = document.getElementById('k4').innerHTML;
    localStorage.setItem('kashmirPlace3', places4);
    window.location = "iternaryIndia.html";
}
function openIternaryK5() {
    var places5 = document.getElementById('k5').innerHTML;
    localStorage.setItem('kashmirPlace4', places5);
    window.location = "iternaryIndia.html";
}
function openIternaryK6() {
    var places6 = document.getElementById('k6').innerHTML;
    localStorage.setItem('kashmirPlace5', places6);
    window.location = "iternaryIndia.html";
}



function openIternaryN1() {
    window.location = "iternaryAmerica.html";
}
function openIternaryN2() {
    var places2 = document.getElementById('n2').innerHTML;
    localStorage.setItem('newyorkPlace1', places2);
    window.location = "iternaryAmerica.html";
}
function openIternaryN3() {
    var places3 = document.getElementById('n3').innerHTML;
    localStorage.setItem('newyorkPlace2', places3);
    window.location = "iternaryAmerica.html";
}
function openIternaryN4() {
    var places4 = document.getElementById('n4').innerHTML;
    localStorage.setItem('newyorkPlace3', places4);
    window.location = "iternaryAmerica.html";
}
function openIternaryN5() {
    var places5 = document.getElementById('n5').innerHTML;
    localStorage.setItem('newyorkPlace4', places5);
    window.location = "iternaryAmerica.html";
}
function openIternaryN6() {
    var places6 = document.getElementById('n6').innerHTML;
    localStorage.setItem('newyorkPlace5', places6);
    window.location = "iternaryAmerica.html";
}

function getChinaLocations() {
    var beijingLocations = [];
    var guangzhouLocations = [];
    var shanghaiLocations = [];
    for (var i = 0; i < 5; i++) {
        beijingLocations[i] = localStorage.getItem('beijingPlace' + (i + 1));
    }

    for (var i = 0; i < beijingLocations.length; i++) {
        if (beijingLocations[i] != null) {
            document.getElementById('addLocationsB' + (i + 1)).innerHTML = '| ' + beijingLocations[i];
        }
    }

    for (var i = 0; i < 5; i++) {
        guangzhouLocations[i] = localStorage.getItem('guangzhouPlace' + (i + 1));
    }

    for (var i = 0; i < guangzhouLocations.length; i++) {
        if (guangzhouLocations[i] != null) {
            document.getElementById('addLocationsG' + (i + 1)).innerHTML = '| ' + guangzhouLocations[i];
        }
    }

    for (var i = 0; i < 5; i++) {
        shanghaiLocations[i] = localStorage.getItem('shanghaiPlace' + (i + 1));
    }

    for (var i = 0; i < shanghaiLocations.length; i++) {
        if (shanghaiLocations[i] != null) {
            document.getElementById('addLocationsS' + (i + 1)).innerHTML = '| ' + shanghaiLocations[i];
        }
    }
}
function getIndiaLocations() {
    var kashmirLocations = [];
    for (var i = 0; i < 5; i++) {
        kashmirLocations[i] = localStorage.getItem('kashmirPlace' + (i + 1));
    }

    for (var i = 0; i < kashmirLocations.length; i++) {
        if (kashmirLocations[i] != null) {
            document.getElementById('addLocationsK' + (i + 1)).innerHTML = '| ' + kashmirLocations[i];
        }
    } 
}

function getAmericaLocations() {

    var newyorkLocations = [];
    for (var i = 0; i < 5; i++) {
        newyorkLocations[i] = localStorage.getItem('newyorkPlace' + (i + 1));
    }

    for (var i = 0; i < newyorkLocations.length; i++) {
        if (newyorkLocations[i] != null) {
            document.getElementById('addLocationsN' + (i + 1)).innerHTML = '| ' + newyorkLocations[i];
        }
    }
}


$(function () {
    for (var i = 0; i < 6; i++) {
        $("#addLocationsB" + i).draggable();
        $("#addLocationsG" + i).draggable();
        $("#addLocationsS" + i).draggable();
        $("#addLocationsK" + i).draggable();
        $("#addLocationsN" + i).draggable();
    }
});