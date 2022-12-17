import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import Highlights from "./components/Highlights";
function App() {
  return (
    <article className="page">
      <Nav />
      <MainContent />
      <Highlights />
    </article>
  );
}

export default App;
