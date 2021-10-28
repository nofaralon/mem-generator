'use strict'

var gElCanvas;
var gCtx;



var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [{
        pos: { x: 50, y: 50 },
        txt: ' ',
        size: 50,
        align: 'center',
        fillColor: 'white',
        strokeColor: 'black',
        font: 'impact'
    }]
}




function updateGmeme(imgId) {
    gMeme.selectedImgId = imgId
}

function drawText(x, y) {
    // var text = gMeme.lines[0].txt
    var line = gMeme.lines[0]
    console.log(gMeme.lines[0]);
    const { pos, txt, size, fillColor, strokeColor, font, align } = line

    gCtx.lineWidth = 2;
    gCtx.maxWidth = gElCanvas.width
    gCtx.textAlign = align
    gCtx.strokeStyle = strokeColor;
    gCtx.fillStyle = fillColor;
    gCtx.font = `${size}px ${font}`;
    gCtx.fillText(txt, pos.x, pos.y, 500);
    gCtx.strokeText(txt, pos.x, pos.y, 500);
}

function drawImg2(imgId) {
    var img = new Image();
    img.src = `img/${imgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        renderTextTop()

    };

}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'My-Meme';
}




// var elInput = document.querySelector('.text-meme')
// elInput.addEventListener('input', () => {
//     console.log(gMeme.lines[0].txt);
//     gMeme.lines[0].txt = elInput.value
//     var txt = gMeme.lines[0].txt
//     drawText(txt, 50, 50)
//         // renderCanvas()


// })