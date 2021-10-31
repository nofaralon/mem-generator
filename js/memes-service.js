'use strict'

const MEME_KEY = 'memes';
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

var gStartPos;
var gMarkLine = 0;
var gElCanvas;
var gCtx;
var gLineIdx = 0;
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
        font: 'impact',
        isDrag: false

    }]
}


function createLine(pos) {

    var line = {
        pos: pos,
        txt: ' ',
        size: 50,
        align: 'center',
        fillColor: 'white',
        strokeColor: 'black',
        font: 'impact',
        isDrag: false
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
        gMeme.selectedLineIdx = 1
    } else {
        var posCenter = {
            x: gElCanvas.width / 2,
            y: gElCanvas.height / 2,
        }
        createLine(posCenter)
        gMeme.selectedLineIdx++
    }
}

function changeText(newText) {
    gMeme.lines[gMeme.selectedLineIdx].txt = newText
}

function removeLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    gMeme.selectedLineIdx--;
}

function setfont(NewFont) {
    gMeme.lines[gMeme.selectedLineIdx].font = NewFont
}

function alignText(align) {
    gMeme.lines[gMeme.selectedLineIdx].align = align
}

function setStrokeText(strokeText) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = strokeText

}

function setFillText(fillText) {
    gMeme.lines[gMeme.selectedLineIdx].fillColor = fillText

}

function moveDwon() {
    gMeme.lines[gMeme.selectedLineIdx].pos.y += 10
}

function updateGmeme(imgId) {
    gMeme.selectedImgId = imgId
}

function moveUp() {
    gMeme.lines[gMeme.selectedLineIdx].pos.y -= 2
}

function changFontSize(fontsize) {
    if (fontsize === 'decrease') {
        gMeme.lines[gMeme.selectedLineIdx].size -= 2
    } else {
        gMeme.lines[gMeme.selectedLineIdx].size += 2
    }

}

function drawText() {
    gMeme.lines.forEach((line) => {
        // var line = gMeme.lines[gLineIdx]
        const { pos, txt, size, fillColor, strokeColor, font, align } = line

        gCtx.lineWidth = 2;
        gCtx.maxWidth = gElCanvas.width
        gCtx.textAlign = align
        gCtx.strokeStyle = strokeColor;
        gCtx.fillStyle = fillColor;
        gCtx.font = `${size}px ${font}`;
        gCtx.fillText(txt, pos.x, pos.y, 500);
        gCtx.strokeText(txt, pos.x, pos.y, 500);

    })

}

function drawImg2(imgId) {
    var img = new Image();
    img.src = `img/${imgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        renderText()
        drawBorder()

    };

}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'My-Meme';
}

function drawBorder() {
    var currentLine = gMeme.lines[gMeme.selectedLineIdx];
    addRect(currentLine.pos.y, currentLine.size)
}

function switchLine() {
    if (!gMeme.lines.length) return;
    // drawImg2(gMeme.selectedImgId)
    if (gMeme.selectedLineIdx < gMeme.lines.length - 1) {
        gMeme.selectedLineIdx++;
    } else {
        gMeme.selectedLineIdx = 0;
    }
}

function addRect(posY, size) {
    gCtx.beginPath();
    gCtx.strokeStyle = 'red';
    gCtx.rect(0, posY - size, gElCanvas.width, size + 10);
    gCtx.stroke();
    gCtx.closePath();
}

function isLineClicked(clickedPos) {
    const { pos } = gMeme.lines[gMeme.selectedLineIdx]
    const distance = Math.sqrt((pos.x - clickedPos.x))
    return distance <= gMeme.lines[gMeme.selectedLineIdx].size
}

function setLineDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}

function moveLine(dx, dy) {

    var line = getLine()
    line.pos.x += dx
    line.pos.y += dy

}


function getLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}