/**
 * Created by khutaijashariff on 11/8/16.
 */

$('.carousel').carousel({
    interval: 5000 //changes the speed
})


function openPage2() {
    window.location = 'http://webproject-team4-1.s3-website-us-east-1.amazonaws.com/#';
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
