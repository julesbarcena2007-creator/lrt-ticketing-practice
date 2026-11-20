import { useState } from "react"
import App from "../App"

function Origin ({setPage, setSelectedStation, selectedStation, stations}) {
    const base = 10
    const increment = 0.30
    

  

    function chooseStation (station, index) {
        setSelectedStation(station, index)
        console.log(station, index)
        setPage("destination")
    }

    function goToDestination () {
        setPage("destination")
    }

    function goToHome (){
        setPage("home")
    }
    return (
        <div> 
            <div className="container">
                <div>   
                    <div>
                        <h1>logo</h1>
                    </div>

                    <div>   
                        <h1>Please select your origin</h1>
                    </div>

                
                </div>
            </div>

            <div className="containerStations">  
                <div>
                    <div className="stationsContainer">
                        {stations.map((station, index) => {
                            return <button onClick={() => chooseStation(station,index)} className="stationButton" key={index}>
                                {station}
                            </button>
                        })}
                        
                    </div>
                <div className="container">       
                <button onClick={goToHome}>Back to home</button>
               
                </div>
                </div>
            </div>
        </div>
    )
}
export default Origin