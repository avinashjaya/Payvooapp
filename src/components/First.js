import React from 'react'
import logo from '../images/payvoologo.png';
import lion from '../images/lion.jpg';



function First() {
    return (
        <div>
            {/* <nav className="navbar bg-light">
                <div className="container ">
                    <a className="navbar-brand" href="#">

                        <div class="row">
                            <div class="col-sm-10 ">
                                <img src={logo} width="120" height="32" />
                            </div>
                            <div class="col-sm-2">
                                <i className="fa fa-bell mt-2 me-2" style={{ fontSize: "25px" }} />
                            </div>
                        </div>
                    </a>
                </div>
            </nav> */}

            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <img src={logo} width="120" height="32" />
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <i className="fa fa-bell mt-2 me-2" style={{ fontSize: "25px" }} />
                            <div class="dropdown">
                                <img src={lion} width="30" height="30" className='rounded-pill ms-4' />
                                <button class="btn btn-ouline-light dropdown-toggle border border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Avinash Jaya
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>

            <div className="row">
                <div className="col-sm-2">
                    <div className="sidebar">
                        <a href="#Accounts"><i className='fas fa-wallet me-2' ></i> Accounts</a>
                        <a href="#Analytics"><i className='fas fa-chart-bar me-2'></i> Analytics</a>
                        <a href="#Payments"><i className='fas fa-coins me-2'></i> Payments</a>
                        <a href="#Cards"><i className='far fa-credit-card me-2'></i> Cards</a>
                        <a href="#Settings"><i className='fas fa-cogs me-2' ></i> Settings</a>
                    </div>
                </div>
                <div className="col-sm-10" style={{ marginLeft: '290px' }}>
                    <div>
                        <h1 className='fs-6  '><i className='fas fa-arrow-left me-3'></i>Add Money</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item "><a href="#" className='text-decoration-none text-dark text-muted'>Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Library</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3 me-3 ">
                    <div className="card " style={{ height: "34rem", width: "400px", marginLeft: "275px" }}>
                        <div className="card-body">
                            <h5 className="card-title">How would you like to add money?</h5><br />
                            <p href='#' className='ms-3 mb-0 cardparagraph' ><i className='fas fa-plus-circle me-3' style={{ fontSize: "22px" }}></i>Add debit or credit card</p><hr></hr>
                            <p className="ms-3 mb-0 cardparagraph"><i className='fas fa-university me-3' style={{ fontSize: "22px" }}></i>Transfer to your PayVoo account</p><hr></hr>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{ height: "34rem", width: "400px", marginLeft: "275px" }}>
                        <div className="card-body">
                            <form class="row g-3">
                                <h6 class="card-title ms-1 mb-2">Enter Card details</h6>
                                <h6 class="card-subtitle mb-2 text-muted cardsubtitle ms-1"><i class='fas fa-unlock me-2'></i>Card details are saved successfully</h6>
                                <div class="col-md-12">
                                    <input type="email" placeholder="Name on card" class="form-control" id="inputEmail4" />
                                </div>
                                <div class="col-md-12">
                                    <input type="password" placeholder="12-19 Digit card Number" class="form-control" id="inputPassword4" />
                                </div>


                                <div class="col-md-9">
                                    <input type="text" placeholder="Expiry Card" class="form-control" id="inputZip" />
                                </div>

                                <div class="col-md-3">
                                    <input type="text" placeholder="cvv" class="form-control" id="inputZip" />
                                </div>

                                <div class="row g-2 mt-3 ms-1">
                                    <div class="col-sm-6">
                                        <button type="submit" class="mb-3 rounded-pill cancelbtn">
                                            Cancel
                                        </button>
                                    </div>
                                    <div class="col-sm-6">
                                        <button
                                            type="submit"
                                            class="mb-3 rounded-pill savebtn"
                                        >
                                            Save Card
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default First
