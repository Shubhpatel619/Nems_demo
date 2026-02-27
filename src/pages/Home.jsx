import React from 'react';
import studyImg from '../assets/study.jpg';
import studentImg from '../assets/studentsInClass.jpg'; // Reused or replace with a 'values' image
import sportsImg from '../assets/sports.jpg';

export default function Home() {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <div
                className="bg-primary text-white text-center py-5 shadow-sm"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div>
                    <h1 className="display-4 fw-bold">
                        Welcome to Navjeevan English Medium School
                    </h1>
                    <p className="lead">Nurturing Minds, Building Futures</p>
                </div>
            </div>

            <div className="container my-5">
                <div className="row mb-5">
                    <div className="col-md-8">
                        <h2>Leading with Excellence</h2>
                        <p className="text-muted">
                            At Navjeevan English Medium School, we believe in
                            providing a holistic education that balances academic
                            rigor, character development, and physical health.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 bg-light border rounded shadow-sm">
                            <h5>Quick Updates</h5>
                            <ul className="list-unstyled">
                                <li>📅 Admissions Open for 2026-27</li>
                                <li>🏆 Annual Sports Meet Next Week</li>
                                <li>🤝 Workshop on Value Education & Manners</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h3 className="text-center mb-4">Our Core Pillars</h3>
                <div className="row g-4">
                    {/* Pillar 1: Academic Excellence */}
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0 text-center">
                            <img src={studyImg} className="card-img-top" alt="Academics" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold text-primary">
                                    Academic Excellence
                                </h5>
                                <p className="card-text text-muted">
                                    Our curriculum fosters critical thinking, curiosity, and a deep love for learning through modern teaching methods.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Pillar 2: Character & Etiquette (Behaviour & Manners) */}
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0 text-center">
                            {/* Tip: Use an image showing students interacting respectfully */}
                            <img src={studentImg} className="card-img-top" alt="Character and Manners" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold text-success">
                                    Character & Etiquette
                                </h5>
                                <p className="card-text text-muted">
                                    We prioritize manners, discipline, and social responsibility, ensuring students grow into respectful and ethical individuals.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Pillar 3: Sports & Physical Growth */}
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0 text-center">
                            <img src={sportsImg} className="card-img-top" alt="Sports" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold text-warning">
                                    Sports & Physical Growth
                                </h5>
                                <p className="card-text text-muted">
                                    Developing teamwork, resilience, and health through diverse athletic programs and active physical education.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
