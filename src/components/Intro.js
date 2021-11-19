import React from "react"
import Help from "components/Help"

const HelloWorld = () => (
  <div>
    <h2>Attribute Value-Object</h2>
    <h3>A tid bit different CSS convention</h3>
    <br />
    <p>
      If you missed the keynote, the help marks will provide info about the slide 😉
    </p>
    <br />
    <p>
      Like this 👉 <Help>Hi!</Help>
    </p>
  </div>
)

export default HelloWorld
