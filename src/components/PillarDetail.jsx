import React from 'react';
import { useParams } from 'react-router-dom';

import certificate from '../assets/certificate.jpg';
import trophy from '../assets/trophy.jpg';
import faculty1 from '../assets/faculty1.jpg';
import faculty2 from '../assets/faculty2.jpg';
import qualityEducation from '../assets/qualityEducation.jpg';
import smartClass from '../assets/smartClass.jpg';



const pillarContent = {
    "quality-education": {
        title: "Quality Education",
        items: [
            { image: qualityEducation, text: "We provide an environment where curiosity is nurtured. Our small class sizes allow teachers to identify each student's strengths and weaknesses." },
            { image: smartClass, text: "Our digital classrooms integrate the latest technology to make complex concepts easy to understand for every age group." }

        ]
    },
    "expert-faculty": {
        title: "Expert Faculty",
        items: [
            { image: faculty1, text: "Dr. Amit Verma (Senior Science Faculty) - Ph.D. in Physics with over 15 years of experience in experimental teaching." },
            { image: faculty2, text: "Ms. Sarah Jones (Head of English) - Masters in English Literature, focusing on communication skills and creative writing." }
        ]
    },
    "rich-heritage": {
        title: "Rich Heritage",
        items: [
            { image: certificate, text: "Champions of the 2023 National Debate - Our students showcased exceptional critical thinking and public speaking skills." },
            { image: trophy, text: "Our campus holds a history of excellence, with over 50 trophies won in inter-school sports competitions over the last 10 years." }
        ]
    }
};

export default function PillarDetail() {
    const { type } = useParams();
    const data = pillarContent[type];

    if (!data) return <div className="container py-5"><h2>Content Not Found</h2></div>;

    return (
        <div className="container py-5">
            <h1 className="text-center mb-5 display-4 fw-bold">{data.title}</h1>
            {data.items.map((item, index) => (
                <div key={index} className={`row align-items-center mb-5 g-5 ${index % 2 !== 0 ? 'flex-md-row-reverse' : ''}`}>
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
