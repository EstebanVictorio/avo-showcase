import React from "react"

import { RoughNotation } from "react-rough-notation"

const Highlight = ({ children }) => (
  <RoughNotation type="circle" color="tomato">
    {children}
  </RoughNotation>
)

export default Highlight
