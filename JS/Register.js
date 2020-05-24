var form = document.querySelector('.form')
var pass = form.querySelector('.pass')
var passConf = form.querySelector('.passConf')
var tel = form.querySelector('.tel')
form.addEventListener('submit',function (event) {
    event.preventDefault()
    var errors = form.querySelectorAll('.error')
    for (var i = 0; i<errors.length; i++){
        errors[i].remove()
    }
    if(pass.value !== passConf.value){
        var error = document.createElement('div')
        error.className='error'
        error.style.color = 'white'
        error.innerHTML = 'Паролі не співпадають'
        pass.parentElement.insertBefore(error,pass)
    }
    if(tel.value.length !== 12){
        var error = document.createElement('div')
        error.className='error'
        error.style.color = 'white'
        error.innerHTML = 'Неправильний номер'
        pass.parentElement.insertBefore(error,tel)
    }
})