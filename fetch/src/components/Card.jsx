import React from "react";
import Button from "./button";
import useAPI from "../hooks/useAPI";

function Card() {

    const { data, fetchData } = useAPI();

    const getDetails = () => {
        fetchData()
    }

    return ( 

        <div className="bg-red-100 w-full h-full m-10 p-20 rounded-xl items-center shadow-lg">
            <Button change={getDetails}/>
            {data && (<p className="text-bold text-red-700 ">Name: {data.name}</p>)}
            {data && (<p className="text-bold text-red-700 ">Username: {data.login}</p>)}
            {data && (<p className="text-bold text-red-700 ">Public Repos: {data.public_repos}</p>)}
            {data && (<p className="text-bold text-red-700 ">Followers: {data.followers}</p>)}
            {data && (<img src={data.avatar_url} alt={data.name} className="w-20 h-20 rounded-full mt-2" />)}
        </div>
    )
}

export default Card;