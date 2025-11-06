import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
    <div className="HomePage d-flex align-items-center justify-content-center min-vh-100">
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center"> 
            <div className="col "> 
                <div className="card mb-4 rounded-3 shadow-sm equal-card d-flex flex-column bg-dark bg-opacity-50 text-white"> 
                    <div className="card-header py-3"> 
                        <h4 className="my-0 fw-normal">Order</h4> 
                    </div> 
                    <div className="card-body"> 
                        <h1 className="card-title pricing-card-title">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hamburger-icon lucide-hamburger">
                                <path d="M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25"/>
                                <path d="M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2"/>
                                <path d="M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0"/>
                                <path d="m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"/>
                            </svg>
                        </h1> 
                        <ul className="list-unstyled mt-3 mb-4"> 
                            <li>Time for a bite</li> 
                            <li>Pick up your order at the next station</li>     
                        </ul> 
                        <Link to="/delivery">
                        <button type="button" className="w-100 btn btn-lg btn-outline-light">Order
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right mx-2 mb-1" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </button>    
                        </Link>
                    </div> 
                </div> 
            </div> 
            <div className="col"> 
                <div className="card mb-4 rounded-3 shadow-sm equal-card d-flex flex-column bg-dark bg-opacity-50 text-white"> 
                    <div className="card-header py-3"> 
                        <h4 className="my-0 fw-normal">Information</h4> 
                    </div> 
                    <div className="card-body"> 
                        <h1 className="card-title pricing-card-title">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark-icon lucide-landmark"><path d="M10 18v-7"/><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"/>
                                <path d="M14 18v-7"/><path d="M18 18v-7"/>
                                <path d="M3 22h18"/><path d="M6 18v-7"/>
                            </svg>
                        </h1> 
                        <ul className="list-unstyled mt-3 mb-4"> 
                            <li>Curious about a landmark?</li> 
                            <li>Get informed</li> 
                        </ul> 
                        <Link to="/info">
                        <button type="button" className="w-100 btn btn-lg btn-outline-light">Discover
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right mx-2 mb-1" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </button>    
                        </Link>
                    </div>
                </div> 
            </div> 
            <div className="col"> 
                <div className="card mb-4 rounded-3 shadow-sm equal-card d-flex flex-column bg-dark bg-opacity-50 text-white"> 
                    <div className="card-header py-3 "> 
                        <h4 className="my-0 fw-normal">GPS</h4> 
                    </div> 
                    <div className="card-body"> 
                        <h1 className="card-title pricing-card-title">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                            </svg>
                        </h1> 
                        <ul className="list-unstyled mt-3 mb-4"> 
                            <li>Never get lost</li> 
                            <li>Discover nearby landmarks and stores</li> 
                        </ul> 
                        <Link to="/gps">
                        <button type="button" className="w-100 btn btn-lg btn-outline-light">GPS
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-right mx-2 mb-1" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </button>    
                        </Link>
                    </div> 
                </div> 
            </div> 
        </div>
    </div>
    )
}

export default Home;