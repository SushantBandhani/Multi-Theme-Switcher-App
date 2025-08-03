import "./App.css";
import usePersistentCart from "./hooks/usePersistentCart";
import DashBoardLayout from "./layout/DashBoardLayout";

// Renders the root component
function App() {
  usePersistentCart();
  return (
    <>
      <DashBoardLayout></DashBoardLayout>
    </>
  );
}

export default App;
