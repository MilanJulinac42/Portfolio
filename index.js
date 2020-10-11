// import mern from "./images/mernstackphoto.png";
// import code from './images/pexels-luis-gomes-546819.jpg'

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav_list");
const navLinks = document.querySelectorAll(".nav-links");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    links.classList.remove("show-links");
  });
}

navLinks.forEach(function (link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    console.log(links.getBoundingClientRect().height)
    const containerHeight = links.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if(!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
  })
})

const projects = [
  {
    id: 1,
    name: "devConnector",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, magni in ullam perspiciatis quos aut aliquam nihil voluptas aperiam maiores?", 
    frontend: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate pariatur, fugit dignissimos libero sed maxime.", 
    backend: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ut sit maxime impedit.", 
    img: "https://specials-images.forbesimg.com/imageserve/5f302109ffad89f9130e07db/960x0.jpg?cropX1=0&cropX2=4800&cropY1=243&cropY2=2943"
  },
  {
    id: 2,
    name: "devConnector2",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, magni in ullam perspiciatis quos aut aliquam nihil voluptas aperiam maiores?",
    frontend: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate pariatur, fugit dignissimos libero sed maxime.",
    backend: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ut sit maxime impedit.",
    img: "https://miro.medium.com/max/1000/0*kBHpKva09AsGj7RQ"
  }
]

const projectPhoto = document.getElementById("project-photo");
const projectTitle = document.getElementById("project-title");
const projectDescription = document.getElementById("project-description");
const projectFront = document.getElementById("project-front");
const projectBack = document.getElementById('project-back');

const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById("next-btn")

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
  showProject(currentItem);
})

function showProject(index) {
  const project = projects[index];
  projectPhoto.src = project.img;
  projectTitle.textContent = project.name;
  projectDescription.textContent = project.description;
  projectFront.textContent = project.frontend;
  projectBack.textContent = project.backend;
}

prevBtn.addEventListener('click',function(){
  currentItem--;
  if(currentItem < 0) {
    currentItem = projects.length -1;
  }
  showProject(currentItem);
});

nextBtn.addEventListener('click', function() {
  currentItem++;
  if(currentItem > projects.length -1) {
    currentItem = 0;
  }
  showProject(currentItem)
})