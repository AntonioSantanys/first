window.onload = function () {

    let select = document.querySelector('select');
    select.addEventListener('change', function () {

        let selected = select.selectedOptions[0];
        document.body.style.backgroundColor = selected.value;

        localStorage.setItem('background-color', selected.value);
    });


    let inputFontSize = document.querySelector('input[name="font-size"]');
    inputFontSize.addEventListener('change', function () {
        let paragraph = document.querySelector('p');
        paragraph.style.fontSize = `${inputFontSize.value}px`

        localStorage.setItem('paragraph-size', `${inputFontSize.value}px`)
    });


    let inputLineHeight = document.querySelector('input[name="line-height"]');
    inputLineHeight.addEventListener('change', function () {

        let paragraph = document.querySelector('p');
        paragraph.style.lineHeight = `${inputLineHeight.value}px`

        localStorage.setItem('paragraph-line-height', `${inputLineHeight.value}px`)
    });


    let inputFontFamily = document.querySelector('select[name="font-family"]');
    inputFontFamily.addEventListener('change', function () {

        let selected = select.selectedOptions[0];
        paragraph.style.fontFamily = `${inputFontFamily.value}`

        localStorage.setItem('selected-font-family', `${inputFontFamily.value}`)
    });


    let inputColorText = document.querySelector('select[name="list-color-text"]');
    inputColorText.addEventListener('change', function () {

         let selected = select.selectedOptions[0];
         paragraph.style.color = `${inputColorText.value}`
         
         localStorage.setItem('color-text', `${inputColorText.value}`)
    })  



    let savedBackground = localStorage.getItem('background-color');
    document.body.style.backgroundColor = savedBackground;

    let paragraph = document.querySelector('p')
    let savedParagraphSize = localStorage.getItem('paragraph-size');
    paragraph.style.fontSize = savedParagraphSize;

    let savedParagraphLineHeight = localStorage.getItem('paragraph-line-height');
    paragraph.style.lineHeight = savedParagraphLineHeight;

    let savedFontFamily = localStorage.getItem('selected-font-family');
    paragraph.style.fontFamily = savedFontFamily;

    let savedColorText = localStorage.getItem('color-text');
    paragraph.style.color = savedColorText;

};
