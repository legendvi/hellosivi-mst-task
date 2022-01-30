//App Component is Parent of all Components
//App Component is used only to render two more compontents
import RenderCard from "./Components/RenderCard";
import { Container } from "react-bootstrap";
import Header from "./Layout/Header";
function App() {
  return (
    <>
      {/* Header Component renders Navbar and options to Filter and sort from Dropdowns  */}
      <Container>
        <Header />
        <hr
          style={{
            color: "black",
            backgroundColor: "black",
            height: 1,
            marginTop: 0,
          }}
        />

        <RenderCard />
      </Container>
    </>
  );
}

export default App;
