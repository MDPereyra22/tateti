const turns = {
  x: 'x',
  o: 'o',
}

const Square = ({children, updateBoard,index})=>{
  return(
    <div className="square" key={index}>
      {children}
  </div>
  )
}

const board = Array(9).fill(null)
function App() {
 return (
  <main className="board">
  <h1>Ta-Te-Ti</h1>
  <section className="game">
    {board.map((_ , index)=>{
      return (
        <Square
         key={index}
         index={index}
        >
          {index}
        </Square>
      )
    })}
  </section>
  </main>
 )
}

export default App
