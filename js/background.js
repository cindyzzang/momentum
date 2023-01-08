const images = ["bgimg.jpeg", "bgimg_1.jpg", "bgimg_2.jpg", "bgimg_3.jpg","bgimg_4.jpg","bgimg_5.jpg","bgimg_6.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;


document.body.style.backgroundImage = `url(img/${chosenImage}`;

