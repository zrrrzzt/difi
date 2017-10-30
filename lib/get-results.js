'use strict'

const axios = require('axios')

module.exports = async options => {
  const apiEndpoint = options.apiUrl
  const querystring = require('querystring')
  const url = `${apiEndpoint}?${querystring.stringify(options.qs)}`
  try {
    const { data } = await axios.get(url)
    if (/^Error/.test(data.toString()) || /Dataset or folder not found/.test(data.toString())) {
      throw new Error('Dataset or folder not found.')
    } else {
      return data
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('Dataset or folder not found.')
    } else {
      throw error
    }
  }
}
