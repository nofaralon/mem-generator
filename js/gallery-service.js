'use strict'
var gIdx = 1;
var gImgs;

var imgs = createImgs()
    // console.log(res);


function createImg(id = gIdx++, keywords = ['happy']) {
    var img = {
        id,
        url: `img/${id}.jpg`,
        keywords
    }
    return img
}

function createImgs() {
    var imgs = [];

    for (var i = 0; i < 18; i++) {
        var img = createImg();
        imgs.push(img)
    }
    gImgs = imgs;

    return gImgs;


}

function getImgs() {
    return gImgs
}