import React, { useEffect, useState } from 'react'

const Gallery = () => {
    const [images, setimages] = useState(null);
    const [pagecount, setpagecount] = useState(0);

    const getImages = async () => {
        const res = await fetch(
            `https://picsum.photos/v2/list?page=${pagecount}&limit=10`
        );
        const data = await res.json();
        setimages(data)
        // console.log(data);
    }

    useEffect(() => {
        getImages()
    }, [pagecount])

    return (
        <>
            <h1 className='text-center mb-5'>Gallery App</h1>
            <div className='container d-flex flex-wrap justify-content-center'>
                {images ? (images.map((img, idx) => (
                    <div key={img.id} className='card me-3 mb-3'>
                        <img height={200} width={200} src={img.download_url} alt='error' />
                        <h4>{img.author}</h4>
                    </div>
                ))) : "...loading"}
            </div>

            <div className='container d-flex justify-content-between align-items-center p-4'>
                <button onClick={() => setpagecount(pagecount - 1)} className='btn btn-danger px-4'>PREV</button>
                <button onClick={() => setpagecount(pagecount + 1)} className='btn btn-success px-4'>NEXT</button>
            </div>
        </>
    )
};

export default Gallery