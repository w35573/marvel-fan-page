const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const nav = document.querySelector(".navigation");
const moviesContainer = document.querySelector(".movies-container");

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

window.addEventListener('load', async () => {
    const ts = new Date().getTime();
    const stringToHash = ts + "12e287948350b5c057ed5538bdc915b83e5b649b" + "e0bd73f891e8a7fbc13515087749aa71";
    const hash = CryptoJS.MD5(stringToHash).toString();

    for(let i=0; i<=15; i++) {
        let offset = 100*i;
        let URL = `https://gateway.marvel.com:443/v1/public/characters?offset=${offset}&limit=100&ts=${ts}&apikey=e0bd73f891e8a7fbc13515087749aa71&hash=${hash}`;
        let response = await axios.get(URL);
        let characters = response.data.data.results;
        // console.log(response.data.data.results);

        for (let character of characters) {
            let boxDiv = document.createElement("div");
            boxDiv.classList.add("box");
            let boxImg = document.createElement("div");
            boxImg.classList.add("box-img");

            let img = document.createElement("img");
            let path = character.thumbnail.path;
            let extension = character.thumbnail.extension;
            img.src = `${path}/portrait_uncanny.${extension}`;

            boxImg.appendChild(img);

            let h3 = document.createElement("h3");
            h3.innerHTML = character.name;
            
            boxDiv.appendChild(boxImg);
            boxDiv.appendChild(h3);
            moviesContainer.appendChild(boxDiv);
        }
    }
});