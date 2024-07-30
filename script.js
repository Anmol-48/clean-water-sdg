const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg'
];

let currentIndex = 0;
const imageElement = document.getElementsByClassName('main-img')[0];

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
}

setInterval(changeImage, 2000);
function navigateToAbout(){
    window.location.href="http://127.0.0.1:5500/about.html";
}
function navigateToContact(){
    window.location.href="http://127.0.0.1:5500/contact.html";
}