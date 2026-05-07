let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let NavBar = {};

NavBar.format = function (hAbout, hProfile, hFavorite, hStat, profileName, profileImage) {
  let html = template;
  html = html.replaceAll("{{hAbout}}", hAbout);
  html = html.replaceAll("{{hFavorite}}", hFavorite);
  html = html.replaceAll("{{hStat}}", hStat);
  html = html.replaceAll("{{hProfile}}", hProfile);
  html = html.replaceAll("{{profileName}}", profileName);
  html = html.replaceAll("{{profileImage}}", profileImage);
  return html;
};

export { NavBar };