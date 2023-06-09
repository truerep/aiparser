import React from 'react';
import Head from 'next/head';
import {
  Header
} from '../common';

const Login = () => (
  <div className="wrapper d-flex flex-column justify-between">
    <Header
      showHeader="false"
    />
    <Head>
      <title>Login</title>
    </Head>
    <main className="flex-grow-1">
      <section className="account-section login-page py-6 h-full">
        <div className="container-fluid h-full">
          <div className="row h-full">
            <div className="col-lg-6 d-none d-lg-block" data-aos="fade-up-sm" data-aos-delay="50">
              <div className="bg-dark-blue-4 border rounded-4 h-full p-6 p-md-20 text-center d-flex flex-column justify-center">
                <h2 className="text-white mb-12">
                  Unlock the Power of
                  {' '}
                  <br className="d-none d-xl-block" />
                  <span className="text-primary-dark">GenAI</span>
                  {' '}
                  Copywriting Tool
                </h2>
                <img src="/images/screens/screen-5.png" alt="" className="img-fluid w-full" />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up-sm" data-aos-delay="100">
              <div className="close-btn">
                <a href="/" className="icon bg-gradient-3 text-white w-12 h-12 rounded p-3 border border-white border-opacity-10 d-flex align-center justify-center ms-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </g>
                  </svg>
                </a>
              </div>
              <div className="account-wrapper h-full d-flex flex-column justify-center">
                <div className="text-center">
                  <a href="#">
                    <img src="/images/logo.svg" alt="" className="img-fluid" width="165" />
                  </a>
                  <div className="vstack gap-4 mt-10">
                    <button type="button" className="btn account-btn py-4">
                      <img src="/images/icons/google.svg" alt="" width="24" className="img-fluid icon" />
                      <span>Continue With Google</span>
                    </button>
                    <button type="button" className="btn account-btn py-4">
                      <img src="/images/icons/apple.svg" alt="" width="24" className="img-fluid icon" />
                      <span>Continue With Apple</span>
                    </button>
                  </div>

                  <div className="divider-with-text my-10">
                    <span>Or sign in with email</span>
                  </div>

                  <form action="#" className="vstack gap-4">
                    <div className="text-start">
                      <div className="input-group with-icon">
                        <span className="icon">
                          <svg
                            xmlns="../../../../www.w3.org/2000/svg.html"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
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
                        <input type="email" className="form-control rounded-2 py-4" placeholder="Enter Your Email" />
                      </div>
                    </div>
                    <div className="text-start">
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
                              d="M12 3a12 12 0 0 0 8.5 3A12 12 0 0 1 12 21 12 12 0 0 1 3.5 6 12 12 0 0 0 12 3"
                            />
                            <circle cx="12" cy="11" r="1" />
                            <path d="M12 12v2.5" />
                          </svg>
                        </span>
                        <input type="password" className="form-control rounded-2 py-4" placeholder="Password" />
                      </div>
                      <div className="form-text mt-2">
                        <a href="/reset-password" className="text-decoration-none">Forgot Password?</a>
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary-dark w-full py-4">
                        Sign In with GenAI
                      </button>
                    </div>
                    <div className="text-center">
                      <p>
                        Don't have an account?
                        <a href="/signup" className="text-decoration-none">Sign Up for Free</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default Login;
