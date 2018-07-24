
const getConfigVariable = (config, variableName) => config.parsed[variableName]
const isDev = () => process.env.NODE_ENV === 'development'

module.exports = {
  getConfigVariable,
  isDev
}
