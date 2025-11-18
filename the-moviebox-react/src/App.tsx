import { MovieContextProvider } from "./cases/movies/context/movie-context";
import { MovieContent } from "./cases/movies/components/movie-content";
import { Highlight } from "./components/layout/highlight";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { NavBar } from "./components/layout/navbar";

function App() {

  return (
    <MovieContextProvider>
      <Header />
      <main>
        <Highlight/>
        <NavBar/>
        <MovieContent />
      </main>
      <Footer />
    </MovieContextProvider>
  )
}

export default App