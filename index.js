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
    segmentos[indice].forEach((segmento, i) => {
        segmento.children[0].classList.toggle("on", mapaNumeros[valor][i])
    });
}

const segundero = setInterval(()=>{
    const ya = new Date();
    const horas = getDosNumeros(ya.getHours().toString());
    const minutos = getDosNumeros(ya.getMinutes().toString());
    const segundos = getDosNumeros(ya.getSeconds().toString())
    setNumero(0,horas[0]);
    setNumero(1,horas[1]);
    setNumero(2,minutos[0]);
    setNumero(3,minutos[1]);
    setNumero(4,segundos[0]);
    setNumero(5,segundos[1]);
},1000);

function getDosNumeros(dosDigitos){
    if(dosDigitos.length === 2){
        const primero = dosDigitos.slice(0,1);
        const segundo = dosDigitos.slice(1);
        return [primero, segundo];
    }
    return [0,dosDigitos];
}