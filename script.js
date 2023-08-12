const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const MovieBox = document.querySelector("#movie-container");
// console.log(MovieBox);

const getMovies = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    // console.log(data);
    showMovies(data.results);
}
const showMovies = (data) => {
    MovieBox.innerHTML = "";
    data.forEach(
        item => {
            const box = document.createElement("div");
            box.classList.add("movie-box");
            box.innerHTML = `
                <img src="${IMGPATH + item.poster_path}" alt="img">

                <div class="overview">

                    <h2>${item.original_title}</h2>
                    <span class="rating">${item.vote_average}</span>
                    <div class="summary">

                        <div class="content">Overview</div>

                        <p>${item.overview}</p>
                    </div>

                </div>
                `;
            MovieBox.appendChild(box);
            let click = true;
            box.addEventListener('click', () => {
                if (click) {

                    box.classList.add("style");
                    setTimeout(()=>{

                        box.innerHTML = ` <div class="overview">
                        
                        <h2>${item.original_title}</h2>
                        <span class="rating">${item.vote_average}</span>
                        <div class="summary">
                        
                        <div class="content">Overview</div>
                        
                        <p>${item.overview}</p>
                        </div>
                        
                        </div>`;
                    },250);
                    click = false;
                } else {
                    box.classList.remove("style");
                    setTimeout(()=>{
                        box.innerHTML = ` <img src="${IMGPATH + item.poster_path}" alt="img">`;

                    },250);

                    click = true;

                }
            });
        }
    );
}

document.querySelector("#search").addEventListener(
    "keyup",
    function (event) {
        if (event.target.value != "") {
            getMovies(SEARCHAPI + event.target.value)
        } else {
            getMovies(APIURL);
        }
    }
);
//init call

getMovies(APIURL)
let body = document.body;

let colors = document.getElementById("colors");
colors.addEventListener("click",()=>{
    colors.innerHTML=`<div class="colorbtn" id="color1" ></div>
    <div class="colorbtn" id="color2"></div>
    <div class="colorbtn" id="color3"></div>
    <div class="colorbtn" id="color4"></div>
    <div class="colorbtn" id="color5"></div>
    <div class="colorbtn" id="color6"></div>`;
    document.getElementById("color1").addEventListener("click",()=>{body.style.backgroundColor="var(--blue)"});
document.getElementById("color2").addEventListener("click",()=>{body.style.backgroundColor="var(--orange)"});
document.getElementById("color3").addEventListener("click",()=>{body.style.backgroundColor="var(--dark-brown)"});
document.getElementById("color4").addEventListener("click",()=>{body.style.backgroundColor="var(--navy-blue)"});
document.getElementById("color5").addEventListener("click",()=>{body.style.backgroundColor="var(--dark-grey)"});
document.getElementById("color6").addEventListener("click",()=>{body.style.backgroundColor="var(--pink)"});

});

