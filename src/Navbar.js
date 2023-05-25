import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min';

const Navbar = () => {
  useEffect(() => {
    // Inicializar el componente de Bootstrap
    $('.navbar-toggler').on('click', function () {
      $(this).toggleClass('active');
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://www.churchofjesuschrist.org/?lang=eng">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="https://www.churchofjesuschrist.org/my-home/dashboard?lang=eng">Home</a>
            <a className="nav-link" href="https://www.churchofjesuschrist.org/temples/schedule/appointment?lang=eng">Features</a>
            <a className="nav-link" href="https://donations.churchofjesuschrist.org/">Pricing</a>
            <a className="nav-link disabled" href='https://directory.churchofjesuschrist.org/'>Disabled</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
