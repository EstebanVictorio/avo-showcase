import React from "react"
import { RoughNotation } from "react-rough-notation"

const BEMTradeoffHighlightExample = () => {
  const wrapperReplace = 'class="wrapper wrapper--ok wrapper--fluid-content wrapper--shadow"'
  const captionReplace = 'class="wrapper__caption wrapper__caption--right wrapper__caption--white wrapper__caption--bg-red"'

  return (
    <pre className="language-html">
      {"<figure "}<RoughNotation show type="box" color="blue">{wrapperReplace}</RoughNotation><br />
      {'  <img class="wrapper__img" src="https://via.placeholder.com/150">'}<br />
      {'  <figcaption '}<RoughNotation show type="box" color="blue">{captionReplace}</RoughNotation><br />
            {'  '}A placeholder image<br/>
      {'  </figcaption>'}<br/>
        {'</figure>'}
    </pre>
  )
}

export default BEMTradeoffHighlightExample
