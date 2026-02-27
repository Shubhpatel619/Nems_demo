import React from 'react';
import { useParams } from 'react-router-dom';


export default function PillarDetail() {
    const { type } = useParams();
    const data = pillarContent[type];

    if (!data) return <div className="container py-5"><h2>Content Not Found</h2></div>;

    return (
        <div className="container py-5">
            <h1 className="text-center mb-5 display-4 fw-bold">{data.title}</h1>
            {data.items.map((item, index) => (
                <div key={index} className="row align-items-center mb-5 g-5">
                    <div className="col-md-5">
                        <img src={item.image} alt="Detail" className="img-fluid rounded shadow-lg w-100" />
                    </div>
                    <div className="col-md-7">
                        <p className="fs-4 text-muted leading-relaxed">{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
