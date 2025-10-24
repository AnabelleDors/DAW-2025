const value1 = true;
const value2 = false;


if(value1){
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}
//Saída: Verdadeiro

if(value1){
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}
//Saída: Falso

//Thruty/Salsy -> variaveis vazias ou com valor 0, se submeter a um teste lóico, ficam boolean.

const value3 = '';
if(value1){
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

//Operador ternário
(logica) ? (entao) : (senao);

const resultado = value3 ? 'Verdadeiro' : 'Falso';
console.log(resultado);
//Saída: Falso