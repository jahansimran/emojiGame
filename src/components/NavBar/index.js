import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav className="nav-bar">
      <div className="emogi-logo-name">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="name">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="text-container">
          <p className="name-last">Score:{currentScore}</p>
          <p className="name-last">Top Score:{topScore}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
