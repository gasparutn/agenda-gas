function doGet() {
  return HtmlService.createTemplateFromFile("web")
    .evaluate()
    .setTitle("Agenda GoogleApps Script");
}

function obtenerDatosHTML(nombre) {
  return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}
