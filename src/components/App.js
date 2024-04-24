import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

{/* write an <About> component here */}
function About(){
  return(
    <div id ="About">
      <h1>About</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      
      <NavBar /> {/* Include the Navbar component */}
      <Home /> {/* Include the Home component */}
      <About /> {/* Include the About component */}
    </div>
  );
}

export default App;
