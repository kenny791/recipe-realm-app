import React from "react"


const LoadingPage = () => {
    return (
        <>
            <div className="mh-100 d-flex justify-content-center align-items-center m-5 p-5" style={{height: "80vh"}}>
                <div className="spinner-grow text-success" style={{width: "3rem", height: "3rem", animationDuration: ".8s"}} role="status">
                {/* {/* Keep for accessibility */}
                <span className="visually-hidden">Loading...</span>
                </div>
            </div> 
        </>
    )
}

export default LoadingPage