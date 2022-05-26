import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TimezoneSelect from 'react-timezone-select'

function Home({setTimeZone}) {

    const navigate = useNavigate();

    const [selectedTimezone, setSelectedTimezone] = useState('');

    const showRaceTime = async timeZone => {
        if (timeZone === '') {
            alert('Please choose a time zone');
        } else {
            setTimeZone(timeZone);
            navigate("/race-time");
        }
    }

    return <div>
        <body>
            <h1>Please choose your timezone: </h1>
            <form onSubmit={(e) => {e.preventDefault()}}>
                <TimezoneSelect
                    value={selectedTimezone}
                    onChange={setSelectedTimezone}
                />
                <p></p>
                <button 
                    type="submit"
                    onClick={() => showRaceTime(selectedTimezone)}
                >See Next Race Times</button>
            </form>
        </body>
    </div>
}

export default Home;