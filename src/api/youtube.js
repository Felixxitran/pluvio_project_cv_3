import axios from 'axios'
var config = require('./config.json')
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    key: config.YOUTUBE_API,
    regionCode: 'JP',
    length: 10,
  },
})
