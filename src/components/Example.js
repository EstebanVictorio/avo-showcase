/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import Switch from "react-switch";
import { useState } from "react"

const styles = css`
  &[data-image*="wrapper"] {
    padding: 1rem;
    width: 400px;
    height: 200px;
  }

  [data-image="img"] {
    width: 100%;
    height: 100%;
  }

  &[data-image*="error"] {
    border: 4px solid red;
  }

  &[data-image*="ok"] {
    border: 4px solid green;
  }
`

const Example = () => {
  const [error, setError] = useState(false)
  const handleErrorChange = () => {
    setError(!error)
  }

  return (
    <div>
      <figure css={styles} data-image={`wrapper ${error ? 'error' : 'ok'}`}>
        <img data-image="img" src={error ? '' : 'https://via.placeholder.com/400x200'} alt="Image not found"/>
      </figure>
      <p>Toggle error</p>
      <Switch onChange={handleErrorChange} checked={error} checkedIcon={false} uncheckedIcon={false}/>
      {error ? '🙊' : '✅'}
    </div>
  )
}

export default Example