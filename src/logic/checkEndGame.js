const checkEndGame=(newBoard)=>{
    return newBoard.every((square) => square !== null)
  }

  export default checkEndGame