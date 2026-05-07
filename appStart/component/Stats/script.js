let templateFile = await fetch("./component/Stats/template.html");
let template = await templateFile.text();

let Stats = {};

Stats.format = function (stats) {
    let html = template;
    html = html.replaceAll('{{total_profiles}}', stats.total_profiles.total);
    html = html.replaceAll('{{total_movies}}', stats.total_movies.total);
    html = html.replaceAll('{{most_favorited}}', stats.most_favorited ? stats.most_favorited.name : "Aucun");
    html = html.replaceAll('{{most_popular_category}}', stats.most_popular_category ? stats.most_popular_category.name : "Aucune");
    html = html.replaceAll('{{avg_favorites}}', stats.avg_favorites ? Math.round(stats.avg_favorites.moyenne) : 0);
    return html;
};

export { Stats };