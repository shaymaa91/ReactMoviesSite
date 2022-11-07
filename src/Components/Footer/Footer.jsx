import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
    return (
        <>


            <footer className="py-5 px-5 border-top border-secondary border-5">
                <div className="container px-5 ">
                    <div className="row px-5">
                        <div className="col-3">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of whats new and exciting from us.</p>
                                <div className="d-flex w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>



        </>
    )
}
