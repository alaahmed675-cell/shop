
import {  GoChevronDown } from 'react-icons/go'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-white border-bottom py-3 sticky-top">
                <div className="container px-lg-5 d-flex justify-content-between align-items-center">

                    <div className="d-flex align-items-center gap-2">
                        <img src="./img/Group.png" alt="logo" style={{ width: "32px" }} />
                        <h1 className="m-0 fs-3 fw-bold text-success-emphasis" style={{ color: "#003d29" }}>
                            Ecobazar
                        </h1>
                    </div>

                    <form className="d-flex flex-grow-1 mx-4" style={{ maxWidth: "500px" }}>
                        <div className="input-group border rounded-2 overflow-hidden">
                            <span className="input-group-text bg-transparent border-0 pe-1">
                                <i className="bi bi-search text-muted"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control border-0 shadow-none"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-success px-4 fw-medium border-0" type="submit">
                                Search
                            </button>
                        </div>
                    </form>


                    <div className="d-flex align-items-center gap-3">

                        <div className="position-relative cursor-pointer me-2">
                            <img src="./img/Heart.png" alt="logo" style={{ width: "32px" }} />


                        </div>

                        <div className="vr opacity-25" style={{ height: "30px" }}></div>


                        <div className="d-flex align-items-center gap-2 ms-2">
                            <div className="position-relative">
                                <img src="./img/Cart (1).png" alt="logo" style={{ width: "32px" }} />
                            </div>
                            <div className="d-none d-md-block ms-1">
                                <p className="m-0 text-muted" style={{ fontSize: "12px" }}>Shopping cart:</p>
                                <p className="m-0 fw-bold" style={{ fontSize: "14px" }}>$57.00</p>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2">
                <div className="container px-lg-5 d-flex justify-content-between align-items-center">
                    <ul className="navbar-nav d-flex flex-row gap-4">
                        <li className="nav-item">
                            <a
                                className="nav-link active d-flex align-items-center gap-1 text-white"
                                href="#"

                            >
                                <span>Home</span>
                                <GoChevronDown size={14} className="mt-1" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link active d-flex align-items-center gap-1 "
                                to="./shop"

                            >
                                <span>Shop</span>
                                <GoChevronDown size={14} className="mt-1" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link active d-flex align-items-center gap-1"
                                href="#"

                            >
                                <span>Pages</span>
                                <GoChevronDown size={14} className="mt-1" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link active d-flex align-items-center gap-1 "
                                href="#"

                            >
                                <span>Blog</span>
                                <GoChevronDown size={14} className="mt-1" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>


                    <div className="d-flex align-items-center text-white gap-2">
                        <i className="bi bi-telephone"></i>
                        <img src="./img/PhoneCall 1.png" alt="logo" style={{ width: "32px" }} />
                        <span className="fw-medium">(219) 555-0114</span>


                    </div>

                </div>
            </nav>
        </>
    )
}