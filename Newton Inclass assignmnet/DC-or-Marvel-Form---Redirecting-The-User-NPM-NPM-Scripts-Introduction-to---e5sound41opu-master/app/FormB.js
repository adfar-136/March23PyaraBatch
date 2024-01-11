'use client'
import { useState, useEffect } from "react";
function FormB({ onSubmit, age }) {
    const [marvelShows, setMarvelShows] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({
            type:"Form B",
            age:age,
            dcShows:null,
            marvelShows:marvelShows
        })
    };
    return (
        <form id="marvel" onSubmit={handleSubmit}>
            <h2>Form B</h2>
            <label>
                Select Marvel Shows:
                <select onChange={(e)=>{setMarvelShows(e.target.value)}} >
                    <option value="">--Select--</option>
                    <option value="WandaVision">WandaVision</option>
                    <option value="The Falcon and the Winter Soldier">
                        The Falcon and the Winter Soldier
                    </option>
                    <option value="Loki">Loki</option>
                    <option value="What If...?">What If...?</option>
                </select>
            </label>
            <br />
            <label>
                Enter your age:
                <input type="number" value={age} disabled />
            </label>
            <br />
            <button id="submit-marvel" type="submit">Submit</button>
        </form>
    );
}
export default FormB;