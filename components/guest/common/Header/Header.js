import React from 'react';
import Head from 'next/head';

const Header = ({
  showHeader
}) => (
  <>
    <Head>
      <link rel="stylesheet" href="/css/guest-styles.css" />
      <link rel="stylesheet" href="/css/plugins.css" />

      <script src="/js/main.js" />
      <script src="/js/plugins.js" />
    </Head>
    {
      showHeader && (
        <nav className="navbar navbar-expand-lg fixed-top bg-dark" data-bs-theme="dark">
          <div className="container">

            <a className="navbar-brand" href="index.html">
              <img src="/images/logo.svg" alt="" width="165" />
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <div className="navbar-toggler-icon">
                <span />
                <span />
                <span />
              </div>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
              <div className="navbar-content-inner ms-lg-auto d-flex flex-column flex-lg-row align-lg-center gap-4 gap-lg-10 p-2 p-lg-0">
                <ul className="navbar-nav gap-lg-2 gap-xl-5">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/pricing">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/privacy-policy">Privacy Policy</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/contact">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/signup">Sign Up</a>
                  </li>
                </ul>
                <div className="">
                  <a href="/login" className="btn btn-outline-primary-dark">
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )
    }
  </>
);

export default Header;
