let HOST_URL = "https://mmi.unilim.fr/~pages39/SAE2.03-PAGES";

let DataMovie = {};

DataMovie.request = async function(){
    
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readmovies");

    let data = await answer.json();
    
    return data;
}





DataMovie.add = async function(fdata) {
      let config = {
        method: "POST", 
        body: fdata
    };
    let answer = await fetch(HOST_URL + "/server/script.php?todo=addMovie", config);
    let data = await answer.json();
    return data;
    
}

export {DataMovie};
