const numeros = document.querySelectorAll(".numero");
const segmentos = Array.from(numeros).map(numero => numero.querySelectorAll("svg"));

const mapaNumeros = [
    [1,1,1,1,1,0,1],
    [0,1,1,0,0,0,0],
    [1,1,0,1,1,1,0],
    [1,1,1,1,0,1,0],
    [0,1,1,0,0,1,1],
    [1,0,1,1,0,1,1],
    [1,0,1,1,1,1,1],
    [1,1,1,0,0,0,0],
    [1,1,1,1,1,1,1],
    [1,1,1,1,0,1,1]
];

function setNumero(indice,valor){
    segmentos[indice].forEach((segmento, j) => {
        segmento.children[0].classList.toggle("on", mapaNumeros[valor][j])
    })
}

const segundero = setInterval(()=>{
    const ya = new Date();
    const horas = getTwoNumbers(ya.getHours().toString());
    const minutos = getTwoNumbers(ya.getMinutes().toString());
    const segundos = getTwoNumbers(ya.getSeconds().toString())
    setNumero(0,horas[0]);
    setNumero(1,horas[1]);
    setNumero(2,minutos[0]);
    setNumero(3,minutos[1]);
    setNumero(4,segundos[0]);
    setNumero(5,segundos[1]);
},1000)

function getTwoNumbers(doubleDigit){
    if(doubleDigit.length === 2){
        const first = doubleDigit.slice(0,1);
        const second = doubleDigit.slice(1);
        return [first, second];
    }
    return [0,doubleDigit]
}