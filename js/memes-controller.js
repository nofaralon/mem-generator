'use strict'

function renderText() {
    drawText()
}

function onChangeText(newText) {
    changeText(newText)
    drawImg2(gMeme.selectedImgId)
}

function onAddLine() {
    addline()
    var elInput = document.querySelector('.text-meme')
    elInput.value = ' '
}

function onSwichLine() {
    switchLine()
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


function addListeners() {
    addMouseListeners()
    addTouchListeners()
    window.addEventListener('resize', () => {
        resizeCanvas()
        drawImg2(gMeme.selectedImgId)
    })
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
    const pos = getEvPos(ev)
    if (!isLineClicked(pos)) return
    setLineDrag(true)
    gStartPos = pos
    document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
    const line = getLine();
    if (line.isDrag) {
        const pos = getEvPos(ev)
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y
        gStartPos = pos
        moveLine(dx, dy)
        drawImg2(gMeme.selectedImgId)
    }
}

function onUp() {
    setLineDrag(false)
    document.body.style.cursor = 'grab'
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}