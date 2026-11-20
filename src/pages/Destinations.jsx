import { useState } from "react"
import App from "../App"
import Origin from "./Origin"

function Destination ({setPage, selectedStation, setSelectedStation, stations}) {
    const base = 10
    const increment = 0.30
    

    function chooseStation (x, index) {
        setSelectedStation(x)
        console.log(x, index)
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
                        <h1>Please select your destination</h1>
                    </div>

                    <div>
                        <p>Your origin is: {origin}</p>
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
export default Destination