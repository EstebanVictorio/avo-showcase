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

  &.wrapper--ok {
    border: 4px solid green;
  }

  &.wrapper--error {
    border: 4px solid red;
  }

  &.wrapper--fluid-content {
    padding: 0;
  }

  &.wrapper--shadow {
    box-shadow: 1px -4px 10px 10px blue;
  }

  .wrapper__caption--right {
    text-align: right;
  }

  .wrapper__caption--red {
    color: tomato;
  }

  .wrapper__caption--white {
    color: whitesmoke;
  }

  .wrapper__caption--bg-red {
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
      <figure css={styles} className={`wrapper wrapper--${error ? 'error' : 'ok'} wrapper--fluid-content wrapper--shadow`}>
        <img className="wrapper__img" src={error ? '' : 'https://via.placeholder.com/400x200'} alt="Image not found"/>
        <figcaption className="wrapper__caption wrapper__caption--right wrapper__caption--white wrapper__caption--bg-red">
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