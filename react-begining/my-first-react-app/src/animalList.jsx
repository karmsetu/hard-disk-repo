import ListReturner from "./assets/listReturner";
function Animal() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
    return (
      <div>
        <h1>Animals: </h1>
        <ListReturner animals={animals}/>
      </div>
    );
  }

  export default Animal