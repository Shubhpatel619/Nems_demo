import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="about-page">
            {/* Header Section */}
            <div className="bg-dark text-white text-center py-5 mt-5">
                <div className="container">
                    <h1 className="display-4">About Our School</h1>
                    <p className="lead">Dedicated to Academic Excellence and Character Building since 1995</p>
                </div>
            </div>

            <div className="container my-5">
                {/* Vision & Mission */}
                <div className="row align-items-center mb-5">
                    <div className="col-md-6">
                        <h2 className="text-primary">Our Vision & Mission</h2>
                        <p className="mt-3">
                            At <strong>Navjeevan English Medium School</strong>, our mission is to empower students...
                        </p>
                        <p>
                            We envision a world where every child has the tools to innovate and lead with integrity.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src="https://images.unsplash.com" alt="School" className="img-fluid rounded shadow" />
                    </div>
                </div>

                {/* Updated Values Section with Links */}
                <div className="row text-center g-4">
                    <div className="col-md-4">
                        <Link to="/pillar/quality-education" className="text-decoration-none">
                            <div className="p-4 border-0 bg-light rounded shadow-sm h-100 border-hover">
                                <i className="bi bi-book-half display-5 text-primary"></i>
                                <h4 className="mt-3 text-dark">Quality Education</h4>
                                <p className="text-muted">Small class sizes and personalized attention for every student.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/pillar/expert-faculty" className="text-decoration-none">
                            <div className="p-4 border-0 bg-light rounded shadow-sm h-100 border-hover">
                                <i className="bi bi-people-fill display-5 text-success"></i>
                                <h4 className="mt-3 text-dark">Expert Faculty</h4>
                                <p className="text-muted">Highly qualified teachers committed to modern methods.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/pillar/rich-heritage" className="text-decoration-none">
                            <div className="p-4 border-0 bg-light rounded shadow-sm h-100 border-hover">
                                <i className="bi bi-trophy-fill display-5 text-warning"></i>
                                <h4 className="mt-3 text-dark">Rich Heritage</h4>
                                <p className="text-muted">Over two decades of producing top-tier academic results.</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Principal's Message */}
                <div className="mt-5 p-5 bg-primary text-white rounded">
                    <div className="row">
                        <div className="col-md-2 text-center">
                            <img src="https://via.placeholder.com" alt="Principal" className="rounded-circle border border-3 mb-3" />
                        </div>
                        <div className="col-md-10">
                            <h3>Principal's Message</h3>
                            <blockquote className="blockquote">
                                <p>"Education is the most powerful weapon... At Navjeevan, we inspire."</p>
                                <footer className="blockquote-footer text-white-50">Dr. S. Sharma, Principal</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
