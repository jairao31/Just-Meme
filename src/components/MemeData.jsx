import React, { useEffect, useState } from "react";
import axios from "axios";
import Meme from "./Meme";

const MemeData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const getRandomMeme = async () => {
        try {
            const url = "https://meme-api.com/gimme";
            const { data } = await axios.get(url);
            setData(data);
            setLoading(false);
            return;
        } catch (error) {
            setLoading(false);
            setError("Failed to fetch random meme data");
        }
    };

    useEffect(() => {
        getRandomMeme();
    }, []);

    return (
        <>
            {data ? (
                <Meme memeData={data} />
            ) : loading ? (
                <div>Loading...</div>
            ) : (
                <div>{error}</div>
            )}
        </>
    );
};

export default MemeData;
