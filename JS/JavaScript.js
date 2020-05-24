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

