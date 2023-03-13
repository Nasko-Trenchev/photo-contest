export default function Main(){

    return (
        <main>
        <h1>Welcome to the Photo Contest!</h1>
        <p>Patricipate in one of the below categories</p>
        <div className="fullwrap">
          <img src="https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <div className="fullcap">
            Animals<br /><br /><br />
            <button>View current contests</button>
          </div>
        </div>
        <div className="fullwrap">
          <img src="https://images.pexels.com/photos/345522/pexels-photo-345522.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <div className="fullcap">
            Nature<br /><br /><br />
            <button>View current contests</button>
          </div>
        </div>
        <div className="fullwrap">
          <img src="https://images.pexels.com/photos/2706654/pexels-photo-2706654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <div className="fullcap">
            Space <br /><br /><br />
            <button>View current contests</button>
          </div>
        </div>
      </main>
    )
}