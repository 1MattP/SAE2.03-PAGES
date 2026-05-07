let templateFile = await fetch("./component/Comment/template.html");
let template = await templateFile.text();


let templateFile2 = await fetch("./component/Comment/templateLi.html");
let templateLi = await templateFile2.text();

let Comment = {};

Comment.format = function(comment, profileImage) {
    let li = templateLi;
    li = li.replaceAll('{{profile_name}}', comment.profile_name);
    li = li.replaceAll('{{date}}', comment.date);
    li = li.replaceAll('{{content}}', comment.content);
    li = li.replaceAll('{{profileImage}}', profileImage);
    return li;
}

Comment.formatMany = function(movie_id, comments, profileImage ) {
    if (comments.length === 0) {
        return '<p class="comment__empty">Aucun commentaire pour ce film. Soyez le premier à en laisser un !</p>';
    }
    let html = '';
    for (const comment of comments) {
        html += Comment.format(comment, profileImage);
    }
    return html;
}

Comment.formatComment = function(movie_id) {
    let html = template;
    html = html.replaceAll('{{id}}', movie_id);
    html = html.replaceAll('{{ comments }}', '');
    return html;
}

export { Comment };