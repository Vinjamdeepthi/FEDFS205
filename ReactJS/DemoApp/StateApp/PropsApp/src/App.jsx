function App() {
  return (
    <div>
      <Student name="Deepthi"  />
      <Student name="swapnika" />
    </div>
  );
}

function Student(props) {
  return <h2>Hello, {props.name}!</h2>
}

export default App;