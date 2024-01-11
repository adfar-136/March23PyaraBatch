'use client'
import { useState } from "react";
function Summary({ formData }) {
    return (
        <div id="summary">
            <h2>Summary</h2>
            <p>Form Type: {formData.type}</p>
            <p>Age: {formData.age}</p>
            {formData.dcShows ? 
            (<p>DC Shows: {formData.dcShows}</p>)
            :(<p>Marvel Shows: {formData.marvelShows}</p>)}
            

            

        </div>
    );
}
export default Summary;