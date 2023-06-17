const HOJA = SpreadsheetApp.openById("1G1rLBgiinp9kwevEtP6w86JtwWyLlXjrwsqMe6cQUUc").getActiveSheet();

function doGet(datos) 
{
  
  return HtmlService.createTemplateFromFile("web").evaluate().setTitle("Agenda GoogleApps Script");
}

// resivimos los datos del formulario por este metodo doPOST
function doPost(datos) 
{
  
  return HtmlService.createTemplateFromFile("web").evaluate().setTitle("Agenda GoogleApps Script");
}

function obtenerDatosHTML(nombre) 
{
  return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos() 
{
  /*
//obtenemos los datos  usando 'openByid' devuelve objeto tipo SpreadSheet y activeSheet devuelve una hoja
let hoja = SpreadsheetApp.openById('1G1rLBgiinp9kwevEtP6w86JtwWyLlXjrwsqMe6cQUUc').getActiveSheet();
//obtenemos los datos de tipo dato con DataRange y getValues nos devuelve un objeto de tipo matriz[][]
let datos = hoja.getDataRange().getValues();
return datos;
*/
  //simplificamos el codigo creando una constante Line 1 y reduciendo le codigo Line 22,24.
  return HOJA.getDataRange().getValues();
}

function insertarContacto(nombre, apellido, correo, telf) 
{
  // appendROW: añadimos un VECTOR con cada una de las celdas que queremos insertar en este caso se realiza con parentesis y corchete por cada dato
  HOJA.appendRow([nombre, apellido, correo, telf]);
}

function borrarContacto(numFila)
{
  HOJA.deleteRow(numFila);
}