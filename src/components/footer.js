import React from "react"
import { Link } from "gatsby"

const Footer = () => {
    return (
        <div className="footer d-flex justify-content-center">
            <Link to="https://github.com/zp4rker" id="github" target="_blank"><img src="../images/github.svg" alt="Github"/></Link>
            <Link to="https://github.com/zp4rker" id="discord" target="_blank"><img src="../images/discord.svg" alt="Discord"/></Link>
            <Link to="https://github.com/zp4rker" id="paypal" target="_blank"><img src="../images/paypal.svg" alt="PayPal"/></Link>
        </div>
    )
}

export default Footer