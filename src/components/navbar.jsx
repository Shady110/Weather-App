import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg rounded-5 px-5 " style={{backgroundColor : '#3A4350'}}>
                <div class="container-fluid">
                    <Link class="navbar-brand text-white" to="/"><i  className="fa-solid fa-cloud " style={{color: "#ffffff"}}/></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <Link class="nav-link text-secondary fw-medium fs-4" aria-current="page" to="/">Home</Link>
                            </div>
                    </div>
                </div>
            </nav>
            

        </>
    );
}

export default Navbar;