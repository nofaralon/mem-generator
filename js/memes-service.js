'use strict'

var gElCanvas;
var gCtx;



var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [{
        txt: ' ',
        size: 20,
        align: 'left',
        color: 'red'
    }]
}




function updateGmeme(imgId) {
    gMeme.selectedImgId = imgId
}

function drawText(x, y) {
    var text = gMeme.lines[0].txt

    gCtx.lineWidth = 2;
    // gCtx.align = ''
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = '40px impact';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
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
        x: gElCanvas.width / 10,
        y: gElCanvas.height / 10,
    }

    drawText(posTop.x, posTop.y)
}


function onChangeTextTop(newText) {
    gMeme.lines[0].txt = newText
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