//FUNCTION THAT RENDER THE TOWERS AND DISKS
function renderizationTowersAndDisks(){
    towers.forEach((tower, indexTower) => {
        tower.forEach((disc, position) => {
            let disco = document.querySelector('.disco' + disc)
            
            //allPositions.forEach(positions => {
              //  disco.classList.remove(positions)
            //})
            disco.classList.add('tower' + (indexTower + 1))
            disco.classList.add(('position' + (position + 1)))

        })
    })
}

//FUNCTION THAT MOVES THE DISKS
function moveDiscToTower(fromTower, toTower){
    let disc = towers[fromTower].shift()
    let disco = document.querySelector('.disco' + disc)

    disco.classList.add('position0')


    towers[toTower].unshift(disc)
    setTimeout(renderizationTowersAndDisks, 2000)

}

renderizationTowersAndDisks()