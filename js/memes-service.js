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

function changeTopText(newText) {
    gMeme.lines[0].txt = newText
    gLineIdx = 0
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

function changeTextBottom(newText) {
    gMeme.lines[1].txt = newText
    gLineIdx = 1
}

function removeLine() {
    gMeme.lines[gLineIdx].txt = ' '
}

function setfont(NewFont) {
    gMeme.lines[gLineIdx].font = NewFont
}

function alignText(align) {
    gMeme.lines[gLineIdx].align = align
}

function setStrokeText(strokeText) {
    gMeme.lines[gLineIdx].strokeColor = strokeText

}

function setFillText(fillText) {
    gMeme.lines[gLineIdx].fillColor = fillText

}

function moveDwon() {
    gMeme.lines[gLineIdx].pos.y += 10
}

function updateGmeme(imgId) {
    gMeme.selectedImgId = imgId
}

function moveUp() {
    gMeme.lines[gLineIdx].pos.y -= 2
}

function changFontSize(fontsize) {
    if (fontsize === 'decrease') {
        gMeme.lines[gLineIdx].size -= 2
    } else {
        gMeme.lines[gLineIdx].size += 2
    }

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