import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="HomePage d-flex align-items-center justify-content-center min-vh-100">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center text-center">

          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm equal-card d-flex flex-column bg-dark bg-opacity-50 text-white h-100">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Order</h4>
              </div>
              <div className="card-body d-flex flex-column">
                <h1 className="card-title pricing-card-title">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-cup-hot" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5M2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175"/>
                    <path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8"/>
                  </svg>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Time for a drink</li>
                  <li>Pick up your order at the next station</li>
                </ul>
                <div className="mt-auto">
                  <Link to="/delivery">
                    <button type="button" className="w-100 btn btn-lg btn-outline-light">
                      Order
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-right mx-2 mb-1" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div> 
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm equal-card d-flex flex-column bg-dark bg-opacity-50 text-white h-100">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Information</h4>
              </div>
              <div className="card-body d-flex flex-column">
                <h1 className="card-title pricing-card-title">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-landmark-icon lucide-landmark">
                    <path d="M10 18v-7" />
                    <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z" />
                    <path d="M14 18v-7" />
                    <path d="M18 18v-7" />
                    <path d="M3 22h18" />
                    <path d="M6 18v-7" />
                  </svg>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Curious about a landmark?</li>
                  <li>Get informed</li>
                </ul>
                <div className="mt-auto">
                  <Link to="/info">
                    <button type="button" className="w-100 btn btn-lg btn-outline-light">
                      Discover
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-right mx-2 mb-1" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm equal-card d-flex flex-column bg-dark bg-opacity-50 text-white h-100">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">GPS</h4>
              </div>
              <div className="card-body d-flex flex-column">
                <h1 className="card-title pricing-card-title">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Never get lost</li>
                  <li>Discover nearby landmarks and stores</li>
                </ul>
                <div className="mt-auto">
                  <Link to="/gps">
                    <button type="button" className="w-100 btn btn-lg btn-outline-light">
                      GPS
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-right mx-2 mb-1" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm equal-card d-flex flex-column bg-dark bg-opacity-50 text-white h-100">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Vacuum</h4>
              </div>
              <div className="card-body d-flex flex-column">
                <h1 className="card-title pricing-card-title">
                  <img id="vacuumIcon" src={vacuumpng} alt="Vacuum Icon" />
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Keep the bus clean</li>
                  <li>Cleaning of your choice</li>
                </ul>
                <div className="mt-auto">
                  <Link to="/vacuum">
                    <button type="button" className="w-100 btn btn-lg btn-outline-light">
                      Vacuum
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-right mx-2 mb-1" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
