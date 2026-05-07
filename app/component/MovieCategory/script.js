import { Movie } from "../Movie/script.js";

let templateFile = await fetch("./component/MovieCategory/template.html");
let template = await templateFile.text();

let templateFile2 = await fetch("./component/MovieCategory/templateLi.html");
let templateLi = await templateFile2.text();

let MovieCategory = {};



MovieCategory.format = function (category) {
    let li = templateLi;
    li = li.replaceAll('{{category}}', category.name);
    return li;
}

MovieCategory.formatMany = function (categories) {
    let html = '';
    for (const category of categories) {
        html += MovieCategory.format(category);
    }
    return template.replaceAll('{{categoryList}}', html);
}






export { MovieCategory };

