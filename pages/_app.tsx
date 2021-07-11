import { css, Global } from '@emotion/react'

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        background: papayawhip;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
        text-align: center;
      }
    `}
  />
)

function MyApp({ Component, pageProps }) {
  return <>
    {globalStyles}
    <Component {...pageProps} />
  </>
}

export default MyApp
