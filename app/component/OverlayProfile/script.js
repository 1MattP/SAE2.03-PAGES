let templateFile = await fetch("./component/OverlayProfile/template.html");
let template = await templateFile.text();

let templateFile2 = await fetch("./component/OverlayProfile/templateLi.html");
let templateLi = await templateFile2.text();

let OverlayProfile = {};

OverlayProfile.format = function(profile){
    let li = templateLi;
    li = li.replaceAll('{{id}}', profile.id);
    li = li.replaceAll('{{img}}', "../server/images/profiles/" + profile.avatar);
    li = li.replaceAll('{{name}}', profile.name);
    li = li.replaceAll('{{profilname}}', profile.name);
    li = li.replaceAll('{{min_age}}', profile.min_age);

    return li;
}

OverlayProfile.formatMany = function(profiles){
    let html = '';
    for (const profile of profiles){
        html += OverlayProfile.format(profile);
    }

    return template.replaceAll('{{OverlayList}}', html);
}


export { OverlayProfile };

