let templateFile = await fetch("./component/FeaturedForm/template.html");
let template = await templateFile.text();

let templateFile2 = await fetch("./component/FeaturedForm/templateLi.html");
let templateLi = await templateFile2.text();

let FeaturedForm = {};

FeaturedForm.format = function (movie) {
    let li = templateLi;

    
    li = li.replaceAll("{id}", movie.id);
    li = li.replaceAll("{{movie_name}}", movie.movie_name);
    li = li.replaceAll("{{category_name}}", movie.category_name);

    let status = movie.featured == 1 ? "Mis en avant" : "non mis en avant";
    let btn = movie.featured == 1 ? "Retirer" : "Ajouter";

    li = li.replaceAll("{{status}}", status);
    li = li.replaceAll("{{btn}}", btn);


    
    return li;
};

FeaturedForm.formatMany = function(movies) {
    let html ='';
    if (movies.length === 0){
        html = '<p> Aucun film ne correspond à votre recherche.</p>'
    } else {
        for (const movie of movies) {
            html += FeaturedForm.format(movie);
        }
    }
    return template.replaceAll('{{featuredList}}', html);
}


export { FeaturedForm };

