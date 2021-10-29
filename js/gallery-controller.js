'use strict'



function renderImgs() {
    var imgs = getImgs()

    var strHtmls = imgs.map(function(img) {
        return ` <div onclick="onSelectedImg(${img.id})" data-id="${img.id}" ><img src="${img.url}"></div>`
    })

    document.querySelector('.img-container').innerHTML = strHtmls.join('');
}

function onSelectedImg(imgId) {
    var elGallery = document.querySelector('.main-gallery')
    elGallery.classList.add('hide')
    var elCanvas = document.querySelector('.main-canvas')
    elCanvas.classList.remove('hide')
    updateGmeme(imgId)
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    drawImg2(gMeme.selectedImgId)
}