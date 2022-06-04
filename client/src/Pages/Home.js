import React from "react";


function Home() {

    return <div>
        <div class='racetimes'>
            <h1> Welcome to F1 Race Info! </h1>
            <h1> Here you can view <a href={"/race-time"}>race times</a> and <a href={"/standings"}>current standings</a></h1>
        </div>
    </div>
}

export default Home;