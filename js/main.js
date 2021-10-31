'use strict'

function init() {
    renderImgs()
    gElCanvas = document.getElementById('my-canvas');
    gCtx = gElCanvas.getContext('2d');
    addListeners()
    gElCanvas.addEventListener('keypress', function() {
        var elInput = document.querySelector(".text-meme")
        elInput.value += event.key
        onChangeText(elInput.value)
    }, false);
}


function toggleMenu() {
    var elNav = document.querySelector('.main-nav')
    elNav.classList.toggle('main-nav-open');
    var elBtn = document.querySelector('.btn-menu')
    if (elNav.classList.contains('main-nav-open')) {
        elBtn.innerText = 'X'
    } else {
        elBtn.innerText = '☰'
    }

}


function onOpenMyMemes() {
    var imgs = loadFromStorage(MEME_KEY)
    var elGallery = document.querySelector('.main-my-memes')
    elGallery.classList.remove('hide')
    var elGallery = document.querySelector('.main-gallery')
    elGallery.classList.add('hide')
    var elCanvas = document.querySelector('.main-canvas')
    elCanvas.classList.add('hide')

    if (imgs) {
        var strHtmls = imgs.map(function(img) {
            return ` <div class="saved-memes"><img src="${img}"></div>`
        })

        document.querySelector('.main-my-memes').innerHTML = strHtmls.join('');
    }
}


function onOpenGallery() {
    var elGallery = document.querySelector('.main-gallery')
    elGallery.classList.remove('hide')
    var elCanvas = document.querySelector('.main-canvas')
    elCanvas.classList.add('hide')
    var elGallery = document.querySelector('.main-my-memes')
    elGallery.classList.add('hide')
    toggleMenu()
}

function onSetLang(lang) {
    setLang(lang);
    var elBody = document.querySelector('body')
    if (lang === 'he') {
        elBody.classList.add('rtl')
    } else {
        elBody.classList.remove('rtl')
    }
    doTrans();
}