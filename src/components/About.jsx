import React from 'react';

export default function About() {
    return (
        <div className="about-page">
            {/* Header Section */}
            <div className="bg-dark text-white text-center py-5 mt-5">
                <div className="container">
                    <h1 className="display-4">About Our School</h1>
                    <p className="lead">
                        Dedicated to Academic Excellence and Character Building since 1995
                    </p>
                </div>
            </div>

            <div className="container my-5">
                {/* Vision & Mission */}
                <div className="row align-items-center mb-5">
                    <div className="col-md-6">
                        <h2 className="text-primary">Our Vision & Mission</h2>
                        <p className="mt-3">
                            At <strong>Navjeevan English Medium School</strong>, our mission is
                            to empower students to become lifelong learners and responsible global citizens.
                        </p>
                        <p>
                            We envision a world where every child has the tools to innovate and lead with integrity.
                            Our curriculum follows the latest standards found on platforms like{' '}
                            <a href="https://ncert.nic.in" target="_blank" rel="noreferrer">NCERT</a> to ensure high academic quality.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img
                            src="https://images.unsplash.com/photo-1581092795366-7d8c8919fa7f"
                            alt="School Building"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                </div>

                {/* Values Section */}
                <div className="row text-center g-4">
                    <div className="col-md-4">
                        <div className="p-4 border-0 bg-light rounded shadow-sm">
                            <i className="bi bi-book-half display-5 text-primary"></i>
                            <h4 className="mt-3">Quality Education</h4>
                            <p className="text-muted">Small class sizes and personalized attention for every student.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 border-0 bg-light rounded shadow-sm">
                            <i className="bi bi-people-fill display-5 text-success"></i>
                            <h4 className="mt-3">Expert Faculty</h4>
                            <p className="text-muted">Highly qualified teachers committed to modern pedagogical methods.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 border-0 bg-light rounded shadow-sm">
                            <i className="bi bi-trophy-fill display-5 text-warning"></i>
                            <h4 className="mt-3">Rich Heritage</h4>
                            <p className="text-muted">Over two decades of producing top-tier academic results.</p>
                        </div>
                    </div>
                </div>

                {/* Principal's Message */}
                <div className="mt-5 p-5 bg-primary text-white rounded">
                    <div className="row">
                        <div className="col-md-2 text-center">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Principal"
                                className="rounded-circle border border-3 mb-3"
                            />
                        </div>
                        <div className="col-md-10">
                            <h3>Principal's Message</h3>
                            <blockquote className="blockquote">
                                <p>
                                    "Education is the most powerful weapon which you can use to change the world.
                                    At Navjeevan, we don't just teach; we inspire."
                                </p>
                                <footer className="blockquote-footer text-white-50">
                                    Dr. S. Sharma, <cite title="Source Title">Principal</cite>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}