// ELEMENTEN CREËREN
let numberChosen = 0;

let container = document.createElement('section');
let starContainer = document.createElement('div');
let textContainer = document.createElement('div');
let h1 = document.createElement('h1');
h1.innerText = "How did we do?"
let p = document.createElement('p');
p.innerText = "Please let us know how we did with your support request. All feedback is appliciated to help us improve our offering!";
let rateContainer = document.createElement('div');
let button = document.createElement('button');
button.innerText = "SUBMIT";
let rateNumContainerOne = document.createElement('div');
let rateNumContainerTwo = document.createElement('div');
let rateNumContainerThree = document.createElement('div');
let rateNumContainerFour = document.createElement('div');
let rateNumContainerFive = document.createElement('div');
let star = document.createElement('img');
star.src="/images/icon-star.svg";

let thankYouImgContainer = document.createElement('div');
let thankYouImg = document.createElement('img');
thankYouImg.src="/images/illustration-thank-you.svg"

let youSelected = document.createElement('div');
let pYouSelected = document.createElement('p');

let thankYouContainer = document.createElement('div');
let h1Thank = document.createElement('h1');
h1Thank.innerText = "Thank you!"
let pThank = document.createElement('p');
pThank.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

rateNumContainerOne.classList.add('rateClass');
rateNumContainerTwo.classList.add('rateClass');
rateNumContainerThree.classList.add('rateClass');
rateNumContainerFour.classList.add('rateClass');
rateNumContainerFive.classList.add('rateClass');




rateNumContainerOne.innerText = "1";
rateNumContainerTwo.innerText = "2";
rateNumContainerThree.innerText = "3";
rateNumContainerFour.innerText = "4";
rateNumContainerFive.innerText = "5";




// ELEMENTEN TOEVOEGEN
document.body.appendChild(container);
container.appendChild(starContainer);
container.appendChild(textContainer);
container.appendChild(rateContainer);
container.appendChild(thankYouImgContainer);

thankYouImgContainer.appendChild(thankYouImg);
textContainer.appendChild(h1);
textContainer.appendChild(p);
rateContainer.appendChild(rateNumContainerOne);
rateContainer.appendChild(rateNumContainerTwo);
rateContainer.appendChild(rateNumContainerThree);
rateContainer.appendChild(rateNumContainerFour);
rateContainer.appendChild(rateNumContainerFive);
container.appendChild(button);
starContainer.appendChild(star);
container.appendChild(youSelected);
youSelected.appendChild(pYouSelected);
container.appendChild(thankYouContainer);
thankYouContainer.appendChild(h1Thank);
thankYouContainer.appendChild(pThank);


// LOGICA
function containerBackground() {
    rateNumContainerOne.style.backgroundColor = "#262f38";
    rateNumContainerTwo.style.backgroundColor = "#262f38";
    rateNumContainerThree.style.backgroundColor = "#262f38";
    rateNumContainerFour.style.backgroundColor = "#262f38";
    rateNumContainerFive.style.backgroundColor = "#262f38";
}


rateNumContainerOne.addEventListener('click', () => {
    containerBackground();
    rateNumContainerOne.style.backgroundColor = "#fc7613"; // Deze lijn wijzigt alleen de achtergrondkleur bij klikken
    numberChosen = 1;
    disPlay();
});



rateNumContainerTwo.addEventListener('click', () => {
    containerBackground();
    rateNumContainerTwo.style.backgroundColor = "#fc7613";
    numberChosen = 2;
    disPlay();
});

rateNumContainerThree.addEventListener('click', () => {
    containerBackground();
    rateNumContainerThree.style.backgroundColor = "#fc7613";
    numberChosen = 3;
    disPlay();
});

rateNumContainerFour.addEventListener('click', () => {
    containerBackground();
    rateNumContainerFour.style.backgroundColor = "#fc7613";
    numberChosen = 4;
    disPlay();
});

rateNumContainerFive.addEventListener('click', () => {
    containerBackground();
    rateNumContainerFive.style.backgroundColor = "#fc7613";
    numberChosen = 5;
    console.log(numberChosen);
    disPlay();
});


function disPlay() {
    if( numberChosen !== 0) {
        button.addEventListener('click', () => {
            starContainer.style.display = "none";
            textContainer.style.display = "none";
            rateContainer.style.display = "none";
            button.style.display = "none";
            thankYouImgContainer.style.display = "flex";
            thankYouContainer.style.display = "block";
            youSelected.style.display = "flex";
            pYouSelected.innerText = `You selected ${numberChosen} out of 5`;
            
        })
    }
}


button.addEventListener('mouseover', () => {
        button.style.backgroundColor = "white";
        button.style.color = "#fc7613";
})

button.addEventListener('mouseout', () => {
        button.style.backgroundColor = "#fc7613";
        button.style.color = "white";
})

// let bunchRateNum = document.querySelectorAll('.rateClass');

// bunchRateNum.forEach(bunch => {
//     bunch.addEventListener('mouseover', () => {
//         bunch.style.backgroundColor = "grey";
//     })

// });

