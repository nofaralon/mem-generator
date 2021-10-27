'use strict'

var gElCanvas;
var gCtx;

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I never eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
    }]
}


function updateGmeme(imgId) {
    gMeme.selectedImgId = imgId
}

function drawText(text, x, y) {

    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = '40px impact';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function drawImg2(imgId) {
    var img = new Image();
    img.src = `img/${imgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    };
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'My-Meme';
}



// ************************ meme-controll// ***********************

var elInput = document.querySelector('.text-meme')
elInput.addEventListener('input', () => {
    gMeme.lines.text = elInput.value
    var txt = gMeme.lines.text
    drawText(txt, 50, 50)

})