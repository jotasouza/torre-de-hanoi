//CREATING THE REPRESENTATION OF THE TOWERS
let towers = [[5, 4, 3, 2, 1], [], []]

//VARIABLE THAT RECEIVES POSITIONS
let positions = ['p0', 'p1', 'p2', 'p3', 'p4', 'p5', 't1', 't2', 't3',]

//buffer de movimentos
let movements = []

let frase  = document.querySelector('.frase')

function render(){
    towers.forEach((tower, towerid) => {
       tower.forEach((disk, position) => {
           let d = document.querySelector(`.d${disk}`)
           positions.forEach(position => {
            d.classList.remove(position)
           })
           d.classList.add(`t${towerid + 1}`)
           d.classList.add(`p${position + 1}`)
       })
    })
}

function move(fromtower, totower){
    //verifica se a torre de origem está vazia
    if(!towers[fromtower].length){
        frase.innerText = 'Torre de origem não pode ser vazia'
        return
    }
    let disk = towers[fromtower].pop()
    //faz a verificação do index da torre para não colocar
    //um disco maior sobre o menor
    if(towers[totower].length){
        if(towers[totower][towers[totower].length -1] < disk){
            let aviso = setTimeout( function(){
                alert('Movimento inválido!')
            }, 100)
            return towers[fromtower].push(disk)
        }
    }
    let d = document.querySelector('.d' + disk)
    d.classList.add('p0')
    towers[totower].push(disk)
    setTimeout(render, 400)
}

function clicktower(n){
    //verifica se o jogo ainda não começou e informa o passo para o player
    if(n !== null){
        frase.innerText = 'Escolha a torre de destino'
    }
    if(movements.length && movements[0].length == 1){
        movements[0].push(n)
       //informa o próximo passo para o player 
       frase.innerText = 'Escolha a torre de origem'
    }else{
        movements.unshift([n])
    }
    
    console.log(movements)
}

setInterval(() => {
    if(movements.length && movements[movements.length - 1].length == 2){
        let m = movements.pop()
        move(m[0], m[1])
    }
}, 600);

render()