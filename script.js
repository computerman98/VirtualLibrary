alert('Hello World')
const mysteryButton = document.getElementsByClassName('savebtn');
let randValue = () =>  {
    return Math.floor(Math.random() * 256);
};
function colorChange(event) {
    let randColor = 'rgb(' + randValue() + ',' + randValue() + ',' + randValue() + ')';
    event.target.style.backgroundColor = randColor;
}

mysteryButton.addEventListener('wheel', colorChange);
