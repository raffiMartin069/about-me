import NavigationBar from "./Components/Navigation";
import Introduction from "./Components/Introduction";
import Skills from "./Components/Skills";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="background-m-color">
        <NavigationBar />
        <Introduction />
      </div>
      <section>
        <AboutMe />
      </section>
      <article>
        <Skills />
      </article>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
