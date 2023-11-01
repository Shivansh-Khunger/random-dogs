import React from "react";
import Forecast from "./forecast";
import BgGrid from "./bg-grid";
export default function Forecastgrid(){
    return (
        <div className="relative p-10 pb-20">
            <BgGrid />
            <div className="relative flex flex-wrap gap-9 justify-center items-center z-10 top-10">
                <Forecast />
                <Forecast />
                <Forecast />
                <Forecast />
                <Forecast />
                <Forecast />
            </div>
        </div>
    )
}