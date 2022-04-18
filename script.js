const $lucesDelCirculo=document.querySelectorAll('.luces-circulo');//La variable $lucesDelCirculo hace referencia a cada uno de los colores
let contadorDeLuz=0;//Va a iterar por cada uno de los nodos de la lista

const mostrarLuz=()=>{ //Constante declarada por una funcion flecha llamada mostrarLuz
    $lucesDelCirculo[contadorDeLuz].className='luces-circulo';//En la posicion contadorDeLuz el nombre de la clase va a ser luces-circulo
    contadorDeLuz++;//Se avanza el contador de luz

    if(contadorDeLuz>2) contadorDeLuz=0;//Evaluar que si contador de luz es mayor a 2 el contador vuelve a 0

    const luzActual=$lucesDelCirculo[contadorDeLuz];//En la constante luzActual se almacena la variable $lucesDelCirculo en su posicion contadorDeLuz
    luzActual.classList.add(luzActual.getAttribute('color'));
}

setInterval(mostrarLuz, 1000); //Actualizar cada segundo de tiempo el color del semaforo