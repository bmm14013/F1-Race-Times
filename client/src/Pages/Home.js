import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TimezoneSelect from 'react-timezone-select'

function Home({setTimeZone}) {

    const navigate = useNavigate();

    const [selectedTimezone, setSelectedTimezone] = useState({})

    const showRaceTime = async (setTimezone) => {
        navigate("/race-time")
    }

    return <div>
        <body>
            <h1>Please choose your timezone: </h1>
            <form onSubmit={(e) => {e.preventDefault();}}>
                <TimezoneSelect
                    value={selectedTimezone}
                    onChange={setSelectedTimezone}
                />
                <p></p>
                <button 
                    type="submit"
                    onClick={showRaceTime}
                >See Next Race Times</button>
            </form>
        </body>
    </div>
}

export default Home;