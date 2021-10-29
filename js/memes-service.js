'use strict'

const MEME_KEY = 'memes';

var gElCanvas;
var gCtx;
var gLineIdx;
var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [{
        pos: { x: 250, y: 50 },
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

function drawText(idx) {
    var line = gMeme.lines[idx]
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
        if (gMeme.lines.length > 1) {
            renderTextBottom()

        }

    };

}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'My-Meme';
}

function createLine(pos) {

    var line = {
        pos: pos,
        txt: ' ',
        size: 50,
        align: 'center',
        fillColor: 'white',
        strokeColor: 'black',
        font: 'impact'
    }
    gMeme.lines.push(line)
}

function addline() {
    if (gMeme.lines.length === 1) {
        var posBottom = {
            x: gElCanvas.width / 2,
            y: gElCanvas.height / 1.2,
        }
        createLine(posBottom)
    } else {
        var posCenter = {
            x: gElCanvas.width / 2,
            y: gElCanvas.height / 2,
        }
        createLine(posCenter)
    }
}


// var elInput = document.querySelector('.text-meme')
// elInput.addEventListener('input', () => {
//     console.log(gMeme.lines[0].txt);
//     gMeme.lines[0].txt = elInput.value
//     var txt = gMeme.lines[0].txt
//     drawText(txt, 50, 50)
//         // renderCanvas()


// })