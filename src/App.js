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
        <p>Compete in one of the three categories.</p>
        <div class="fullwrap">
          <img src="https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <div class="fullcap">
            Animals<br /><br /><br />
            <button>View category</button>
          </div>
        </div>
        <div class="fullwrap">
          <img src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <div class="fullcap">
            Nature<br /><br /><br />
            <button>View category</button>
          </div>
        </div>
        <div class="fullwrap">
          <img src="https://images.pexels.com/photos/2706654/pexels-photo-2706654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <div class="fullcap">
            Space <br /><br /><br />
            <button>View category</button>
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
