const board = (() => {
    const game = document.querySelector(".game")
    for (let i = 1; i <= 9; i++) {
        let newDiv = document.createElement("div")
        newDiv.classList.add("grid-squares")
        newDiv.setAttribute('data-square', `${i}`)
        game.appendChild(newDiv);
    }
})();

const playerFactory = (name, marker, active) => {
    this.name = name || 'New Player'
    this.marker = marker
    this.active = active
    const makeMove = (selection, token) => {
        selection.innerHTML = `<img src="svg/${token}.svg"></img>`
        selection.setAttribute('data-marker', `${token}`)
    }
    const switchPlayers = () => {
        for (let player of players) {
            player.active = player.active === true ? false : true        
        }
    }
    return {name, marker, active, makeMove, switchPlayers}
}

const gameplay = (() => {
    document.querySelector(".game").addEventListener('click', () => {
    if (event.target.className == 'grid-squares') {
        const selection = event.target
        let activePlayer = players.find(player => player.active)
        activePlayer.makeMove(selection, activePlayer.marker)
        checkForWin(activePlayer)
        activePlayer.switchPlayers()
        }
    }
)
    function checkForWin(activePlayer) {
        const grids = document.getElementsByClassName("grid-squares")
        if (grids[0].dataset.marker === activePlayer.marker &&
            grids[1].dataset.marker === activePlayer.marker &&
            grids[2].dataset.marker === activePlayer.marker) {
                console.log(`${activePlayer.name} wins`)
        }
        if (grids[3].dataset.marker === activePlayer.marker &&
            grids[4].dataset.marker === activePlayer.marker &&
            grids[5].dataset.marker === activePlayer.marker) {
                console.log(`${activePlayer.name} wins`)
        }
        if (grids[6].dataset.marker === activePlayer.marker &&
            grids[7].dataset.marker === activePlayer.marker &&
            grids[8].dataset.marker === activePlayer.marker) {
                console.log(`${activePlayer.name} wins`)
        }
        if (grids[0].dataset.marker === activePlayer.marker &&
            grids[3].dataset.marker === activePlayer.marker &&
            grids[6].dataset.marker === activePlayer.marker) {
                console.log(`${activePlayer.name} wins`)
        }      
        if (grids[1].dataset.marker === activePlayer.marker &&
            grids[4].dataset.marker === activePlayer.marker &&
            grids[7].dataset.marker === activePlayer.marker) {
                console.log(`${activePlayer.name} wins`)
        }      
        if (grids[2].dataset.marker === activePlayer.marker &&
            grids[5].dataset.marker === activePlayer.marker &&
            grids[8].dataset.marker === activePlayer.marker) {
                console.log(`${activePlayer.name} wins`)
        }
        if (grids[2].dataset.marker === activePlayer.marker &&
            grids[4].dataset.marker === activePlayer.marker &&
            grids[6].dataset.marker === activePlayer.marker) {
                console.log(`${activePlayer.name} wins`)
        }  
        if (grids[0].dataset.marker === activePlayer.marker &&
            grids[4].dataset.marker === activePlayer.marker &&
            grids[8].dataset.marker === activePlayer.marker) {
                console.log(`${activePlayer.name} wins`)
        }                      
    }
})();

const players = [playerFactory('lamda', 'crosses', true), playerFactory('emma', 'noughts', false)]

