let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let templateFile2 = await fetch("./component/Movie/templateLi.html");
let templateLi = await templateFile2.text();

let Movie = {};

Movie.format = function(movie){
    let li = templateLi;

    li = li.replaceAll('{{image}}', "../server/images/" + movie.image);
    li = li.replaceAll('{{name}}', movie.movie_name);
    li = li.replaceAll('{id}', movie.id);

    return li;
}

Movie.formatMany = function(movies){
    let html = '';

    for (const movie of movies){
        html += Movie.format(movie);
    }

    return template.replaceAll('{{MovieList}}', html);
}

export { Movie };

