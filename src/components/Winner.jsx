import Square from "./Square";

// eslint-disable-next-line react/prop-types
const Winner = ({winner, resetPlay})=>{
    if(winner === null) return null
    return(
       
              <section className="winner">
                <div className="text">
                  <h2>
                    {winner === false ? 'Empate' : 'Ganó'}
                  </h2>
                <header className="win">
                  {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                  <button onClick={resetPlay}>Empezar de nuevo</button>
                </footer>
                </div>
              </section>
                    
    )
};

export default Winner;