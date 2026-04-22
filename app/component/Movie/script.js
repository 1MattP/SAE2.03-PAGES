let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let templateFile2 = await fetch("./component/Movie/templateLi.html");
let templateLi = await templateFile2.text();

let Movie = {};

Movie.format = function(movie){
    let li = templateLi;

    li = li.replaceAll('{{image}}', "../server/images/" + movie.image);
    li = li.replaceAll('{{name}}', movie.name);

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

/*let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let templateFile2 = await fetch("./component/Movie/templateLi.html");
let templateLi = await templateFile2.text();

let Movie = {};

Movie.format = function(allmovie){
    let html = template;
    
     let movieHTML = "";
     for (let List of allmovie.lists){
        let li = templateLi
        li = li.replaceAll('{{image}}', "../server/images/" + List.image);
        li = li.replaceAll('{{name}}',  List.name);
        movieHTML += li;
     }
     html = html.replaceAll('{{MovieList}}', movieHTML);
     return html;
}


Movie.formatMany = function(movies){
    let html = '';
    for (const allmovie of movies){
        html += Movie.format(allmovie);
    }
    return html
}

export { Movie };



    let html = template;
    html = html.replaceAll('{{image}}', "../server/images/" + allmovie.image);
    html = html.replaceAll('{{name}}', allmovie.name)
    return html;
    */