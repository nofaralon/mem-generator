'use strict'

function renderTextTop() {
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

function onMoveDwon() {
    gMeme.lines[gLineIdx].pos.y += 10
    drawImg2(gMeme.selectedImgId)
}

function onMoveUp() {
    gMeme.lines[gLineIdx].pos.y -= 2
    drawImg2(gMeme.selectedImgId)
}

// function onSaveMyMeme() {
//     var meme = Object.assign({}, gMeme)
//     saveToStorage(MEME_KEY, meme)
//         gMeme.lines[0].txt = ' '
//         gMeme.lines[1].txt = ' '
//     var elTopText = document.querySelector('.text-top')
//     elTopText.placeholder = 'Enter Top text '
//     var elBottomText = document.querySelector('.text-bottom')
//     elBottomText.placeholder = 'Enter Bottom text'


// }