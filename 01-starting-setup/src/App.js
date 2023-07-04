
import ExpenseList from "./components/ExpenseList";

function App() {
  const expenses = [
    { id:'e1', title: 'Car insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { id: 'e2', title: 'Car insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { id: 'e3', title: 'Car insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { id: 'e4', title: 'Car insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
