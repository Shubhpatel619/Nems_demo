import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="mt-5">
            {/* 1. The Main Footer - This scrolls naturally with the page */}
            <div className="bg-dark text-white pt-5 pb-5">
                <div className="container pb-5"> {/* Added extra padding-bottom so content isn't hidden by the bar */}
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <h5 className="text-primary fw-bold">Navjeevan School</h5>
                            <p>Nurturing minds and building futures with excellence since 1995.</p>
                        </div>
                        <div className="col-md-6 mb-4 text-md-end">
                            <h5 className="text-primary fw-bold">Contact Info</h5>
                            <p className="mb-0">📍 123 School Lane, City</p>
                            <p>📞 +91 9876543210</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. The Persistent Copyright Bar - Fixed at the very bottom */}
            <div className="fixed-bottom bg-black text-white py-3 text-center shadow-lg" style={{ zIndex: 1030 }}>
                <div className="container">
                    <p className="mb-0 small">
                        © 2024 Navjeevan English Medium School. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
