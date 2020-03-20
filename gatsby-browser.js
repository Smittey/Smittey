import React from "react"
import GlobalContextProvider from "./src/utils/GlobalContextProvider"
require("prismjs/themes/prism-coy.css")

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}