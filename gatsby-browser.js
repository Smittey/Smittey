import React from "react"
import GlobalContextProvider from "./src/utils/GlobalContextProvider"

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}