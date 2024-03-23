import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">TailwindCSS</h1>
      <Card
        username="Green Car"
        image="https://images.pexels.com/photos/13024626/pexels-photo-13024626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        award="Car"
      />
      <Card
        username="Moped"
        image="https://images.pexels.com/photos/20427316/pexels-photo-20427316/free-photo-of-a-moped-parked-in-front-of-a-blue-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        // award="Bike"
      />
      <Card
        username="Wild Plant"
        image="https://images.pexels.com/photos/9130779/pexels-photo-9130779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        post="Plant"
      />
    </>
  );
}

export default App;
