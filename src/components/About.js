// import React, { useState } from 'react'

// // Named the function 'About' to fix the ESLint anonymous function warning
// export default function About() {

//     // Initial state set to Light Mode
//     const [myStyle, setMyStyle] = useState({
//         color: 'black',
//         backgroundColor: 'white'
//     })

//     const [btnText, setBtnText] = useState("Enable Dark Mode")
//     const [btnClass, setBtnClass] = useState("btn-dark");

//     // Added 'const' to define the function and fixed the 'no-undef' error
//     const toggleStyle = () => {
//         if (myStyle.color === 'black') {
//             setMyStyle({
//                 color: 'white',
//                 backgroundColor: 'black',
//             })
//             setBtnText("Enable Light Mode")
//             setBtnClass("btn-light");
//         } else {
//             setMyStyle({
//                 color: 'black',
//                 backgroundColor: 'white'
//             })
//             setBtnText("Enable Dark Mode")
//             setBtnClass("btn-dark");
//         }
//     }

//     return (
//         <div className='container' style={myStyle}>
//             <h1 className="my-3">About Us</h1>
//             <div className="accordion" id="accordionExample">
//                 <div className="accordion-item">
//                     <h2 className="accordion-header">
//                         <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                             Accordion Item #1
//                         </button>
//                     </h2>
//                     <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
//                         <div className="accordion-body" style={myStyle}>
//                             <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
//                         </div>
//                     </div>
//                 </div>
//                 <div className="accordion-item">
//                     <h2 className="accordion-header">
//                         <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                             Accordion Item #2
//                         </button>
//                     </h2>
//                     <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                         <div className="accordion-body" style={myStyle}>
//                             <strong>This is the second item's accordion body.</strong> It is hidden by default until activated.
//                         </div>
//                     </div>
//                 </div>
//                 <div className="accordion-item">
//                     <h2 className="accordion-header">
//                         <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                             Accordion Item #3
//                         </button>
//                     </h2>
//                     <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                         <div className="accordion-body" style={myStyle}>
//                             <strong>This is the third item's accordion body.</strong> It is hidden by default until activated.
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="container my-3">
//                 {/* Changed text to {btnText} so it updates live */}
//                 <button onClick={toggleStyle} type="button" className={`btn ${btnClass}`}>{btnText}</button>
//             </div>
//         </div>
//     )
// }











import React from 'react';
import AnimatedPage from './AnimatedPage';

export default function About() {
    return (
        <AnimatedPage>
            <div className="about-page">
                {/* Header Section */}
                <div className="bg-dark text-white text-center py-5 mt-5">
                    <div className="container">
                        <h1 className="display-4">About Our School</h1>
                        <p className="lead">Dedicated to Academic Excellence and Character Building since 1995</p>
                    </div>
                </div>

                <div className="container my-5">
                    <div className="row align-items-center mb-5">
                        <div className="col-md-6">
                            <h2 className="text-primary">Our Vision & Mission</h2>
                            <p className="mt-3">
                                At <strong>Navjeevan English Medium School</strong>, our mission is to empower students
                                to become lifelong learners and responsible global citizens. We strive to provide a
                                safe, inclusive, and challenging environment that sparks curiosity.
                            </p>
                            <p>
                                We envision a world where every child has the tools to innovate and lead with
                                integrity. Our curriculum follows the latest standards found on platforms like
                                [NCERT](https://ncert.nic.in) to ensure high academic quality.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src="https://images.unsplash.com"
                                alt="School Building"
                                className="img-fluid rounded shadow" />
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
                                <img src="https://via.placeholder.com" alt="Principal" className="rounded-circle border border-3 mb-3" />
                            </div>
                            <div className="col-md-10">
                                <h3>Principal's Message</h3>
                                <blockquote className="blockquote">
                                    <p>"Education is the most powerful weapon which you can use to change the world. At Navjeevan, we don't just teach; we inspire."</p>
                                    <footer className="blockquote-footer text-white-50">Dr. S. Sharma, <cite title="Source Title">Principal</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
}
