import { Movie } from "../Movie/script.js";

let templateFile = await fetch("./component/MovieCategory/template.html");
let template = await templateFile.text();

let templateFile2 = await fetch("./component/MovieCategory/templateLi.html");
let templateLi = await templateFile2.text();

let MovieCategory = {};



MovieCategory.format = function (category) {
    let li = templateLi;
    li = li.replaceAll('{{category}}', category.name);
    if (category.movies) {
        let moviesHTML = Movie.formatMany(category.movies);
        li = li.replace('{{movies}}', moviesHTML);
    }

    return li;
}

MovieCategory.formatMany = function (categories) {
    let html = '';
    for (const movie of categories) {
        html += MovieCategory.format(movie);
    }

    return template.replaceAll('{{categoryList}}', html);
}

export { MovieCategory };

