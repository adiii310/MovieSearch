const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

    const MovieBox =document.querySelector("#movie-container");
    // console.log(MovieBox);

    const getMovies =async (api) =>{
        const response = await fetch(api);
        const data = await response.json();
        // console.log(data);
        showMovies(data.results);
    }
    const showMovies =(data) =>{
        MovieBox.innerHTML="";
        data.forEach(
            item =>{
                const box = document.createElement("div");
                box.classList.add("movie-box");
                box.innerHTML = `
                <img src="${IMGPATH  + item.poster_path}" alt="img">

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