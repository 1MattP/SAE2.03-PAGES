let HOST_URL = "https://mmi.unilim.fr/~pages39/SAE2.03-PAGES";

let DataMovie = {};

DataMovie.request = async function () {

    let answer = await fetch(HOST_URL + "/server/script.php?todo=readmovies");

    let data = await answer.json();

    return data;
}

DataMovie.requestCategory = async function () {

    let answer = await fetch(HOST_URL + "/server/script.php?todo=readcategory");

    let data = await answer.json();

    return data;
}





DataMovie.add = async function (fdata) {
    let config = {
        method: "POST",
        body: fdata
    };
    let answer = await fetch(HOST_URL + "/server/script.php?todo=addMovie", config);
    let data = await answer.json();
    return data;

}

DataMovie.requestSearch = async function (keyword) {

    let answer = await fetch(HOST_URL + "/server/script.php?todo=searchMovies&keyword=" + keyword);

    let data = await answer.json();

    return data;
};


DataMovie.UpdateFeatured = async function (movie_id, featured) {

    let fdata = new FormData();
    fdata.append("movie_id", movie_id);
    fdata.append("featured", featured);

    let config = {
        method: "POST",
        body: fdata
    };

    let answer = await fetch(HOST_URL + "/server/script.php?todo=UpdateFeatured", config);
    let data = await answer.json();
    return data;

}

export { DataMovie };
