//App Component is Parent of all Components
//App Component is used only to render two more compontents
import RenderCard from "./Components/RenderCard";

import Header from "./Layout/Header";
function App() {
  return (
    <>
      {/* Header Component renders Navbar and options to Filter and sort from Dropdowns  */}
      <Header />
      <RenderCard />
    </>
  );
}

export default App;
