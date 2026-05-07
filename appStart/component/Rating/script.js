let templateFile = await fetch("./component/Rating/template.html");
let template = await templateFile.text();

let Rating = {};


Rating.format = function (movie_id) {
    let html = template
    html = html.replaceAll('{id}', movie_id);
    return html
};

Rating.updateStars = function (value) {
    let stars = document.querySelectorAll('.rating__stars .rating__star');
    for (let i = 0; i < stars.length; i++) {
        stars[i].classList.toggle('rating__star--active', i < value);
    }
};

Rating.init = async function (movie_id, profile_id, DataRating) {
    let avg = await DataRating.getAvgRating(movie_id);
    if (avg) {
        document.querySelector('#rating-avg').textContent = avg.avg_rating ?? '--';
    }

    let stars = document.querySelectorAll('#rating-stars .rating__star');

    let existing = await DataRating.getRating(movie_id, profile_id);
    if (existing && existing.rating) {
        Rating.updateStars(existing.rating);
        for (let star of stars) {
            star.classList.add('rating__star--disabled');
        }
    }

};

export { Rating };