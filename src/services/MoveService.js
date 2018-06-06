import StorageService from './StorageService'

// var moves = [];

function getMoves () {
  return new Promise((resolve, reject) => { 
    var user = JSON.parse(StorageService.getStorage('loggedInUser'));
    resolve(user.moves)
  })
}

// function setMoves(curMoves) {
//   return new Promise((resolve, reject) => { 
//     moves = curMoves;
//     resolve(moves)
//   })
// }

function addMove(curMove) {
  return new Promise((resolve, reject) => { 
    var move = {}
    move.at = Date.now();
    move.amount = curMove.amount;
    move.to = curMove.to;
    var user = JSON.parse(StorageService.getStorage('loggedInUser'));
    user.moves.unshift(move)
    user.bitCoin -= move.amount;
    StorageService.setStorage('loggedInUser',JSON.stringify(user))
    resolve(user.moves)
  })
}

function initMove(name) {
  return {
    at: 0,
    amount: 0,
    to: name,
  }
}

export default {
  getMoves,
  // setMoves,
  addMove,
  initMove
}