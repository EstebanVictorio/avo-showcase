import React from "react"
import { RoughNotation } from "react-rough-notation"

const AVOHighlightExample = () => {
  const wrapperReplace = 'data-wrapper="container"'
  const errorReplace = "data-status={error ? 'error' : 'ok'}"
  const contentReplace = 'data-content="fluid"'
  const shadowReplace = 'data-shadow="blue"'
  const textAlignReplace = 'data-text-align="right"'
  const colorReplace = 'data-color="white"'
  const bgColorReplace = 'data-bg-color="red"'

  return (
    <pre className="language-html">
        {'<div>\n'}
        {'  <figure css={styles} \n    '}
        <RoughNotation show type="box" color="blue">{wrapperReplace}</RoughNotation>{'\n\n    '}
        <RoughNotation show type="box" color="blue">{errorReplace}</RoughNotation>{'\n\n    '}
        <RoughNotation show type="box" color="blue">{contentReplace}</RoughNotation>{'\n\n    '}
        <RoughNotation show type="box" color="blue">{shadowReplace}</RoughNotation>{'\n\n  '}
        {'>\n  '}
        {'  <img data-wrapper="img" src={error ? "" : "https://via.placeholder.com/400x200"} alt="Image not found"/>\n  '}
        {'  <figcaption'}{' \n      '}
        <RoughNotation show type="box" color="blue">{textAlignReplace}</RoughNotation>{'\n\n      '}
        <RoughNotation show type="box" color="blue">{colorReplace}</RoughNotation>{'\n\n      '}
        <RoughNotation show type="box" color="blue">{bgColorReplace}</RoughNotation>{'\n\n    '}
        {'>\n  '}
        {'    A placeholder image\n  '}
        {'  </figcaption>\n  '}
        {'</figure>\n  '}
        {'<p>Toggle error</p>\n  '}
        {'<Switch onChange={handleErrorChange} checked={error} checkedIcon={false} uncheckedIcon={false}/>\n  '}
        {'{error ? "🙊" : "✅"}\n'}
        {'</div>\n'}
    </pre>
  )
}

export default AVOHighlightExample
