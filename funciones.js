function doGet() {
  return HtmlService.createTemplateFromFile("web")
    .evaluate()
    .setTitle("Agenda GoogleApps Script");
}

function obtenerDatosHTML(nombre) {
  return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos()
{
//obtenemos los datos  usando 'openByid' devuelve objeto tipo SpreadSheet y activeSheet devuelve una hoja
let hoja = SpreadsheetApp.openById('1G1rLBgiinp9kwevEtP6w86JtwWyLlXjrwsqMe6cQUUc').getActiveSheet();
//obtenemos los datos de tipo dato con DataRange y getValues nos devuelve un objeto de tipo matriz[][]
let datos = hoja.getDataRange().getValues();
return datos;

}