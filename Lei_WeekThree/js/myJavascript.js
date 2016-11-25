/**
 * Created by khutaijashariff on 11/8/16.
 */

$('.carousel').carousel({
    interval: 5000 //changes the speed
})

function search() {
    var searchButtonValue =  document.getElementById('searchbar').value;
    if(searchButtonValue == 'United States of America')
    {
        sessionStorage.setItem("searchCountry", "America");
        sessionStorage.setItem("countryAB", "US");
    } 
    else if(searchButtonValue == "India") 
    {
        sessionStorage.setItem("searchCountry", "India");
        sessionStorage.setItem("countryAB", "IN");
    } 
    else if(searchButtonValue == "China")
    {
        sessionStorage.setItem("searchCountry", "China");
        sessionStorage.setItem("countryAB", "CN");
    }
    window.location = "map.html";
}

function openMapUSA() 
{
    sessionStorage.setItem("searchCountry", "America");
    sessionStorage.setItem("countryAB", "US");
    window.location = "map.html";
}
function openMapIndia() 
{
    sessionStorage.setItem("searchCountry", "India");
    sessionStorage.setItem("countryAB", "IN");
    window.location = "map.html";
}
function openMapChina() 
{
    sessionStorage.setItem("searchCountry", "China");
    sessionStorage.setItem("countryAB", "CN");
    window.location = "map.html";
}

function showText1() {
    $('#img1').removeClass('hidden');
}
function showText2() {
    $('#img2').removeClass('hidden');
}
function showText3() {
    $('#img3').removeClass('hidden');
}

function hideText1() {
    $('#img1').addClass('hidden');
}
function hideText2() {
    $('#img2').addClass('hidden');
}
function hideText3() {
    $('#img3').addClass('hidden');
}

$(function () {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
});
function openIternaryB() {
    window.location = "iternaryBeijing.html";
}
function openIternaryK() {
    window.location = "iternaryKashmir.html";
}
function openIternaryN() {
    window.location = "iternaryNewYork.html";
}

function checkScene(sceneID, sceneList) 
{
    if (sceneList.indexOf(sceneID) != -1)
    {
        return true;
    }
    return false;
}

function stringToArray(sceneList) 
{
    if(sceneList == null || sceneList == "")
    {
       return new Array();
    }
    return sceneList.split(",");
}

function arrayRemove(sceneID, sceneList) 
{
    if(sceneList == null || sceneList == "")
    {
        return "";
    }
            
    for (var i = 0; i < sceneList.length; i++) 
    {
        if(sceneList[i] == sceneID)
        {
            sceneList.splice(i, 1);
        }
    }
    return sceneList;
}

function changeSceneStatus(sceneID, city)
{
    var sceneList = localStorage.getItem("sceneList-"+ city);
    sceneList = stringToArray(sceneList);
    var scene = document.getElementById("scene"+sceneID);
    if(scene.innerHTML == "+")
    {
       if (sceneList == null || sceneList == "") 
        {
            sceneList = new Array();
        }
        sceneList.push(sceneID);
        localStorage.setItem("sceneList-"+ city, sceneList);
        scene.innerHTML = "-";

    }
    else if(scene.innerHTML == "-")
    {
        cityList = arrayRemove(sceneID,sceneList);
        localStorage.setItem("sceneList-"+ city, sceneList);
        scene.innerHTML = "+";
    }
}

function sceneStatusLoad(city)
{
    var sceneList = localStorage.getItem("sceneList-"+ city);
    var scene1 = document.getElementById("scene1");
    var scene2 = document.getElementById("scene2");
    var scene3 = document.getElementById("scene3");
    var scene4 = document.getElementById("scene4");
    var scene5 = document.getElementById("scene5");
    var scene6 = document.getElementById("scene6");
    if (sceneList == null || sceneList == "") 
    {
        scene1.innerHTML = "+";
        scene2.innerHTML = "+";
        scene3.innerHTML = "+";
        scene4.innerHTML = "+";
        scene5.innerHTML = "+";
        scene6.innerHTML = "+";
    }
    else
    {
        sceneList = stringToArray(sceneList);
        if (checkScene("1", sceneList)) 
        {
            scene1.innerHTML = "-";
        }
        else
        {
            scene1.innerHTML = "+";
        }
        if (checkScene("2", sceneList)) 
        {
            scene2.innerHTML = "-";
        }
        else
        {
            scene2.innerHTML = "+";
        }
        if (checkScene("3", sceneList)) 
        {
            scene3.innerHTML = "-";
        }
        else
        {
            scene3.innerHTML = "+";
        }
        if (checkScene("4", sceneList)) 
        {
            scene4.innerHTML = "-";
        }
        else
        {
            scene4.innerHTML = "+";
        }
        if (checkScene("5", sceneList)) 
        {
            scene5.innerHTML = "-";
        }
        else
        {
            scene5.innerHTML = "+";
        }
        if (checkScene("6", sceneList)) 
        {
            scene6.innerHTML = "-";
        }
        else
        {
            scene6.innerHTML = "+";
        }
    }

}


