import React, { useState, useEffect } from "react";
import { JsonToTable } from "react-json-to-table";


function Standings() {

    const [driverStandings, setDriverStandings] = useState({});
    const [constructorStandings, setConstructorStandings] = useState({});

    const loadDriverStandings = async () => {       
        const response = await fetch("http://ergast.com/api/f1/current/driverStandings.json");
        let driverStandings = await response.json();
        driverStandings = driverStandings.MRData.StandingsTable.StandingsLists['0'].DriverStandings
        let driverStandingsFiltered = {"Driver Standings": []};
        for (let i = 0; i < driverStandings.length; i++) {
            let driverFn = driverStandings[i].Driver.givenName;
            let driverLn = driverStandings[i].Driver.familyName;
            let driver = {Position: `${i+1}`, Driver: `${driverFn} ${driverLn}`};
            driverStandingsFiltered["Driver Standings"].push(driver);
        }
        setDriverStandings(driverStandingsFiltered)
    }

    const loadConstructorStandings = async () => {       
        const response = await fetch("http://ergast.com/api/f1/current/constructorStandings.json");
        let constructorStandings = await response.json();
        constructorStandings = constructorStandings.MRData.StandingsTable.StandingsLists['0'].ConstructorStandings
        let constructorStandingsFiltered = {"Constructor Standings": []};
        for (let i = 0; i < constructorStandings.length; i++) {
            let constructorName = constructorStandings[i].Constructor.name;
            let constructor = {Position: `${i+1}`, Constructor: `${constructorName}`};
            constructorStandingsFiltered["Constructor Standings"].push(constructor);
        }
        setConstructorStandings(constructorStandingsFiltered)
    }

    useEffect(() => {
        loadDriverStandings();
        loadConstructorStandings();
    }, []);



    return <div class='standings'>
        <JsonToTable json={driverStandings} class = "table"/>
        <JsonToTable json={constructorStandings} class = "table"/>
        
    </div>

}

export default Standings;