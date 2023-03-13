import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Login from './components/Login/Login';
import Register from "./components/Register/Register";
import Gallery from "./components/Gallery/Gallery";
import Details from "./components/Details/Details";

function App() {
  return (
    <>
      <NavigationHeader />
      <main>
        <h1>Welcome to the Photo Contest!</h1>
        <p>Submit your best photos and win amazing prizes.</p>
        <img src="./placeholder.jpg" alt="Sample photo" />
      </main>
      <footer>
        <p className="p-text-size">&copy; 2023 Photo Contest. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
