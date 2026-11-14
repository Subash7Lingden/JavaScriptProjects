const hexBtn = document.querySelector('.hex-btn');
const hexColorValue = document.querySelector('.hex-color-value');
const hexColorContainer = document.querySelector('.hex-color-container')
const hexCopyBtn = document.querySelector('.hex-copy-color')
// Create Random HEX Color
hexBtn.addEventListener('click', () => {
    let characterSet = '0123456789ABCDEF';
    let hexColorOutput = "";

    for(let i = 0, charSetLength = characterSet.length; i < 6; ++i) {
        hexColorOutput += characterSet.charAt(Math.floor(Math.random() * charSetLength));
    }
    hexColorValue.textContent = `#${hexColorOutput}`;
    hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;
    hexBtn.style.color = `#${hexColorOutput}`;
} );

// Create RGB Colors Generator
const rgbBtn = document.querySelector('.rgb-btn');
const getRedInpurRange = document.querySelector('#red');
const getGreenInpurRange = document.querySelector('#green');
const getBlueInpurRange = document.querySelector('#blue');
const rgbColorContainer = document.querySelector('.rgb-color-container');
const rgbCopyBtn = document.querySelector('.rgb-copy-color');
const rgbColorValue = document.querySelector('.rgb-color-value');


rgbBtn.addEventListener('click', () => {
    let extractRedValue = getRedInpurRange.value;
    let extractGreenValue = getGreenInpurRange.value;
    let extractBlueValue = getBlueInpurRange.value;


rgbColorValue.textContent = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
rgbBtn.style.color = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`; 
})


function copyHexColorToClipBoard() {
    navigator.clipboard.writeText(hexColorValue.textContent);
    alert('hex color is copied to clipboard')
    
}
hexCopyBtn.addEventListener('click', copyHexColorToClipBoard)

function copyRgbColorToClipBoard() {
    navigator.clipboard.writeText(rgbColorValue.textContent);
    alert('rgb color is copied to clipboard')
    
    
}

rgbCopyBtn.addEventListener('click', copyRgbColorToClipBoard )
