//1st method
function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// (2nd method) handle blue button click by setting function name
const blueButton = document.getElementById('make-blue-button');
// just set the name of the function
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}



// (3rd method) handle event using anonymous function 
const greenButton = document.getElementById('make-green-button');
//anonymous function
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}



// (4th method)handle by using add eventLisenter
const goldenButton = document.getElementById('make-golden-button');

goldenButton.addEventListener('click', makeGolden);


function makeGolden() {
    document.body.style.backgroundColor = 'gold';
}


//(5th method)add evenLisnenter
const hotPinkButton = document.getElementById('make-hotpink-button');
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink'
})

// (6th method)direct shortcut

document.getElementById('light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})

