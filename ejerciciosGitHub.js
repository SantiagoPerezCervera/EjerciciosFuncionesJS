// Escribir una funcion que regrese la cantidad de valores true que hay en un array
/* 
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
 */
// Regresar 0 si el array es vacio
// usar recursion 

function countTrue(arr) {
    if (arr.length == 0) { 
      return 0; 
    }
    
    if (arr[0] == true) { 
      return 1 + countTrue(arr.slice(1)); 
    } else { 
      return countTrue(arr.slice(1)); 
    }
  }
  console.log(countTrue([]))
  



// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion

function mcd(a, b) {
    if (b == 0) {
      return a;
    } else {
      return mcd(b, a % b);
    }
  }

const num = mcd(18, 12);
console.log(`El MCD de ${18} y ${12} es ${num}.`); 

// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion

function fibonacci(n, fibSeries = [0, 1]) {
  if (n <= 1) {
    return fibSeries;
  } else {
    return fibonacci(n - 1, fibSeries.concat(fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]));
  }
}

console.log(fibonacci(5));


// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos



// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%

function calculateLandAreaProportion(countryName, countryArea) {
  const landArea = 148940000; 
  const proportion = (countryArea / landArea) * 100;
  const proportionFormatted = proportion.toFixed(2);

  return countryName + " representa el " + proportionFormatted + "% del área de tierra en el planeta.";
}
const countryName = "Russia";
const countryArea = 17098242; 

const result = calculateLandAreaProportion(countryName, countryArea);
console.log(result); 



// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit

function invertir(retorno){
  let salida = 1 - retorno;
  return salida;
}

console.log(invertir(0))


// Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"

function msn(n){
  if (n < 1){
  console.log("no hay nadie en linea");
 return n}
  if (n < 2){
   console.log("user1 esta en linea");
 return n}
   if(n < 3 ){
     console.log('user1 y user 2 estan en linea');
   return n}
    else{
       return console.log(" user 1 y otro mas estan en linea");
       
     }
     
   }
   console.log(msn(2));