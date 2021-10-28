'use strict'

function renderTextTop() {
    var posTop = {
        x: gElCanvas.width / 2,
        y: gElCanvas.height / 4,
    }
    gMeme.lines[0].pos = posTop

    drawText(posTop.x, posTop.y)
}


function onChangeTextTop(newText) {
    gMeme.lines[0].txt = newText
    drawImg2(gMeme.selectedImgId)
    var elInput = document.querySelector('.text-meme')
}


function onFontIncrease() {
    gMeme.lines[0].size += 2
    drawImg2(gMeme.selectedImgId)

}

function onFontDcrease() {
    gMeme.lines[0].size -= 2
    drawImg2(gMeme.selectedImgId)
}

function onRemoveLine() {
    gMeme.lines[0].txt = ' '
    drawImg2(gMeme.selectedImgId)
}

function onSetfont(NewFont) {
    gMeme.lines[0].font = NewFont
    drawImg2(gMeme.selectedImgId)

}

function onAlignText(align) {
    gMeme.lines[0].align = align
    drawImg2(gMeme.selectedImgId)
}

function onSetStrokeText(strokeText) {
    gMeme.lines[0].strokeColor = strokeText
    drawImg2(gMeme.selectedImgId)
}


function onSetFillText(fillText) {
    gMeme.lines[0].fillColor = fillText
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