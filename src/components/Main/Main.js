import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

import * as contestService from "../../services/ContestService"

export default function Main(){

  const [currentContests, setCurrentContests] = useState([]);

  useEffect(() => {

    contestService.getAllContests()
    .then(result => {
      setCurrentContests(result);
    })
   

  }, [])
  const navigate = useNavigate();

  const handleOption = (category) => {
    navigate(`/${category}`);
  };

    return (
        <main>
        <h1>Welcome to the Photo Contest!</h1>
        <p>Patricipate in one of the below categories</p>
        {/* {currentContests.map(contest => <div key={contest._id} className="fullwrap">
          <img src={contest.imageUrl} />
          <div className="fullcap">
            Animals<br /><br /><br />
            <button onClick={()=>handleOption(contest.name)}>View current contests</button>
          </div>
        </div>)} */}
        {/* <div key={contest._id} className="fullwrap">
          <img src="https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <div className="fullcap">
            Animals<br /><br /><br />
            <button onClick={()=>handleOption("nature")}>View current contests</button>
          </div>
        </div>)} */}
        {/* <div className="fullwrap">
          <img src="https://images.pexels.com/photos/345522/pexels-photo-345522.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <div className="fullcap">
            Nature<br /><br /><br />
            <button onClick={()=>navigate('/nature')}>View current contests</button>
          </div>
        </div>
        <div className="fullwrap">
          <img src="https://images.pexels.com/photos/2706654/pexels-photo-2706654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <div className="fullcap">
            Space <br /><br /><br />
            <button>View current contests</button>
          </div> */}
        {/* </div> */}
      </main>
    )
}