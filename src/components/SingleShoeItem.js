import { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react/cjs/react.development';
import {  apiKey, hostName } from './../consts'
import Image from './Image'

const SingleShoeItem = () => {
    const { id } = useParams()
    const [shoe, setShoe] = useState(null)
    
    

    useEffect(() => {
        
        fetch(`https://v1-sneakers.p.rapidapi.com/v1/sneakers/${id}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": hostName,
                "x-rapidapi-key": apiKey
            },
        })
        .then((res) => res.json())
        .then((data) => {
            setShoe(data.results[0]);
        });
    }, [id])

    console.log(shoe)

    if(!shoe) {
        return "Loading..."
    }



    return (<div>
        <h2>
            {shoe.shoe}
        </h2>
        <Image
        src={shoe.media.imageUrl}
        alt="url"
        width={300}
        height={300}
        />
    </div>)
}


export default SingleShoeItem