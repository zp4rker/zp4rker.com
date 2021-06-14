import React from "react"

import LocalImage from "./local-image"

const Footer = () => {
    return (
        <div className="footer d-flex justify-content-center">
            <a href="https://github.com/zp4rker" id="github" target="_blank" rel="noreferrer"><LocalImage fileName="github.svg" alt="Github"/></a>
            <a href="https://github.com/zp4rker" id="discord" target="_blank" rel="noreferrer"><LocalImage fileName="discord.svg" alt="Discord"/></a>
            <a href="https://github.com/zp4rker" id="paypal" target="_blank" rel="noreferrer"><LocalImage fileName="paypal.svg" alt="PayPal"/></a>
        </div>
    )
}

export default Footer