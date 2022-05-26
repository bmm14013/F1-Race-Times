import React, { useEffect, useState } from "react";


function RaceTime( timeZone ) {

    const [timeZoneLabel, setTimeZoneLabel] = useState('');
    const [raceTitle, setRaceTitle] = useState('');
    const [practiceOneTime, setPracticeOneTime] = useState('');
    const [practiceOneDate, setPracticeOneDate] = useState('');
    const [raceTime, setRaceTime] = useState('');
    const [raceDate, setRaceDate] = useState('');

    const getNextRace = async () => {
        const response = await fetch("http://ergast.com/api/f1/current/next.json");
        let raceData = await response.json();
        raceData = raceData.MRData.RaceTable.Races;
        return raceData;
    }

    const convertTime = async eventTime => {       
        const response = await fetch(`/convert_time/${eventTime}+${timeZone.timeZone.abbrev}`)
        const convertedTime = response.text();
        return convertedTime
    }

    const loadRaceData = async () => {
            setTimeZoneLabel(timeZone.timeZone.abbrev);
            const raceInfo = await getNextRace();
            setRaceTitle(raceInfo['0'].raceName);
            setRaceDate(raceInfo['0'].date)
            const convertedRaceTime = await convertTime(raceInfo['0'].time.slice(0,5));
            setRaceTime(convertedRaceTime);
            setPracticeOneDate(raceInfo['0']) = await convertTime
    }

    useEffect(() => {
        loadRaceData();
    }, []);


    return <div>
        <body>
            <div class="racetimes">
                <h1>Next Race: {`${raceTitle}`}</h1>
                <h1>Time Zone: {`${timeZoneLabel}`}</h1>
                <h1>Practice 1: </h1>
                <h1>Practice 2: Friday 17:30-18:30</h1>
                <h1>Practice 3: Saturday 13:00-14:00</h1>
                <h1>Qualifying: Saturday 1600-17:00</h1>
                <h1>Race: {`${raceDate} ${raceTime}`}</h1>
            </div>
        </body>
    </div>
}

export default RaceTime;