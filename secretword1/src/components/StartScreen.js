import "./StartScreen.css";

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>Secret word</h1>
        <p>Clique no botão abaixo para jogar</p>
        <button onClick={startGame}>Comerçar o jogo</button>
    </div>
  )
}

export default StartScreen