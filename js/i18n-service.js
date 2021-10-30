'use strict'

var gTrans = {
    gallery: {
        en: 'Gallery',
        he: 'גלריה'
    },
    'my-memes': {
        en: 'My-Memes',
        he: 'הממים שלי'
    },
    about: {
        en: 'About',
        he: 'מידע'
    },
    search: {
        en: 'Enter search keyword',
        he: 'הקלד מילת חיפוש'
    },
    funny: {
        en: 'Funny',
        he: 'מצחיק'
    },
    all: {
        en: 'All',
        he: 'כל התמונות'
    },
    Happy: {
        en: 'Happy',
        he: 'שמח'
    },
    animals: {
        en: 'Animals',
        he: 'חיות',
    },
    sleep: {
        en: 'Sleep',
        he: 'ישן',
    },
    lovley: {
        en: 'Lovley',
        he: 'אוהב ',
    },
    'top-text': {
        en: 'Enter Top text',
        he: 'טקסט שורה עליונה'
    },
    'bottom-text': {
        en: 'Enter Bottom text',
        he: 'טקסט שורה תחתונה'
    },
    download: {
        en: 'Download as jpeg',
        he: 'הורד '
    },
    upload: {
        en: 'Upload Image from Canvas',
        he: 'העלאת תמונה מהקאנבס'
    },
    share: {
        en: 'Share',
        he: 'שתף'
    }
}

var gCurrLang = 'en';

function setLang(lang) {
    gCurrLang = lang;
}

function getTrans(transKey) {

    var keyTrans = gTrans[transKey]
        // TODO: if key is unknown return 'UNKNOWN'
    if (!keyTrans) return 'UNKNOWN';
    // TODO: get from gTrans
    var txt = keyTrans[gCurrLang]
        // TODO: If translation not found - use english
    if (!txt) txt = keyTrans.en;
    return txt;
}

function doTrans() {
    // TODO: 
    // for each el:
    //    get the data-trans and use getTrans to replace the innerText 
    var els = document.querySelectorAll('[data-trans]')
    els.forEach((el) => {
        var elTrans = el.dataset.trans
            //  ITP: support placeholder    
        if (el.nodeName === 'INPUT') {
            el.placeholder = getTrans(elTrans)
        } else {
            el.innerText = getTrans(elTrans)
        }
    })

}