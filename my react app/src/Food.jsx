function Food() {
    const food1 = "orange";
    const food2 = "banana";
    return (
      <ul>
        <li>apple</li>
        <li>{food1}</li> {/* Corrected the way to embed the variable */}
        <li>{food2.toUpperCase()}</li>
      </ul>
    );
  }
  
  export default Food;
  