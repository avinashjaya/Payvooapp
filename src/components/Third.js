import React from 'react'
import logo1 from '../images/modelogo.jpg'
function Third() {
    return (
        <div>

            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Accounts
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" style={{ height: "25rem", width: "38rem", marginLeft: "-30px" }}>
                        <div class="modal-body">
                            <center>
                                <img src={logo1} style={{ height: "150px," }} />
                                <h5 className="modalheading">Add $10 or more</h5>
                            </center>
                            <div className="d-flex justify-content-center">
                                <p className="modalpara lh-base">
                                    Before we hook up with an account,you need to add money.you
                                    can spend or withdraw this money later
                                </p>
                            </div>
                            <div className="row g-2 mt-2">
                                <div className="col-sm-6">
                                    <button type="submit" className="mb-3 rounded-pill" id="skipbtn">
                                        Skip
                                    </button>
                                </div>
                                <div className="col">
                                    <button
                                        type="submit"
                                        className="mb-3 rounded-pill"
                                        id="addmoneybtn"
                                    >
                                        Add Money
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Third
