import { Rating } from "../Rating/script.js";
import { Comment } from "../Comment/script.js";

let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();

let MovieDetail = {};

MovieDetail.format = function (moviedetail) {
    let html = template;

    let RatingHTML = Rating.format(moviedetail.id)
    html = html.replaceAll('{{rating}}', RatingHTML)

    let CommentHTML = Comment.formatComment(moviedetail.id)
    html = html.replaceAll('{{comment}}', CommentHTML)

    html = html.replaceAll('{id}', moviedetail.id);
    html = html.replaceAll('{{name}}', moviedetail.movie_name);
    html = html.replaceAll('{{image}}', "../server/images/" + moviedetail.image);
    html = html.replaceAll('{{description}}', moviedetail.description);
    html = html.replaceAll('{{director}}', moviedetail.director);
    html = html.replaceAll('{{year}}', moviedetail.year);
    html = html.replaceAll('{{min_age}}', moviedetail.min_age);
    html = html.replaceAll('{{id_category}}', moviedetail.category_name);
    html = html.replaceAll('{{trailer}}', moviedetail.trailer);


    return html;
}

export { MovieDetail };

