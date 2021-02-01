require("./src/styles/main.css")

exports.onPreRouteUpdate = ({ location, prevLocation }) => {
    const from = prevLocation ? location.pathname : "external"
    const to = prevLocation ? prevLocation.pathname : location.pathname

    const direction = from.includes(to) ? "Right" : "Left"
    localStorage.slideDirection = direction
}