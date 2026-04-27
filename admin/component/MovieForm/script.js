let templateFile = await fetch("./component/MovieForm/template.html");
let template = await templateFile.text();

let templateFile2 = await fetch("./component/MovieForm/templateOption.html");
let templateOption = await templateFile2.text();

let MovieForm = {};

MovieForm.format = function (category) {
    let li = templateOption;

    li = li.replaceAll("{{id_category}}", category.id);
    li = li.replaceAll("{{category}}", category.name);

    return li;
};

MovieForm.formatMany = function (data) {
    let html = "";

    for (const item of data) {
        html += MovieForm.format(item);
    }

    return template
        .replaceAll("{{option}}", html)
        .replaceAll("{{handler}}", "C.handlerAddMovie()");
};

export { MovieForm };