'use strict'

function init() {
    renderImgs()
    gElCanvas = document.getElementById('my-canvas');
    gCtx = gElCanvas.getContext('2d');
    addListeners()
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
    var elGallery = document.querySelector('.main-my-memes')
    elGallery.classList.remove('hide')
    var elGallery = document.querySelector('.main-gallery')
    elGallery.classList.add('hide')
    var elCanvas = document.querySelector('.main-canvas')
    elCanvas.classList.add('hide')
}

function onOpenGallery() {
    var elGallery = document.querySelector('.main-gallery')
    elGallery.classList.remove('hide')
    var elCanvas = document.querySelector('.main-canvas')
    elCanvas.classList.add('hide')
    toggleMenu()
}

function onSetLang(lang) {
    setLang(lang);
    // TODO: if lang is hebrew add RTL class to document.body
    var elBody = document.querySelector('body')
        // var el = document.querySelector('body')
    if (lang === 'he') {
        elBody.classList.add('rtl')
    } else {
        elBody.classList.remove('rtl')
    }
    doTrans();
    // renderBooks()
}