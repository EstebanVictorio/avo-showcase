/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import Switch from "react-switch";
import { useState } from "react"

const styles = css`
  &.wrapper {
    padding: 1rem;
    width: 400px;
    height: 200px;
  }

  .wrapper__img {
    width: 100%;
    height: 100%;
  }

  &.ok {
    border: 4px solid green;
  }

  &.error {
    border: 4px solid red;
  }

  &.fluid-content {
    padding: 0;
  }

  &.shadow {
    box-shadow: 1px -4px 10px 10px blue;
  }

  .text-right {
    text-align: right;
  }

  .white {
    color: whitesmoke;
  }

  .bg-red {
    background-color: tomato;
  }
`

const Example = () => {
  const [error, setError] = useState(false)
  const handleErrorChange = () => {
    setError(!error)
  }

  return (
    <div>
      <figure css={styles} className={`wrapper fluid-content shadow ${error ? 'error' : 'ok'}`}>
        <img className="wrapper__img" src={error ? '' : 'https://via.placeholder.com/400x200'} alt="Image not found"/>
        <figcaption className="text-right white bg-red">
          A placeholder image
        </figcaption>
      </figure>
      <p>Toggle error</p>
      <Switch onChange={handleErrorChange} checked={error} checkedIcon={false} uncheckedIcon={false}/>
      {error ? '🙊' : '✅'}
    </div>
  )
}

export default Example