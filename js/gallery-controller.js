'use strict'

function init() {
    console.log('hi');
    renderImgs()
}

function renderImgs() {
    var imgs = getImgs()

    var strHtmls = imgs.map(function(img) {
        return ` <div data-id="${img.id}" ><img src="${img.url}"></div>`
    })

    document.querySelector('.img-container').innerHTML = strHtmls.join('');
}