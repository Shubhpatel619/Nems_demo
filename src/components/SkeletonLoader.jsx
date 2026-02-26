import React from "react";

export default function SkeletonLoader() {
    return (
        <div className="container py-5">
            <div className="placeholder-glow mb-4">
                <span className="placeholder col-6"></span>
            </div>

            <div className="placeholder-glow mb-3">
                <span className="placeholder col-12"></span>
            </div>

            <div className="placeholder-glow mb-3">
                <span className="placeholder col-10"></span>
            </div>

            <div className="placeholder-glow mb-3">
                <span className="placeholder col-8"></span>
            </div>
        </div>
    );
}