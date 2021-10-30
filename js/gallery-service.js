'use strict'
var gIdx = 1;
var gImgs;
var imgs = createImgs()
var gKeywords = { 'happy': 12, 'funny': 20, 'Sleep': 3, 'Lovely': 4, 'Animals': 7 }

function createImg(keywords = ['happy'], id = gIdx++) {
    var img = {
        keywords,
        id,
        url: `img/${id}.jpg`
    }
    return img
}

// function createImgs() {
//     var imgs = [];

//     for (var i = 0; i < 18; i++) {
//         var img = createImg();
//         imgs.push(img)
//     }
//     gImgs = imgs;

//     return gImgs;


// }


function createImgs() {
    var imgs = [
        createImg(['Funny']),
        createImg(['Animals']),
        createImg(['Animals', 'Sleep']),
        createImg(['Animals', 'Sleep']),
        createImg(['Funny']),
        createImg(['Funny']),
        createImg(['Funny']),
        createImg(['Happy']),
        createImg(['Funny']),
        createImg(['Happy', 'Funny']),
        createImg(['Lovely']),
        createImg(['Funny']),
        createImg(['Funny']),
        createImg(['Funny']),
        createImg(['Funny']),
        createImg(['Funny']),
        createImg(['Funny']),
        createImg(['Happy'])

    ];

    gImgs = imgs;
    console.log(gImgs);

    return gImgs;


}

function getImgs() {
    return gImgs
}

function updateKeywords(keyword) {
    gKeywords[`'${keyword}'`] += 1
}