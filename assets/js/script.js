const images = [
  {
    url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
    title: 'Svezia',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },

  {
    url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
    title: 'Perù',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },

  {
    url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
    title: 'Chile',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },
  {
    url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
    title: 'Argentina',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },
  {
    url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
    title: 'Colombia',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  }
];

//elements
const carouselImages = document.querySelector('.my-carousel-images');
const carouselItem = document.getElementsByClassName('my-carousel-item');
const prev = document.querySelector('.my-previous');
const next = document.querySelector('.my-next');

//data
let counter = 0;

//svuoto l'HTML
reset();

//ciclo l'array di oggetti
images.forEach(image => {
  
  carouselImages.innerHTML += `
  <div class="my-carousel-item">
  <img class="img-fluid" src="${image.url}" alt="${image.title} picture">
  <div class="item-description px-3">
  <h2>${image.title}</h2>
  <p>${image.description}</p>
  </div>
  </div>`
  
});

carouselItem[counter].classList.add('active');
prev.addEventListener('click', goprev);
next.addEventListener('click', gonext);

/////////////////////// FUNCTIONS ///////////////////////

function reset () {
  carouselImages.innerHTML = '';
}

function goprev() {
  carouselItem[counter].classList.remove('active');
  counter--;
  console.log(counter);
  carouselItem[counter].classList.add('active');
}

function gonext() {
  carouselItem[counter].classList.remove('active');
  counter++;
  console.log(counter);
  carouselItem[counter].classList.add('active');
}