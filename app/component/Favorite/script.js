let templateFile = await fetch("./component/Favorite/template.html");
let template = await templateFile.text();

let templateFile2 = await fetch("./component/Favorite/templateLi.html");
let templateLi = await templateFile2.text();

let Favorite = {};

Favorite.format = function (favorite) {
    let li = templateLi;

    li = li.replaceAll('{id}', favorite.movie_id);
    li = li.replaceAll('{{image}}', "../server/images/" + favorite.image);
    li = li.replaceAll('{{name}}', favorite.movie_name);


    return li;
}

Favorite.formatMany = function (favorites) {
    if (favorites.length === 0) {
        return '<p>Votre liste de favoris est vide</p>';
    }
    let html = '';
    for (const favorite of favorites) {
        html += Favorite.format(favorite);
    }

    return template.replaceAll('{{FavoriteList}}', html);
}

export { Favorite };

