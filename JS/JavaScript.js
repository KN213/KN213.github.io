var first = document.querySelector('.first')
var second = document.querySelector('.second')
first.addEventListener('mouseover',function () {
    second.style.display='block'
})
first.addEventListener('mouseout',function () {
    second.style.display='none'
})


var arrowTop = document.querySelector('.arrowTop')
arrowTop.addEventListener('click', function() {
    window.scrollTo(pageXOffset, 0);
});

window.addEventListener('scroll', function() {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});

var Light = document.querySelector('.Light')
var Dark = document.querySelector('.Dark')

var header = document.querySelectorAll('.header')
var FlexboxItem = document.querySelectorAll('.FlexboxItem')
var GridItem = document.querySelectorAll('.GridItem')
var Body = document.querySelector('body')

Light.addEventListener('click',function () {
    Dark.style.display='block'
    Light.style.display='none'
    f(header,'background-color: yellow; color: black;')
    f(FlexboxItem,'background-color: greenyellow;')
    f(GridItem,'background-color: green; color: lightcyan;')
    Body.style='background-image: url(./Images/back.jpeg);';
})
Dark.addEventListener('click',function () {
    Light.style.display='block'
    Dark.style.display='none'
    f(header,'none')
    f(FlexboxItem,'none')
    f(GridItem,'none')
    Body.style='none';
})


function f(a, b) {
    for (var i = 0; i < a.length; i++) {
        a[i].style = b;
    }
}
