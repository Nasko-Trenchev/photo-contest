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
        <div class="fullwrap">
          <img src="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg" />
          <div class="fullcap">
            This will cover the entire image!<br />
            <button>Click!</button>
          </div>
        </div>
        <div class="fullwrap">
          <img src="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg" />
          <div class="fullcap">
            This will cover the entire image!<br />
            <button>Click!</button>
          </div>
        </div>
        <div class="fullwrap">
          <img src="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg" />
          <div class="fullcap">
            This will cover the entire image!<br />
            <button>Click!</button>
          </div>
        </div>
      </main>
      <footer>
        <p className="p-text-size">&copy; 2023 Photo Contest. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
