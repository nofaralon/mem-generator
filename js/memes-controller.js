'use strict'

function renderTextTop() {
    var posTop = {
        x: gElCanvas.width / 2,
        y: gElCanvas.height / 8,
    }
    gMeme.lines[0].pos = posTop

    drawText(0)
}


function onChangeTextTop(newText) {
    gMeme.lines[0].txt = newText
    drawImg2(gMeme.selectedImgId)
    gLineIdx = 0

}


function onAddLine() {
    var elInput = document.querySelector('.text-bottom')
    elInput.style.opacity = 1
    addline()

}


function renderTextBottom() {
    var posBottom = {
        x: gElCanvas.width / 2,
        y: gElCanvas.height / 1.2,
    }
    gMeme.lines[1].pos = posBottom

    drawText(1)
}

function onChangeTextBottom(newText) {
    gMeme.lines[1].txt = newText
    drawImg2(gMeme.selectedImgId)

    gLineIdx = 1

}


function onChangFontSize(fontsize) {

    if (fontsize === 'decrease') {
        gMeme.lines[gLineIdx].size -= 2
        drawImg2(gMeme.selectedImgId)
    } else {
        gMeme.lines[gLineIdx].size += 2
        drawImg2(gMeme.selectedImgId)
    }

}

function onRemoveLine() {
    gMeme.lines[gLineIdx].txt = ' '
    drawImg2(gMeme.selectedImgId)
}

function onSetfont(NewFont) {
    gMeme.lines[gLineIdx].font = NewFont
    drawImg2(gMeme.selectedImgId)

}

function onAlignText(align) {
    gMeme.lines[gLineIdx].align = align
    drawImg2(gMeme.selectedImgId)
}

function onSetStrokeText(strokeText) {
    gMeme.lines[gLineIdx].strokeColor = strokeText
    drawImg2(gMeme.selectedImgId)
}


function onSetFillText(fillText) {
    gMeme.lines[gLineIdx].fillColor = fillText
    drawImg2(gMeme.selectedImgId)
}

function onMove(movment) {

    console.log(gMeme.lines[0].pos.x);
    console.log(gMeme.lines[0].pos.y);

    if (movment === 'up') {
        gMeme.lines[0].pos.x += 2
        gMeme.lines[0].pos.y += 2
        drawImg2(gMeme.selectedImgId)
    } else {
        gMeme.lines[0].pos.x -= 2
        gMeme.lines[0].pos.y -= 2
        drawImg2(gMeme.selectedImgId)
    }


}



function onMoveUp() {
    console.log(gMeme.lines[0].pos.x);
    console.log(gMeme.lines[0].pos.y);
    gMeme.lines[0].pos.x += 100
    gMeme.lines[0].pos.y += 100
    console.log(gMeme.lines[0].pos.x);
    console.log(gMeme.lines[0].pos.y);
    drawImg2(gMeme.selectedImgId)

}