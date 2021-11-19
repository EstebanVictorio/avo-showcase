/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import Switch from "react-switch";
import { useState } from "react"

const styles = css`
  &[data-wrapper="container"] {
    padding: 1rem;
    width: 400px;
    height: 200px;
  }

  [data-wrapper="img"] {
    width: 100%;
    height: 100%;
  }

  &[data-status] {
    border: 4px solid;
  }

  &[data-status*="ok"] {
    border-color: green;
  }
  
  &[data-status*="error"] {
    border-color: red;
  }
  
  &[data-content*="fluid"] {
    padding: 0;
  }
  
  &[data-shadow="blue"] {
    box-shadow: 1px -4px 10px 10px blue;
  }
  
  [data-text-align="right"] {
    text-align: right;
  }
  
  [data-color="white"] {
    color: whitesmoke;
  }
  
  [data-bg-color="red"] {
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
      <figure css={styles}
        data-wrapper="container"
        data-status={error ? 'error' : 'ok'}
        data-content="fluid"
        data-shadow="blue"
      >
        <img data-wrapper="img" src={error ? '' : 'https://via.placeholder.com/400x200'} alt="Image not found"/>
        <figcaption
          data-text-align="right"
          data-color="white"
          data-bg-color="red"
        >
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