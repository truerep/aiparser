import Head from 'next/head';
import React from 'react';
import {
  Header
} from '../common';

const Contact = () => (
  <>
    <Head>
      <title>
        Reach Us
      </title>
    </Head>
    <div className="wrapper d-flex flex-column justify-between">

      <Header />

      <main className="flex-grow-1">

        <section className="py-10 py-lg-15 bg-striped" data-aos="fade-up-sm" data-aos-delay="50">
          <div className="container">
            <div className="text-center">
              <h3 className="text-white mb-2">Contact With Us</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-center fs-sm">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Contact</li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        <section className="py-15 pt-lg-30">
          <div className="container">
            <div className="row justify-center">
              <div className="col-lg-10">
                <div className="row row-cols-1 row-cols-md-2 gy-20 gx-lg-20">
                  <div className="col" data-aos="fade-up-sm" data-aos-delay="50">
                    <div className="text-center">
                      <div className="icon w-18 h-18 rounded-3 p-4 d-inline-flex align-center justify-center bg-primary-dark text-dark mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M18 6v.01M18 13l-3.5-5a4 4 0 1 1 7 0L18 13" />
                          <path d="M10.5 4.75 9 4 3 7v13l6-3 6 3 6-3v-2M9 4v13m6-2v5" />
                        </svg>
                      </div>
                      <h3 className="fw-medium mb-0">2464 Royal Ln. Mesa, New Jersey 45463</h3>
                    </div>
                  </div>
                  <div className="col" data-aos="fade-up-sm" data-aos-delay="100">
                    <div className="text-center">
                      <div className="icon w-18 h-18 rounded-3 p-4 d-inline-flex align-center justify-center bg-primary-dark text-dark mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2m10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6" />
                        </svg>
                      </div>
                      <h3 className="fw-medium mb-0">
                        (603) 555-0123-4422
                        {' '}
                        <br />
                        (600) 555-0124
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ratio ratio-16x9 rounded-4 overflow-hidden mt-18" data-aos="fade-up-sm" data-aos-delay="150">
              <iframe src="../../../../www.google.com/maps/embedd9af.html?pb=!1m18!1m12!1m3!1d43342.12379278494!2d-115.1832297027355!3d36.15626909390534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sen!2sbd!4v1681845950495!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>

            <div className="row justify-center mt-18" data-aos="fade-up-sm" data-aos-delay="50">
              <div className="col-lg-8 col-xl-6">
                <form className="vstack gap-8" id="contact-form" method="post" action="https://marveltheme.com/tf/html/genai-preview/assets/php/contact_email.php">
                  <div className="">
                    <label htmlFor="name" className="form-label fs-lg fw-medium mb-4"> Your name* </label>
                    <div className="input-group with-icon">
                      <span className="icon">
                        <svg
                          xmlns="../../../../www.w3.org/2000/svg.html"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx="12" cy="7" r="4" />
                          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                      </span>
                      <input type="text" id="name" name="name" className="form-control rounded-2" placeholder="What's your name?" required />
                    </div>
                  </div>
                  <div className="">
                    <label htmlFor="email" className="form-label fs-lg fw-medium mb-4">
                      Email Address*
                    </label>
                    <div className="input-group with-icon">
                      <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <g
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.2"
                          >
                            <path
                              d="M2.25 5.25a1.5 1.5 0 0 1 1.5-1.5h10.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-7.5Z"
                            />
                            <path d="M2.25 5.25 9 9.75l6.75-4.5" />
                          </g>
                        </svg>
                      </span>
                      <input type="email" id="email" name="email" className="form-control rounded-2" placeholder="Enter Your Email" required />
                    </div>
                  </div>
                  <div className="">
                    <label htmlFor="phone" className="form-label fs-lg fw-medium mb-4">
                      Phone Number
                    </label>
                    <div className="input-group with-icon">
                      <span className="icon">
                        <svg
                          xmlns="../../../../www.w3.org/2000/svg.html"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path
                            d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2m10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6"
                          />
                        </svg>
                      </span>
                      <input type="tel" id="phone" name="phone" className="form-control rounded-2" placeholder="Phone Number" />
                    </div>
                  </div>
                  <div className="">
                    <label htmlFor="message" className="form-label fs-lg fw-medium mb-4">
                      Your Message*
                    </label>
                    <textarea id="message" name="message" className="form-control rounded-2" placeholder="Write here your details message" rows="4" required />
                  </div>
                  <div className="">
                    <button type="submit" className="btn btn-primary-dark">Send Message</button>
                  </div>
                  <div className="status alert mb-0 d-none" />
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section py-10 py-lg-15" data-aos="fade-up-sm" data-aos-offset="150">
          <div className="container">
            <div className="rounded-5 border position-relative z-1 bg-dark-blue-4">
              <div className="animate-scale position-absolute w-full h-full z-n1">
                <img src="/images/shapes/blurry-shape-4.svg" alt="" className="bg-shape img-fluid" />
              </div>
              <div className="row justify-center">
                <div className="col-lg-10">
                  <div className="text-center pt-6 px-6 pt-md-10 px-md-10 pt-lg-18 px-lg-18">
                    <h2 className="mb-6 text-white">
                      Using
                      <span className="text-primary-dark">GenAI</span>
                      you can save hours each week creating long-form content.
                    </h2>
                    <a href="login.html" className="btn btn-primary-dark">Get Started Free</a>
                    <div className="cta-image-container mt-10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 90" className="text-primary-dark arrow-shape">
                        <path fill="currentColor" d="M3.724 2.303c8.095 4.54 13.968 13.648 16.408 22.434 2.336 8.415 2.426 20.276-5.705 25.79-2.961 2.01-7.092 2.24-8.781-1.444-1.571-3.422.29-7.096 3.683-8.452 9.162-3.663 16.334 8.02 18.234 15.324a30.563 30.563 0 0 1 .279 14.195c-.952 4.334-2.866 9.283-6.298 12.254-.494.427-1.3-.29-.971-.84 1.77-2.928 3.677-5.571 4.79-8.851 1.155-3.405 1.62-7.048 1.44-10.626-.358-7.103-3.568-15.745-10.125-19.354-3.476-1.912-10.316-1.353-10.055 3.973.107 2.158 1.647 4.035 3.933 3.81 2.086-.209 4.001-1.766 5.333-3.279 5.427-6.16 4.857-15.89 2.67-23.215a39.21 39.21 0 0 0-5.682-11.577c-2.69-3.76-6.017-6.61-9.592-9.472-.35-.277.039-.896.44-.67Z" />
                        <path fill="currentColor" d="M1.562.977c9.931 2.79 17.058 11.508 19.312 21.4 1.085 4.762 1.187 9.7.548 14.54-.653 4.937-1.854 10.549-4.949 14.589-2.156 2.82-7.305 5.961-10.266 2.388-2.608-3.142-2.18-9.094.45-12.093 2.945-3.356 8.048-2.969 11.491-.718 4.112 2.688 6.675 7.596 8.265 12.12 3.48 9.905 2.395 21.33-3.11 30.327-.527.858-1.947.203-1.423-.676 3.935-6.565 5.559-14.253 4.688-21.84-.443-3.864-1.552-7.677-3.306-11.147-2.011-3.973-5.078-8.396-9.854-8.994-5.273-.66-7.99 4.089-7.3 8.82.403 2.76 1.938 4.99 5.042 4.079 2.519-.74 4.35-3.051 5.51-5.296 3.708-7.194 4.563-16.802 3.066-24.658C17.848 13.969 11.217 4.92 1.373 1.995.736 1.812.917.797 1.563.977Z" />
                        <path fill="currentColor" d="M21.218 73.052c.375 2.062.446 4.204.634 6.29.088.987.18 1.975.266 2.964.04.457-.025 2.873.383 3.085.21.11 2.177-1.456 2.452-1.64l2.452-1.641c1.595-1.065 3.329-2.678 5.205-3.148.671-.169 1.174.542.746 1.106-.792 1.05-1.99 1.644-3.08 2.36-1.23.812-2.464 1.62-3.695 2.432-1.142.748-3.43 3.037-4.974 2.3-1.476-.7-.955-3.793-1.042-5.105-.198-2.945-.602-5.957-.531-8.906a.595.595 0 0 1 1.184-.097Z" />
                        <path fill="currentColor" d="M21.773 73.169c-.032 2.254-.679 4.55-.972 6.789-.338 2.597-.601 5.224-.564 7.844-.465-.225-.933-.454-1.398-.68a76.772 76.772 0 0 0 6.002-4.227c1.876-1.465 3.568-3.521 5.632-4.678.6-.336 1.581.26 1.137.983-1.181 1.924-3.415 3.456-5.165 4.844a64.808 64.808 0 0 1-6.607 4.574c-.694.421-1.465-.14-1.385-.91.27-2.565.462-5.128.849-7.683.348-2.297.616-4.895 1.59-7.019.19-.398.887-.308.88.163Z" />
                        <path fill="currentColor" d="M22.85 71.546c-.873 5.764-1.778 11.525-2.588 17.298-.462-.304-.922-.605-1.384-.91 2.439-1.254 4.864-2.527 7.207-3.954 2.158-1.317 4.212-3.127 6.536-4.109.733-.31 1.331.688.841 1.25-1.713 1.972-4.396 3.318-6.619 4.634-2.326 1.378-4.712 2.663-7.172 3.78-.633.287-1.294-.395-1.174-1.015 1.098-5.725 2.104-11.464 3.137-17.2.137-.79 1.337-.563 1.215.226Z" />
                      </svg>
                      <div className="cta-img rounded-top-4">
                        <img src="/images/screens/screen-1.jpg" alt="" className="img-fluid w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="footer bg-striped pt-10 pt-lg-15">
        <div className="container">
          <div className="row g-10">
            <div className="col-lg-9 col-xl-8 order-lg-2">
              <div className="row g-6">
                <div className="col-md-4 col-lg-4">
                  <div className="footer-widget text-center text-md-start">
                    <h6 className="text-white mb-2">Gen AI</h6>
                    <ul className="link-list list-unstyled mb-0">
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="login.html">Sign in</a>
                      </li>
                      <li>
                        <a href="register.html">Register</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="footer-widget text-center text-md-start">
                    <h6 className="text-white mb-2">Use Cases</h6>
                    <ul className="link-list list-unstyled mb-0">
                      <li>
                        <a href="use-cases-details.html">AI writer</a>
                      </li>
                      <li>
                        <a href="use-cases-details.html">Businesses AI</a>
                      </li>
                      <li>
                        <a href="use-cases-details.html">AI Blog writer</a>
                      </li>
                      <li>
                        <a href="use-cases-details.html">AI Content Creator</a>
                      </li>
                      <li>
                        <a href="use-cases-details.html">Article write</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="footer-widget text-center text-md-start">
                    <h6 className="text-white mb-4">News & Update</h6>
                    <form action="#">
                      <div className="input-group">
                        <input type="email" className="form-control" placeholder="Enter your email" />
                        <button className="btn btn-primary-dark px-4" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4.031 8.917 15.477-4.334a.5.5 0 0 1 .616.617l-4.333 15.476a.5.5 0 0 1-.94.067l-3.248-7.382a.5.5 0 0 0-.256-.257L3.965 9.856a.5.5 0 0 1 .066-.94v0Z" />
                          </svg>
                        </button>
                      </div>
                    </form>
                    <ul className="list-unstyled d-flex flex-wrap align-center justify-center justify-md-start gap-3 social-list mb-0 mt-5">
                      <li>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="icon icon-tabler icon-tabler-brand-dribbble" viewBox="0 0 24 24">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="12" cy="12" r="9" />
                            <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />
                            <path d="M6.4 19c3.5-3.5 6-6.5 14.5-6.4M3.1 10.75c5 0 9.814-.38 15.314-5" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 6v6A3.75 3.75 0 0 1 12 15.75H6A3.75 3.75 0 0 1 2.25 12V6A3.75 3.75 0 0 1 6 2.25h6A3.75 3.75 0 0 1 15.75 6Z" />
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.25 15.75V9c0-1.641.375-3 3-3m-4.5 3.75h4.5" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 2.258s-1.514.894-2.355 1.147A3.36 3.36 0 0 0 9 5.655v.75a7.995 7.995 0 0 1-6.75-3.397s-3 6.75 3.75 9.75a8.73 8.73 0 0 1-5.25 1.5c6.75 3.75 15 0 15-8.625a3.34 3.34 0 0 0-.06-.623c.765-.754 1.56-2.752 1.56-2.752Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z" />
                            <path stroke="currentColor" strokeWidth="1.5" d="M2.25 12V6A3.75 3.75 0 0 1 6 2.25h6A3.75 3.75 0 0 1 15.75 6v6A3.75 3.75 0 0 1 12 15.75H6A3.75 3.75 0 0 1 2.25 12Z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 order-lg-1 me-auto">
              <div className="footer-widget text-center text-lg-start">
                <a href="#">
                  <img src="/images/logo.svg" alt="" className="img-fluid" width="135" />
                </a>
                <p className="fs-sm mb-0 mt-4">
                  A Magical Tool to Optimize you content for the first know who you're targeting. Identify your
                  target audience.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center py-6 mt-8">
            <p className="fs-sm mb-0">
              Copyright
              {' '}
              <span className="text-primary-dark">GenAI</span>
              . Design By Marvel_Theme
            </p>
          </div>
        </div>
      </footer>

    </div>
  </>
);

export default Contact;
