let templateFile = await fetch("./component/CommentAdmin/template.html");
let template = await templateFile.text();

let templateFile2 = await fetch("./component/CommentAdmin/templateLi.html");
let templateLi = await templateFile2.text();

let CommentAdmin = {};

CommentAdmin.format = function(comment) {
    let li = templateLi;
    li = li.replaceAll('{id}', comment.id);
    li = li.replaceAll('{{movie_name}}', comment.movie_name);
    li = li.replaceAll('{{profile_name}}', comment.profile_name);
    li = li.replaceAll('{{date}}', comment.date);
    li = li.replaceAll('{{content}}', comment.content);
    li = li.replaceAll('{{status}}', comment.approved);
    return li;
}

CommentAdmin.formatMany = function(comments) {
    let html = '';
    if (comments.length === 0) {
        html = '<p>Aucun commentaire à modérer pour le moment.</p>';
    } else {
        for (const comment of comments) {
            html += CommentAdmin.format(comment);
        }
    }
    return template.replaceAll('{{comments}}', html);
}

export { CommentAdmin };