//CREATING THE REPRESENTATION OF THE TOWERS
let towers = [[1, 2, 3, 4, 5], [], []]

//VARIABLE THAT RECEIVES POSITIONS
let allPositions = ['position-one', 'position-two', 'position-three', 'position-four', 'position-five',
'tower-one', 'tower-two', 'tower-three']

let block = false
let selectTower
let count = 0

//GET TOWERS ELEMENTS FOR HTML
const main = document.querySelector('.main')
const towerOne = document.querySelector('.tower-one')
const towerTwo = document.querySelector('.tower-two')
const towerThree = document.querySelector('.tower-three')

const counter = document.querySelector('.count')

const buttonReset = document.querySelector('.reset')

//iteração com as torres
towerOne.addEventListener('click', moveDiscToTower)
towerTwo.addEventListener('click', moveDisks)
towerThree.addEventListener('click', moveDiscToTower)

//buttonReset.addEventListener('click', reset)

/*FUNÇÃO QUE CRIA OS DISCOS
function createDisks(n){
    for(let i = 0; i < n; i++){
        const divDisco = document.createElement('div')
        divDisco.setAttribute('class', 'disco')
        main.appendChild(divDisco)
    }
}
createDisks(5)*/

//FUNCTION THAT RENDER THE TOWERS AND DISKS
function renderizationTowersAndDisks(){
    
    towers.forEach((tower, indexTower) => {
        tower.forEach((disc, position) => {
            let divDisco = document.createElement('div')
            divDisco.setAttribute('class', 'disco')
            divDisco.classList.add('disco' + disc)
            divDisco.classList.add('tower' + (indexTower + 1))
            divDisco.classList.add(('position' + (position + 1)))
            main.appendChild(divDisco)

        })
    })
}
renderizationTowersAndDisks()

function moveDisks(e){
    let top = e.currentTarget
    console.log(top)

   if(block === false){
       selectTower = top.lastElementChild
       console.log(top)
       block = true
   }else{
       block = false
   }

   if(!top.lastElementChild){
       top.appendChild(selectTower)
       counter++
       block = false
   }else if(top.lastElementChild.clientWidth > selectTower.clientWidth){
       top.appendChild(selectTower)
       counter++
       block = false
   }
}

function moveDiscToTower(fromTower, toTower){
    let disc = towers[fromTower].shift()
    let disco = document.querySelector('.disco' + disc)

    //disco.classList.add('position0')


    towers[toTower].unshift(disc)
    setTimeout(renderizationTowersAndDisks, 2000)

}
