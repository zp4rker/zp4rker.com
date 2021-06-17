import React, { useContext } from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import { GlobalStateContext } from "../context/GlobalContextProvider"

const Content = ({ centerContent, showFooter, children }) => {
    const state = useContext(GlobalStateContext)
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 py-2 py-sm-5 d-flex d-lg-block align-items-center">
                        <div className="card w-100">
                            <div className={"sub-c-card "+(state.menu?'open':'')}>
                                <div className="card-head px-lg-4">
                                    <Navbar/>
                                </div>
                                <div className={"card-body px-4 px-lg-4 pb-4 " + (centerContent ? "d-flex justify-content-center align-items-center" : "")}>
                                    {/* Content */}
                                    <div className="content">
                                        {children}
                                    </div>
                                    {/* End Content */}
                                </div>
                                {showFooter ? (
                                    <div className="card-foot pb-3">
                                        <Footer/>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
  
export default Content