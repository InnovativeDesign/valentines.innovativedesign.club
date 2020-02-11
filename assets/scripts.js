// Returns random int in the range [1,max]
function random(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}

// Randomly shuffles an array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// vertical images [1,2,3,4,5,6]
let container = document.querySelector(".img-container");
let rand = random(19);

let card = document.createElement("div");
card.setAttribute("class", "card");

let front = document.createElement("div");
front.setAttribute("class", "card-face card-front");
let img = document.createElement("img");
img.src = "img/" + rand + ".png";

if (rand <= 6) {
    img.className = "full-height";
} else {
    img.className = "full-width";
}

front.appendChild(img);

let back = document.createElement("div");
back.setAttribute("class", "card-face card-back");
let imgBack = document.createElement("img");
imgBack.className = img.className;

if (rand >= 5 && rand <= 11 ) {
    imgBack.src = "img/" + rand + "_back.png";
} else {
    imgBack.src = img.src;
}

back.appendChild(imgBack);

card.appendChild(front);
card.appendChild(back);

card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
});

container.appendChild(card);

let imgs = []
for (let i = 1; i < 20; i++) {
    if (i !== rand) {
        imgs.push(i);
    }
}

shuffle(imgs);
console.log(imgs);

for (let i = 0; i < imgs.length; i++) {
    let imgIndex = imgs[i];
    let container = document.createElement("div");
    container.className = "img-container";

    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let front = document.createElement("div");
    front.setAttribute("class", "card-face card-front");
    let img = document.createElement("img");
    img.src = "img/" + imgIndex + ".png";

    if (imgIndex <= 6) {
        img.className = "full-height";
    } else {
        img.className = "full-width";
    }

    front.appendChild(img);

    let back = document.createElement("div");
    back.setAttribute("class", "card-face card-back");
    let imgBack = document.createElement("img");
    imgBack.className = img.className;

    if (imgIndex >= 5 && imgIndex <= 11 ) {
        imgBack.src = "img/" + imgIndex + "_back.png";
    } else {
        imgBack.src = img.src;
    }

    back.appendChild(imgBack);

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', function() {
        card.classList.toggle('is-flipped');
    });

    container.appendChild(card);

    // let img = document.createElement("img");

    // if (imgIndex <= 6) {
    //     img.className = "full-height";
    // } else {
    //     img.className = "full-width";
    // }
    
    // if (imgIndex >= 14) {
    //     img.src = "img/" + imgIndex + ".jpg";
    // } else {
    //     img.src = "img/" + imgIndex + ".png";
    // }

    // container.appendChild(img);

    // if (imgIndex == 6 || imgIndex == 7 || imgIndex == 8) {
    //     let imgBack = document.createElement("img");
    //     imgBack.className = img.className + " back";
    //     imgBack.src = "img/" + imgIndex + "_back.png";
    //     container.appendChild(imgBack);
    //     console.log("added back");
    // }

    document.body.append(container);
}
