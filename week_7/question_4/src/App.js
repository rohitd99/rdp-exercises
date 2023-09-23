import Card from "./components/card";
import img from "./img/image.jpg"

function App() {
  return (
    <div className="bg-neutral-800 min-h-screen flex justify-center items-center">
      <Card src={img} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."></Card>
    </div>
  );
}

export default App;
