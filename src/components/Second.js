import React from 'react'

function Second() {
    return (
        <div>
            <p>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                    Toggle width collapse
                </button>
            </p>
            <div >
                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                    <div className="card card-body" >
                        This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second
