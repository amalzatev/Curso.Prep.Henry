// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

    
  list = []
  for (let clave in objeto){
      list.push([clave,objeto[clave]])
  }
  return list
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const obj = {}
  for (var i = 0; i < string.length; i++){
    if (string[i] in obj){
      obj[string[i]]++ 
    }
    else{
      obj[string[i]] = 1
    }
  }
return obj
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var mayusculas = ''
  var minusculas = ''
  for (var i = 0; i < s.length; i++){
    if (s[i] === s[i].toUpperCase()){
      mayusculas = mayusculas + s[i]
    }else{
      minusculas = minusculas + s[i]
    }
  }
  return mayusculas + minusculas
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var list = str.split(" ")
  var reves = ""
  for (var i  = 0 ; i < list.length; i++){
    palabra  = list[i].split("").reverse().join("");
    reves  = reves + ' ' + palabra
  }
  return reves
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var N_string = numero.toString()
  var reves = N_string.split("").reverse().join("")
  if (N_string === reves){return "Es capicua"}
  else{ return "No es capicua"}
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nueva_cadena = ''
  for (var i = 0; i < cadena.length; i++){
    c = cadena[i].toLowerCase()
    if (c === 'a' || c === 'b' || c === 'c'){X = 1}
    else{nueva_cadena = nueva_cadena + cadena[i]}
  }
  return nueva_cadena
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let prov="";
  for (let j = 1; j < arr.length; j++) {
    for (let i = 0; i < arr.length-1;  i++) {
      if(arr[i].length > arr[j].length){
        prov=arr[i];
        arr[i]=arr[j];
        arr[j]=prov;
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aqu
  var list = [] 
  for (let i = 0; i < arreglo1.length; i++) {
    for (var j = 0; j < arreglo2.length; j++){
      if (arreglo1[i] === arreglo2[j]){
          list.push(arreglo1[i])
      }
    }
  }
  return list
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

