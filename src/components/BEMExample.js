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
`

const Example = () => {
  const [error, setError] = useState(false)
  const handleErrorChange = () => {
    setError(!error)
  }

  return (
    <div>
      <figure css={styles} className={`wrapper wrapper--${error ? 'error' : 'ok'}`}>
        <img className="wrapper__img" src={error ? '' : 'https://via.placeholder.com/400x200'} alt="Image not found"/>
      </figure>
      <p>Toggle error</p>
      <Switch onChange={handleErrorChange} checked={error} checkedIcon={false} uncheckedIcon={false}/>
      {error ? '🙊' : '✅'}
    </div>
  )
}

export default Example