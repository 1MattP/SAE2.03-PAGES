let HOST_URL = "..";

let DataComment = {};

DataComment.add = async function (movie_id, profile_id, content) {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=addComment&movie_id=" + movie_id + "&profile_id=" + profile_id + "&content=" + content);
    let data = await answer.json();
    return data;
}

DataComment.get = async function (movie_id) {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=getComments&movie_id=" + movie_id);
    let data = await answer.json();
    return data;
}

export { DataComment };