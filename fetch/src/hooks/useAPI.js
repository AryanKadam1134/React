import React, { useState } from "react";

function useAPI() {
    const [data, setData] = useState("");

    const fetchData = async () => {

        try {
            const response = await fetch("https://api.github.com/users/AryanKadam1134");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
        
            const resData = await response.json();
            setData(resData);   
        }
        catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        }
    }

    return { data, fetchData };

}

export default useAPI;