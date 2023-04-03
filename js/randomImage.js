const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg'];

myButton.addEventListener('click', changeImage);

function changeImage(){
    /* 1 generate random index */
    let randomIndex = Math.floor(Math.random() * images.length);
    
    /* 2 */
    image.src = 'img/' + images [randomIndex];

    /* console.log('img/' + images [randomIndex]); */
}