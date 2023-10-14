class ship {
    constructor(lenght){
        this.lenght = lenght
    }
    startingPoint
    coordinates = []
    coordinatesAffected = []
    axis = false //false = x, true=y
    occupyCell(){

    }
    placeShip(startCord, dimension){
        this.startingPoint = startCord
        if (!this.axis) {
            if(this.startingPoint[1]+this.lenght-1> dimension-1){
                return alert(`invalid input in axisX for placing ship`)
            } else {
                for (let placeShipIndex = 0; placeShipIndex < this.lenght; placeShipIndex++) {
                    const element = [this.startingPoint[0], this.startingPoint[1]+placeShipIndex]
                    this.coordinates.push(element)
                }
            }
        } else if (this.axis) {
            if (this.startingPoint[0]+this.lenght-1> dimension-1) {
                return alert(`invalid input in axisY for placing ship`)
            } else {
                for (let placeShipIndex = 0; placeShipIndex < this.lenght; placeShipIndex++) {
                    const element = [this.startingPoint[0]+placeShipIndex, this.startingPoint[1]]
                    this.coordinates.push(element)
                }
            }
        }
        this.coordinatesAffected = this.coordinates
        return this.coordinates
        // return this.startingPoint = [1,2]
    }
    hit(hitCord){
        let hitSucces = false
        let countIndex =0
        let stringedHitCord = JSON.stringify(hitCord)
        this.coordinates.forEach(element => {
            let stringedElement = JSON.stringify(element)
            if(stringedElement == stringedHitCord){
                console.log(`the ship has been hit`)
                // delete this.coordinatesAffected[countIndex]
                this.coordinatesAffected.splice(countIndex,1)
                return hitSucces =true
            }
            countIndex ++
        });
        if (hitSucces) {
            
        }
        return hitSucces
    }
    isSunk(){
        if (this.coordinatesAffected.length == 0) {
            return `Sunk`
        } else {
            return `floating`
        }
    }
}
class gameboard {
    constructor(dimension){
        this.dimension = dimension
    }
    createGameBoard(){
        let board = []
        for (let rowIndex = 0; rowIndex < this.dimension; rowIndex++) {
            for (let columnIndex = 0; columnIndex < this.dimension; columnIndex++) {
                const unit = [rowIndex, columnIndex]
                board.push(unit)
            }
        }
        return board
    }

}

const b = new gameboard(5)
const s = new ship(3)
console.log(b.createGameBoard())
console.log(s.placeShip([3,2], 5))
console.log(s.hit([3,2]))
console.log(s.hit([3,3]))
// console.log(s.hit([3,4]))