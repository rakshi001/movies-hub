import { useState } from "react";
import "./App.css"; // Assuming CSS is in App.css

const Card = ({ myMovies }) => {
  const [] = useState()
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="card">
      <h2>{myMovies}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "Liked ✅" : "Like ❤️"}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <Card myMovies="Star Wars" />
      <Card myMovies="Motu Patlu" />
      <Card myMovies="Doreamon" />
    </div>
  );
};

export default App;
