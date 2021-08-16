import React, { useContext } from "react"
import { Link } from "gatsby"
import { GlobalDispatchContext, GlobalStateContext } from "../context/GlobalContextProvider"

const Navbar = () => {
    const dispatch = useContext(GlobalDispatchContext)
    const state = useContext(GlobalStateContext)
  
    const handleToggle = () => {
      dispatch({ type: "TOGGLE_MENU" })
    }
  
    const handleToggleFalse = () => {
      setTimeout(() => {
        dispatch({ type: "TOGGLE_MENU_FALSE" })
      }, 100)
    }
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light p-0">
        <span className="navbar-toggler p-0 border-0 c-navbar-toggler" onClick={handleToggle} onKeyDown={handleToggle} role="button" tabIndex="0" id="navbarSideCollapse" aria-label="Toggle navigation">
          {!state.menu && <span className="navbar-toggler-icon"></span>}
          {state.menu && <span className="btn-close text-reset p-0" style={{ display: "block", width: "1.5em", height: "1.5em"}}></span>}
        </span>
        <div className={"navbar-collapse offcanvas-collapse "+(state.menu?'open':'')} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-0 mb-lg-0">
            <li className="nav-item">
              <Link to="/posts" onClick={handleToggleFalse} onKeyDown={handleToggleFalse} className="nav-link" activeClassName="active">blog </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" onClick={handleToggleFalse} onKeyDown={handleToggleFalse} className="nav-link" activeClassName="active" href="#">projects</Link>
            </li>
          </ul>
        </div>
        <Link to="/" onClick={handleToggleFalse} onKeyDown={handleToggleFalse} className="navbar-brand">zp4rker</Link>
      </nav>
    );
  }
  
  export default Navbar