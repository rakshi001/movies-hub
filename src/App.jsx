const Card = ({ myMovies }) => {
  return (
    <>

      <h2 className="card">these are the movies {myMovies}</h2>
    </>
  );
};

const App = () => {
  const myMovies = ["starwars", "motupatlu", "doreamon"];
  return (
    <>
      <div>
        <Card  myMovies={"star wars"} />
        <Card myMovies={"motu patlu"} />
        <Card myMovies={"doreamon ."} />
      </div>
    </>
  );
};

export default App;
