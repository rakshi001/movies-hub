const Card = ({ myMovies }) => {
  return (
    <>
      <h2>these are the movies {myMovies}</h2>
    </>
  );
};

const App = () => {
  const myMovies = ["starwars", "motupatlu", "doreamon"];
  return (
    <>
      <div>this is app component</div>
      <Card myMovies={"star wars"} />
      <Card myMovies={"motu patlu"} />
      <Card myMovies={"doreamon"} />
    </>
  );
};

export default App;
