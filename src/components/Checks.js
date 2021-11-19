/** @jsx jsx */
import { jsx, css } from "@emotion/react"

const styles = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8rem;
  ul {
    display: flex;
    flex-direction: column;
  }
`

const Checks = () => (
  <section css={styles}>
    <div data-col>
      <h2>BEM</h2>
      <ul>
       <li>✅ Resilience</li>
       <li>✅ Scalability</li>
       <li>✅ Portability</li>
       <li>⚠️ Enjoyable DX</li>
      </ul>
    </div>
    <div>
      <h2>AVO</h2>
      <ul>
       <li>✅ Resilience</li>
       <li>✅ Scalability</li>
       <li>✅ Portability</li>
       <li>✅ Enjoyable DX</li>
      </ul>
    </div>
  </section>
)

export default Checks
