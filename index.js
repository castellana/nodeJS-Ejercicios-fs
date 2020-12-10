const fs = require('fs')


//ändere den Text in blog1.txt:
fs.appendFile('blog1.txt', "Hola mundo", err => {
    if (err) throw err
    console.log("Blog1 ergänzt");
})

// erstelle eine neue Datei blog2.txt und schreibe etwas in sie hinein
fs.writeFile('blog2.txt', "Hallo, ich bin der Text im Blog2 erstellt mit JS", err => {
    if (err) throw err
    console.log("Blog2 erstellt"); 
})

// erstelle einen neuen Ordner “assets” und kümmere dich um den Fehler
// fs.mkdir('assets', (err) => {
//     if (err) throw err;
//     console.log("Ordner assets erstellt");
// })
//...erscheint in der Console: err
//entonces, para corregir el error puedo:
//a) o poner {recursive: true}
//b) o ver si la carpeta ya existe:
if (fs.existsSync('./assets')) {
    console.log("The path of assets exists");
} else {
    console.log("The path of assets doesn´t exist yet");
}
// lösche den neuen Ordner assets,
// fs.rmdir(path[, options], callback)
// fs.rmdir()

// Lösche eine Datei “delete.txt” aber nur wenn sie existiert
if (fs.existsSync('./delete.txt')) {
    console.log("delexte.txt exsitiert");
} else {
    console.log("delexte.txt doesnt exist");
}
//resultado de la consola: delexte.txt doesnt exist"


// Erstelle eine Datei Hello.txt und füge ihr etwas Text hinzu.
fs.writeFile('Hello.txt','este es el texto del nuevo archivo con nombre Hello', err => {
    if (err) throw err;
    console.log("Hello.txt erstellt");
})
// Nenne die Datei in HelloWorld.txt um
fs.rename('Hello.txt', 'HelloWorld.txt', (err) => {
    if (err) throw err;
    console.log('Rename complete!');
  });