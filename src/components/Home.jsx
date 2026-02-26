import React from 'react';
import studyImg from '../assets/study.jpg';
import libraryImg from '../assets/liberary.jpg';
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
                            rigor with creative exploration.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 bg-light border rounded shadow-sm">
                            <h5>Quick Updates</h5>
                            <ul className="list-unstyled">
                                <li>📅 Admissions Open for 2024-25</li>
                                <li>🏆 Annual Sports Meet Next Week</li>
                                <li>📚 New Library Wing Inaugurated</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h3 className="text-center mb-4">Our Core Pillars</h3>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img src={studyImg} className="card-img-top" alt="Academics" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold text-primary">
                                    Academic Excellence
                                </h5>
                                <p className="card-text">
                                    Our curriculum fosters critical thinking.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img src={libraryImg} className="card-img-top" alt="Library" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold text-success">
                                    Modern Facilities
                                </h5>
                                <p className="card-text">
                                    Smart classrooms and advanced labs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img src={sportsImg} className="card-img-top" alt="Sports" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold text-warning">
                                    Holistic Growth
                                </h5>
                                <p className="card-text">
                                    Focus on physical and creative development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}