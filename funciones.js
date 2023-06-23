const HOJA = SpreadsheetApp.openById("1G1rLBgiinp9kwevEtP6w86JtwWyLlXjrwsqMe6cQUUc").getActiveSheet();
const CARPETA = DriveApp.getFolderById('1bLv6PxR1_D-K-wbRPbkQW-ikuM0aQXyc');
const CABECERA_URL_IMAGEN_DRIVE = 'https://drive.google.com/uc?/export=view&id=';

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

function obtenerDatos() 
{
  return HOJA.getDataRange().getValues();
}

function insertarContacto(contacto, imagen) 
{
  if(imagen)
  {  //metodo blob/ objeto de tipo blob 
    let blob = Utilities.newBlob(imagen.datos, imagen.tipo, imagen.nombre);
    //obtenemos el Id de la carpeta en Drive y lo establecemos como CONST al inicio de las funciones.
    let archivo = CARPETA.createFile(blob);
    contacto.imagen = CABECERA_URL_IMAGEN_DRIVE+archivo.getId();
  }
  // appendROW: añadimos un VECTOR con cada una de las celdas que queremos insertar en este caso se realiza con parentesis y corchete por cada dato
  HOJA.appendRow([contacto.nombre, contacto.apellidos, contacto.correo, contacto.telf, contacto.imagen]);
}

function borrarContacto(numFila)
{
  HOJA.deleteRow(numFila);
} 

function modificarContacto(numFila, datos)
{
  let celdas = HOJA.getRange('A'+numFila+':D'+numFila);
  //doble corchete porque recibe como parametro una matriz de una unica fila
  celdas.setValues([[datos.nombre, datos.apellidos, datos.correo, datos.telf]]);
}

// vamos a la URL https://randomuser.me/documentation y copiamos el la link 
function importarContactos()
{
  let url = 'https://randomuser.me/api/?results=5&inc=name,email,phone,picture'; 
  //
  let respuesta = UrlFetchApp.fetch(url).getContentText();
  // para poder  ver los datos del  resultado de formar ordenada lo comvertimos a JSON 
  let datos = JSON.parse(respuesta);

  datos.results.forEach(insertarContactoJSON);
  
}

function insertarContactoJSON(contacto)
{
  HOJA.appendRow([contacto.name.first, contacto.name.last, contacto.email, contacto.phone, contacto.picture.large]);
}