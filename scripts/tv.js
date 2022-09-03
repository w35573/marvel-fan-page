const APL_KEY = "869b42f491d0a6bb59d90248e5b7bba8";
const URL = `https://api.themoviedb.org/3/search/tv?api_key=${APL_KEY}&query=`;

const moviesContainer = document.querySelector(".movies-container");
const upcoming = document.querySelector(".upcoming");
const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const nav = document.querySelector(".navigation");

const abc = document.querySelector("#abc .movies-container");
const netflix = document.querySelector("#netflix .movies-container");
const adult = document.querySelector("#adult .movies-container");
const adventure = document.querySelector("#adventure .movies-container");
const phase4 = document.querySelector("#phase4 .movies-container");
const phase5 = document.querySelector("#phase5 .movies-container");
const future = document.querySelector("#future .movies-container");

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

    const arr1 = ["Agents of S.H.I.E.L.D.", "Agent Carter", "Inhumans"]
    const arr2 = ["Daredevil", "Jessica Jones", "Luke Cage", "Iron Fist", "The Defenders", "The Punisher"]
    const arr3 = ["Runaways", "Cloak & Dagger"]
    const arr4 = ["Helstrom"]
    const arr5 = ["WandaVision", "The Falcon and the Winter Soldier", "Loki", "What If...?", "Hawkeye", "Moon Knight", "Ms. Marvel", "She-Hulk: Attorney at Law"]
    arr6 = ["What If...?", "Secret Invasion", "Echo", "Loki", "Ironheart", "Agatha: Coven of Chaos", "Daredevil: Born Again"]
    arr7 = ["Armor Wars"]

    for (let movie of arr1) {
        let boxDiv = document.createElement("div");
        boxDiv.classList.add("box");

        let boxImg = document.createElement("div");
        boxImg.classList.add("box-img");

        let img = document.createElement("img");
        let img_url = await getPoster(movie);
        img.src = `http://image.tmdb.org/t/p/w500${img_url}`;

        boxImg.appendChild(img);

        let h3 = document.createElement("h3");
        h3.innerHTML = movie;

        boxDiv.appendChild(boxImg);
        boxDiv.appendChild(h3);
        abc.appendChild(boxDiv);
    }

    for (let movie of arr2) {
        let boxDiv = document.createElement("div");
        boxDiv.classList.add("box");

        let boxImg = document.createElement("div");
        boxImg.classList.add("box-img");

        let img = document.createElement("img");
        let img_url = await getPoster(movie);
        img.src = `http://image.tmdb.org/t/p/w500${img_url}`;

        boxImg.appendChild(img);

        let h3 = document.createElement("h3");
        h3.innerHTML = movie;

        boxDiv.appendChild(boxImg);
        boxDiv.appendChild(h3);
        netflix.appendChild(boxDiv);
    }

    for (let movie of arr3) {
        let boxDiv = document.createElement("div");
        boxDiv.classList.add("box");

        let boxImg = document.createElement("div");
        boxImg.classList.add("box-img");

        let img = document.createElement("img");
        let img_url = await getPoster(movie);
        img.src = `http://image.tmdb.org/t/p/w500${img_url}`;

        boxImg.appendChild(img);

        let h3 = document.createElement("h3");
        h3.innerHTML = movie;

        boxDiv.appendChild(boxImg);
        boxDiv.appendChild(h3);
        adult.appendChild(boxDiv);
    }

    for (let movie of arr4) {
        let boxDiv = document.createElement("div");
        boxDiv.classList.add("box");

        let boxImg = document.createElement("div");
        boxImg.classList.add("box-img");

        let img = document.createElement("img");
        let img_url = await getPoster(movie);
        img.src = `http://image.tmdb.org/t/p/w500${img_url}`;

        boxImg.appendChild(img);

        let h3 = document.createElement("h3");
        h3.innerHTML = movie;

        boxDiv.appendChild(boxImg);
        boxDiv.appendChild(h3);
        adventure.appendChild(boxDiv);
    }

    for (let movie of arr5) {
        let boxDiv = document.createElement("div");
        boxDiv.classList.add("box");

        let boxImg = document.createElement("div");
        boxImg.classList.add("box-img");

        let img = document.createElement("img");
        let img_url = await getPoster(movie);
        img.src = `http://image.tmdb.org/t/p/w500${img_url}`;

        boxImg.appendChild(img);

        let h3 = document.createElement("h3");
        h3.innerHTML = movie;

        boxDiv.appendChild(boxImg);
        boxDiv.appendChild(h3);
        phase4.appendChild(boxDiv);
    }

    for (let movie of arr6) {
        let boxDiv = document.createElement("div");
        boxDiv.classList.add("box");

        let boxImg = document.createElement("div");
        boxImg.classList.add("box-img");

        let img = document.createElement("img");
        let img_url = await getPoster(movie);
        img.src = `http://image.tmdb.org/t/p/w500${img_url}`;

        boxImg.appendChild(img);

        let h3 = document.createElement("h3");
        h3.innerHTML = movie;

        boxDiv.appendChild(boxImg);
        boxDiv.appendChild(h3);
        phase5.appendChild(boxDiv);
    }

    for (let movie of arr7) {
        let boxDiv = document.createElement("div");
        boxDiv.classList.add("box");

        let boxImg = document.createElement("div");
        boxImg.classList.add("box-img");

        let img = document.createElement("img");
        let img_url = await getPoster(movie);
        img.src = `http://image.tmdb.org/t/p/w500${img_url}`;

        boxImg.appendChild(img);

        let h3 = document.createElement("h3");
        h3.innerHTML = movie;

        boxDiv.appendChild(boxImg);
        boxDiv.appendChild(h3);
        future.appendChild(boxDiv);
    }
});

async function getPoster(movie) {
    const res = await axios.get(URL + movie);
    console.log(movie);
    return res.data.results[0].poster_path;
}