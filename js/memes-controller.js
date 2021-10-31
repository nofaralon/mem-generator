'use strict'

function renderTextTop() {
    drawText(0)
}

function onChangeTextTop(newText) {
    changeTopText(newText)
    drawImg2(gMeme.selectedImgId)
}

function onAddLine() {
    var elInput = document.querySelector('.text-bottom')
    elInput.style.opacity = 1
    addline()
}

function renderTextBottom() {
    drawText(1)
}

function onChangeTextBottom(newText) {
    changeTextBottom(newText)
    drawImg2(gMeme.selectedImgId)
}

function onChangFontSize(fontsize) {
    changFontSize(fontsize)
    drawImg2(gMeme.selectedImgId)
}

function onRemoveLine() {
    removeLine()
    drawImg2(gMeme.selectedImgId)
}

function onSetfont(NewFont) {
    setfont(NewFont)
    drawImg2(gMeme.selectedImgId)
}

function onAlignText(align) {
    alignText(align)
    drawImg2(gMeme.selectedImgId)
}

function onSetStrokeText(strokeText) {
    setStrokeText(strokeText)
    drawImg2(gMeme.selectedImgId)
}

function onSetFillText(fillText) {
    setFillText(fillText)
    drawImg2(gMeme.selectedImgId)
}

function onMoveDwon() {
    moveDwon()
    drawImg2(gMeme.selectedImgId)
}

function onMoveUp() {
    moveUp()
    drawImg2(gMeme.selectedImgId)
}