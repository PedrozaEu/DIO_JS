//Currying é um recuros que consiste em usar uma função
//passando menos parametros do que o requerido.

//tabuada de multiplicar
function multiplicar(a) {
  return function (b) {
    return a * b;
  };
}
const tabuada = 3;
const multiplicar2 = multiplicar(tabuada);
console.log("TABUADA DE " + tabuada);
for (i = 0; i <= 9; i++) {
  console.log(tabuada + " x " + i + " = " + multiplicar2(i));
}

/* tabuada de somar
function soma (a){
    return function (b){
        return a+b;
    }
}

const tabuada = 9;
const soma2 = soma(tabuada);//armazenando numa variavel o valor do parametro 1 da função soma ele fica fixo...

for(i=0; i<=9; i++){//...enquanto o "for" percorre os elementos de 0 a 9, somando todos com o parametro "a" de soma 
    console.log(soma2(i));
}

 */
