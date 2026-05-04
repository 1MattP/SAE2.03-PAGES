let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let NavBar = {};

NavBar.format = function (hAbout, hProfile, hFavorite, hStat) {
  let html = template;
  html = html.replace("{{hAbout}}", hAbout);
  html = html.replace("{{hFavorite}}", hFavorite);
  html = html.replace("{{hStat}}", hStat);
  html = html.replace("{{hProfile}}", hProfile);
  return html;
};

export { NavBar };