let HOST_URL = "https://mmi.unilim.fr/~pages39/SAE2.03-PAGES";

let DataComment = {};

DataComment.getPending = async function() {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=getPendingComments");
    let data = await answer.json();
    return data;
}

DataComment.approve = async function(id) {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=approveComment&id=" + id);
    let data = await answer.json();
    return data;
}

DataComment.delete = async function(id) {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=deleteComment&id=" + id);
    let data = await answer.json();
    return data;
}

export { DataComment };