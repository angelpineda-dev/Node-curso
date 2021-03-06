/* Streams
  'Chorros' de informacion que se transmite en 'Pedazos' (Chunks)
  3 tipos: Lectura, Escritura, Duplex
  Instancias de EventEmitter
  Acceso asincrono
  Es raro crear streams directamente
  Muchos ofrecen interfaz
  Mecanismos de Node
    stdin/stdout
    request de HTTP
    sockets
    manipulacion de ficheros/imagenes
 */

"use strick";

var fs = require("fs"),
  readStream = fs.createReadStream("assets/nombres.txt"),
  writeStream = fs.createWriteStream("assets/nombres_copia.txt");

readStream.pipe(writeStream);

readStream
  .on("data", function (chunks) {
    console.log("He leido: " + chunks.length + " caracteres");
  })
  .on("end", function () {
    console.log("Termine de leer el archivo");
  });
