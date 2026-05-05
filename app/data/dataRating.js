let HOST_URL = "https://mmi.unilim.fr/~pages39/SAE2.03-PAGES";

let DataRating = {};

DataRating.addRating = async function (movie_id, profile_id, rating) {

    let fdata = new FormData();
    fdata.append("movie_id", movie_id);
    fdata.append("profile_id", profile_id);
    fdata.append("rating", rating);

    let config = {
        method: "POST",
        body: fdata
    };

    let answer = await fetch(HOST_URL + "/server/script.php?todo=addRating", config);
    let data = await answer.json();
    return data;
};

DataRating.getRating = async function (movie_id, profile_id) {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=getRating&movie_id=" + movie_id + "&profile_id=" + profile_id);
    let data = await answer.json();
    return data;
};

DataRating.getAvgRating = async function (movie_id) {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=getAvgRating&movie_id=" + movie_id);
    let data = await answer.json();
    return data
};

export { DataRating };