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



// ************************ meme-controll ***********************


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
// var elInput = document.querySelector('.text-meme')
// elInput.addEventListener('input', () => {
//     console.log(gMeme.lines[0].txt);
//     gMeme.lines[0].txt = elInput.value
//     var txt = gMeme.lines[0].txt
//     drawText(txt, 50, 50)
//         // renderCanvas()


// })