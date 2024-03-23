/*  2024-03-23 16:39:02

Tailwind, Tailwind-Merge
CVA



*/

import Button from "./components/ui/Button";

function App() {
  return (
    <>
      <div>Button Abstracted</div>
      <Button>Click Me</Button>
      <Button variant="secondary" className="bg-green-500">
        Click Me
      </Button>
      <Button variant="danger">Click Me</Button>
    </>
  );
}

export default App;
