let HOST_URL = "..";

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
    // fetch permet d'envoyer une requête HTTP à l'URL spécifiée. 
    // L'URL est construite en concaténant HOST_URL à "/server/script.php?direction=" et la valeur de la variable dir. 
    // L'URL finale dépend de la valeur de HOST_URL et de dir.
    let answer = await fetch(HOST_URL + "/server/script.php?todo=getRating&movie_id=" + movie_id + "&profile_id=" + profile_id);
    // answer est la réponse du serveur à la requête fetch.
    // On utilise ensuite la méthode json() pour extraire de cette réponse les données au format JSON.
    // Ces données (data) sont automatiquement converties en objet JavaScript.
    let data = await answer.json();
    // Enfin, on retourne ces données.
    return data;
};

DataRating.getAvgRating = async function (movie_id) {
    // fetch permet d'envoyer une requête HTTP à l'URL spécifiée. 
    // L'URL est construite en concaténant HOST_URL à "/server/script.php?direction=" et la valeur de la variable dir. 
    // L'URL finale dépend de la valeur de HOST_URL et de dir.
    let answer = await fetch(HOST_URL + "/server/script.php?todo=getAvgRating&movie_id=" + movie_id);
    // answer est la réponse du serveur à la requête fetch.
    // On utilise ensuite la méthode json() pour extraire de cette réponse les données au format JSON.
    // Ces données (data) sont automatiquement converties en objet JavaScript.
    let data = await answer.json();
    // Enfin, on retourne ces données.
    return data
};

export { DataRating };