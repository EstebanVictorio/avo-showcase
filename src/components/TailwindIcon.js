/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import React, { Fragment } from "react"

const styles = css`
  width: 12rem;
  height: 12rem;
  .cls-1{fill:#06b6d4;fill-rule:evenodd;}
`

const emojiStyles = css`
  font-size: 8rem;
`

const TailwindIcon = () => (
  <Fragment>
    <svg css={styles} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 73.29">
      <title>tailwind-css</title>
      <path class="cls-1" d="M61.44,0Q36.87,0,30.72,24.43q9.22-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.26,6,6.08,13,13.11,28.22,13.11q24.57,0,30.72-24.43-9.21,12.22-21.5,9.16c-4.68-1.16-8-4.53-11.72-8.26C83.64,7,76.67,0,61.44,0ZM30.72,36.64Q6.15,36.64,0,61.07q9.23-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.27,6,6.07,13,13.11,28.22,13.11q24.57,0,30.72-24.43Q82.95,61.07,70.66,58c-4.68-1.16-8-4.53-11.72-8.26-6-6.08-13-13.12-28.22-13.12Z"/>
    </svg>
    <span css={emojiStyles}>🙄</span>
  </Fragment>
)

export default TailwindIcon