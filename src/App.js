import "./styles.css";
import Button from "./components/Button";

export default function App() {
  return (
    <div className="App">
      <Button onclick={() => alert("clicked")} color="red" text="Remove" />
      <br />
      <Button
        onclick={() => alert("clicked")}
        color="blue"
        text="Create Note"
      />
      <br />
      <Button onclick={() => alert("clicked")} text="Back" />
    </div>
  );
}
