const React = require("react")
const GlobalContextProvider = require("./src/utils/GlobalContextProvider")
  .default

exports.wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}