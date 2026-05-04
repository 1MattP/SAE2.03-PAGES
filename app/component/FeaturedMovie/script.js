let templateFile = await fetch("./component/FeaturedMovie/template.html");
let template = await templateFile.text();

let templateFile2 = await fetch("./component/FeaturedMovie/templateLi.html");
let templateLi = await templateFile2.text();

let FeaturedMovie = {};

FeaturedMovie.format = function (movie) {
    let li = templateLi;
    li = li.replaceAll('{id}', movie.id);
    li = li.replaceAll('{{name}}', movie.name);
    li = li.replaceAll('{{image}}', "../server/images/" + movie.image);
    li = li.replaceAll('{{description}}', movie.description);
    return li;
};

FeaturedMovie.formatMany = function (movies) {
    if (movies.length === 0) {
        return '<p>Aucun film mis en avant pour le moment.</p>';
    }
    let html = '';
    for (const movie of movies) {
        html += FeaturedMovie.format(movie);
    }
    return template.replaceAll('{{featuredList}}', html);
};

export { FeaturedMovie };