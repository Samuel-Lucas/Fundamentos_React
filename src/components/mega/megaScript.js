export function gerarMega() {

    let i = 0, array = [], string = ''

    let tam = document.querySelector('#quantidade').value

    while(i < 6) {

        let numero = Math.floor(Math.random() * (tam - 1) + 1)
        array.push(numero)
        i++
    }

    array = configurarArray(array, tam)  // Se houver numero repetido, altera numero
    array = ordenarArray(array)

    for (let key in array) {
        string += array[key] + ' '
    }

    let show = document.querySelector('#show')
    show.innerHTML = 'Mega sorteada <br>' + string 
}

function configurarArray(array, tam) {

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {

            if(array[i] == array[j] && i != j) {
                array[j] = Math.floor(Math.random() * (tam - 1) + 1)
            }
        }
    }

    return (verificaRepeticao(array) ? array : configurarArray(array, tam))
}

function verificaRepeticao(array) {

    let inc = 0

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {

            if(array[i] == array[j] && i != j) {
                inc++
            }
        }
    }

    return inc == 0
}

function ordenarArray(array) {

    let aux

    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {

            if(array[i] > array[j]) {
                aux = array[i]
                array[i] = array[j]
                array[j] = aux
            }
        }
    }

    return array
}