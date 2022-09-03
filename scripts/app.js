const APL_KEY = "869b42f491d0a6bb59d90248e5b7bba8";
const URL = `https://api.themoviedb.org/3/search/movie?api_key=${APL_KEY}&query=`;

const moviesContainer = document.querySelectorAll(".movies-container");
const upcoming = document.querySelector(".upcoming");
const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const nav = document.querySelector(".navigation");

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('active');
}

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        968: {
            slidesPerView: 5,
        },
    },
});

window.addEventListener("load", async function () {
    const response = await axios.get("./data/movie.json");
    const data = response.data;
    const count = [6,6,11,7,6,3];

    for (let i = 0; i < 6; i++) {
        for (let j = 1; j <= count[i]; j++) {

            let boxDiv = document.createElement("div");
            boxDiv.classList.add("box");

            let boxImg = document.createElement("div");
            boxImg.classList.add("box-img");

            let img = document.createElement("img");
            let img_url = await getPoster(data[i + 1][j].movie);
            img.src = `http://image.tmdb.org/t/p/w500${img_url}`;

            boxImg.appendChild(img);

            let h3 = document.createElement("h3");
            h3.innerHTML = data[i + 1][j].movie;

            let span = document.createElement("span");
            span.innerHTML = `Release Date: ${data[i + 1][j].release}`;

            boxDiv.appendChild(boxImg);
            boxDiv.appendChild(h3);
            boxDiv.appendChild(span);
            moviesContainer[i].appendChild(boxDiv);
        }
    }
});

async function getPoster(movie) {
    const res = await axios.get(URL + movie);
    return res.data.results[0].poster_path;
}