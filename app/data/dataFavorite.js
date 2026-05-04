let HOST_URL = "https://mmi.unilim.fr/~pages39/SAE2.03-PAGES";

let DataFavorite = {};

DataFavorite.readFavorites = async function (profile_id) {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readFavorites&profile_id=" + profile_id);
    let data = await answer.json();
    return data;
};

DataFavorite.addFavorite = async function (movie_id, profile_id) {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=addFavorite&movie_id=" + movie_id + "&profile_id=" + profile_id);
    let data = await answer.json();
    return data;
};

export { DataFavorite };