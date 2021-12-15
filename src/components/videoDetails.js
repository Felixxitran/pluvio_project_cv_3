import React from 'react'
import { Paper } from '@material-ui/core'
import '../components/CSS_FILE/videoDetails.css'
import { CardMedia } from '@mui/material'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
const VideoDetails = (props) => {
  const { videos } = props
  if (!videos) return <h1>Loading...</h1>
  const { snippet } = videos
  const img_link = snippet.thumbnails.medium.url
  const title = snippet.title
  const des = snippet.description
  const channeltitle = snippet.channelTitle
  const kind = videos.id.kind
  console.log(channeltitle)
  const link = `http://www.youtube.com/embed/${videos.id.videoId}`
  console.log(videos)

  return (
    <div className='video-show'>
      <CardMedia
        className='video-frame'
        component='iframe'
        width='100%'
        src={link}
        allowfullscreen='allowfullscreen'
        style={{ border: 'none' }}
        allow='autoplay'
      />
      <Grid item xs={12} className='video-details-1'>
        <Typography variant='h6' color='#2196f3'>
          #{kind}
        </Typography>
        <Typography variant='h6' color='#2196f3'>
          #{channeltitle}
        </Typography>
      </Grid>
      <Grid item xs={12} className='video-details'>
        <Typography variant='h5' color='white'>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} className='video-details-2'>
        <Typography variant='h6' color='white' fontFamily='Uchen'>
          {des}
        </Typography>
      </Grid>
    </div>
  )
}
export default VideoDetails