// bunchRateNum.forEach(bunch => {
//     bunch.addEventListener('mouseout', () => {
//         bunch.style.backgroundColor = "#212832";
//     })

// });
//CSS STYLES
document.body.style.backgroundColor = '#141519';
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.fontFamily = "Overpass";
document.body.style.fontWeight = "100";
document.body.style.color = "white";

h1.style.fontWeight = "600";

p.style.fontSize = ".9rem";
p.style.opacity = ".7";

container.style.backgroundColor = "#212832";
container.style.height = "21.5rem";
container.style.width = "20rem";
container.style.borderRadius = "5%";
container.style.padding = "1.5rem";
container.style.boxSizing = "border-box";

starContainer.style.height = "2.5rem";
starContainer.style.width = "2.5rem";
starContainer.style.backgroundColor = "#262f38";
starContainer.style.borderRadius = "50%";
starContainer.style.display = "flex";
starContainer.style.justifyContent = "center";
starContainer.style.alignItems = "center";

rateContainer.style.display = "flex";
rateContainer.style.justifyContent = "space-between";
rateContainer.style.marginBlockStart = "1.5rem";

rateNumContainerOne.style.height = "2.5rem";
rateNumContainerOne.style.width = "2.5rem";
rateNumContainerOne.style.backgroundColor = "#262f38";
rateNumContainerOne.style.borderRadius = "50%";
rateNumContainerOne.style.display = "flex";
rateNumContainerOne.style.justifyContent = "center";
rateNumContainerOne.style.alignItems = "center";
rateNumContainerOne.style.fontWeight = "500";
rateNumContainerOne.style.opacity = ".7";
rateNumContainerOne.style.cursor = "pointer";

rateNumContainerTwo.style.height = "2.5rem";
rateNumContainerTwo.style.width = "2.5rem";
rateNumContainerTwo.style.backgroundColor = "#262f38";
rateNumContainerTwo.style.borderRadius = "50%";
rateNumContainerTwo.style.display = "flex";
rateNumContainerTwo.style.justifyContent = "center";
rateNumContainerTwo.style.alignItems = "center";
rateNumContainerTwo.style.fontWeight = "500";
rateNumContainerTwo.style.opacity = ".7";
rateNumContainerTwo.style.cursor = "pointer";

rateNumContainerThree.style.height = "2.5rem";
rateNumContainerThree.style.width = "2.5rem";
rateNumContainerThree.style.backgroundColor = "#262f38";
rateNumContainerThree.style.borderRadius = "50%";
rateNumContainerThree.style.display = "flex";
rateNumContainerThree.style.justifyContent = "center";
rateNumContainerThree.style.alignItems = "center";
rateNumContainerThree.style.fontWeight = "500";
rateNumContainerThree.style.opacity = ".7";
rateNumContainerThree.style.cursor = "pointer";

rateNumContainerFour.style.height = "2.5rem";
rateNumContainerFour.style.width = "2.5rem";
rateNumContainerFour.style.backgroundColor = "#262f38";
rateNumContainerFour.style.borderRadius = "50%";
rateNumContainerFour.style.display = "flex";
rateNumContainerFour.style.justifyContent = "center";
rateNumContainerFour.style.alignItems = "center";
rateNumContainerFour.style.fontWeight = "500";
rateNumContainerFour.style.opacity = ".7";
rateNumContainerFour.style.cursor = "pointer";

rateNumContainerFive.style.height = "2.5rem";
rateNumContainerFive.style.width = "2.5rem";
rateNumContainerFive.style.backgroundColor = "#262f38";
rateNumContainerFive.style.borderRadius = "50%";
rateNumContainerFive.style.display = "flex";
rateNumContainerFive.style.justifyContent = "center";
rateNumContainerFive.style.alignItems = "center";
rateNumContainerFive.style.fontWeight = "500";
rateNumContainerFive.style.opacity = ".7";
rateNumContainerFive.style.cursor = "pointer";

button.style.backgroundColor = "#fc7613";
button.style.border = "none";
button.style.borderRadius = "20px";
button.style.width = "100%";
button.style.height = "2.5rem";
button.style.fontWeight = "600";
button.style.fontFamily = "Overpass";
button.style.color = "white";
button.style.letterSpacing = ".2rem";
button.style.marginBlockStart = "1.5rem";
button.style.cursor = "pointer";

star.style.inlineSize = "1rem";
star.style.blockSize = "1rem";

thankYouImgContainer.style.display = "none";
thankYouImgContainer.style.justifyContent = "center";

youSelected.style.display = "none";
youSelected.style.justifyContent = "center";
youSelected.style.alignItems = "center";
youSelected.style.backgroundColor = "#262f38";
youSelected.style.borderRadius = "20px";
youSelected.style.color = "#fc7613";
youSelected.style.fontWeight = "300";
youSelected.style.inlineSize = "12rem";
youSelected.style.blockSize = "2rem";
youSelected.style.padding = "0";
youSelected.style.margin = "0 auto";
pYouSelected.style.fontSize = ".9rem"
youSelected.style.marginBlockStart = "1.5rem"

thankYouContainer.style.textAlign = "center";
thankYouContainer.style.display = "none";



