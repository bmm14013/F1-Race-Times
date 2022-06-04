import React, { useEffect, useState } from "react";
import TimezoneSelect from 'react-timezone-select'

function RaceTime() {

    const defaultTimeZone = {value:'Etc/GMT', abbrev: "GMT", altName: "ETC/GMT"};
    const [selectedTimezone, setSelectedTimezone] = useState(defaultTimeZone);
    const [raceTitle, setRaceTitle] = useState('');
    const [practiceOneTime, setPracticeOneTime] = useState('');
    const [practiceTwoTime, setPracticeTwoTime] = useState('');
    const [practiceThreeTime, setPracticeThreeTime] = useState('');
    const [qualifyingTime, setQualifyingTime] = useState('');
    const [raceTime, setRaceTime] = useState('');

    const getNextRace = async () => {
        const response = await fetch("http://ergast.com/api/f1/current/next.json");
        let raceData = await response.json();
        raceData = raceData.MRData.RaceTable.Races;
        return raceData;
    }

    const convertTime = async (eventDate, eventTime) => {       
        const response = await fetch(`/convert_time/${eventDate}+${eventTime}+${selectedTimezone.value.replace("/", "_")}`)
        const convertedTime = response.text();
        return convertedTime
    }

    const loadRaceData = async () => {
            const raceInfo = await getNextRace();
            setRaceTitle(raceInfo['0'].raceName);
            const convertedRaceTime = await convertTime(raceInfo['0'].date, raceInfo['0'].time.slice(0,8));
            const convertedPracticeOneTime = await convertTime(raceInfo['0'].FirstPractice.date, raceInfo['0'].FirstPractice.time.slice(0,8));
            const convertedPracticeTwoTime = await convertTime(raceInfo['0'].SecondPractice.date, raceInfo['0'].SecondPractice.time.slice(0,8));
            const convertedPracticeThreeTime = await convertTime(raceInfo['0'].ThirdPractice.date, raceInfo['0'].ThirdPractice.time.slice(0,8));
            const convertedQualifyingTime = await convertTime(raceInfo['0'].Qualifying.date, raceInfo['0'].Qualifying.time.slice(0,8));
            setPracticeOneTime(convertedPracticeOneTime);
            setPracticeTwoTime(convertedPracticeTwoTime);
            setPracticeThreeTime(convertedPracticeThreeTime);
            setQualifyingTime(convertedQualifyingTime);
            setRaceTime(convertedRaceTime);
    }

    useEffect(() => {
        loadRaceData();
    }, [selectedTimezone]);


    return <div>
        <body>
            <div class="racetimes">
                <h1>Timezone:</h1>
                    <TimezoneSelect
                        value={selectedTimezone}
                        onChange={setSelectedTimezone}
                    />
                <h1>Next Race: {`${raceTitle}`}</h1>
                <h1>Race: {`${raceTime}`}</h1>
                <h1>Practice 1: {`${practiceOneTime}`}</h1>
                <h1>Practice 2: {`${practiceTwoTime}`}</h1>
                <h1>Practice 3: {`${practiceThreeTime}`}</h1>
                <h1>Qualifying: {`${qualifyingTime}`}</h1>
            </div>
        </body>
    </div>
}

export default RaceTime;