async function getMovies() {
    let movie = document.getElementById('movie').value;
    try {
        let response = await fetch(`http://www.omdbapi.com/?apikey=4f9513ae&t=${movie}`);
        let data = await response.json();
        showMovies(data);
    }
    catch (error){
        console.log(error);
    }
}
getMovies();

function showMovies(d) {
    let parent = document.getElementById('container');
    parent.innerHTML = "";
    let img = document.createElement('img');
    img.src = d.Poster;
    let title = document.createElement('h3');
    title.innerText = d.Title;
    let year = document.createElement('p');
    year.innerText = d.Year;
    let plot = document.createElement('p');
    plot.innerText = d.Plot;
    parent.append(img, title, year, plot);
}