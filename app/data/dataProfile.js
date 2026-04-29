let HOST_URL = "https://mmi.unilim.fr/~pages39/SAE2.03-PAGES";

let DataProfile = {};


DataProfile.read = async function(){
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readProfiles");
    let data = await answer.json();
    return data;
}

export {DataProfile};