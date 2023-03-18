export default function Contest() {

    return (
        <div className="fullwrap">
          <img src="https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <div className="fullcap">
            Animals<br /><br /><br />
            <button onClick={()=>handleOption("nature")}>View current contests</button>
          </div>
        </div> 
    )
}