let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();

let MovieDetail = {};

MovieDetail.format = function(moviedetail){
    let html = template;

    html = html.replaceAll('{{name}}', moviedetail.name);
    html = html.replaceAll('{{image}}', moviedetail.image);
    html = html.replaceAll('{{description}}', moviedetail.description);
    html = html.replaceAll('{{director}}', moviedetail.director);
    html = html.replaceAll('{{id_category}}', moviedetail.id_category);
    html = html.replaceAll('{{trailer}}', moviedetail.trailer);

    return html;
}

export {MovieDetail};
