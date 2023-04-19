import React, { useEffect, useState } from 'react'

const Ajax = () => {
    const [images, setimages] = useState(null)

    const getImage = async () => {
        const res = await fetch("https://picsum.photos/v2/list")
        const data = await res.json();
        setimages(data);
        // console.log(data);
    }

    // lifycycle of Component
    useEffect(() => {
        getImage()
    }, []);

    // console.log(images);


    return (
        <>
            <h1>Gallery</h1>
            {images ? JSON.stringify(images) : "Loading...."}
            <button onClick={getImage}>getImage</button>
        </>
    )
}

export default Ajax