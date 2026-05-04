let templateFile = await fetch("./component/ProfileForm/template.html");
let template = await templateFile.text();

let templateFile2 = await fetch("./component/ProfileForm/templateOption.html");
let templateOption = await templateFile2.text();

let ProfileForm = {};

ProfileForm.format = function (handler) {
    let option = templateOption;

    option = option.replaceAll("{{id}}", handler.id);
    option = option.replaceAll("{{Allprofile}}", handler.name)

    return option;
};

ProfileForm.formatMany = function (data) {
    let html = "";
    
    for (const item of data) {
        html += ProfileForm.format(item);
    }

    return template
        .replaceAll("{{option}}", html)
        .replaceAll("{{handler}}", "C.handlerAddProfile()");
};


export { ProfileForm };

