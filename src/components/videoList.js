import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from '@mui/material'
import '../components/CSS_FILE/videolist.css'
const VideoList = (props) => {
  // if (!props) {
  //   console.log(props)
  // }
  // const { videoshow } = this.props
  // return (
  //   <div>
  //     <h1>this is video list</h1>
  //     <section>
  //       {videoshow.map((video) => {
  //         const link = `http://www.youtube.com/embed/${video.id.videoId}`
  //         return <iframe width='20%' height='20%' src={link} />
  //       })}
  //     </section>
  //   </div>
  // )
  const click = (e, data) => {
    //console.log(props)
    var videoshowing = data
    props.changeVideo(videoshowing)
  }
  const { videoshow } = props

  // console.log(videoshow)
  return (
    <div>
      <section class='list-video'>
        {videoshow.map((video) => {
          const { snippet } = video
          const img_link = snippet.thumbnails.medium.url
          const title = snippet.title
          const des = snippet.description
          const link = `http://www.youtube.com/embed/${video.id.videoId}`
          return (
            <Card
              className='video-card'
              style={{ backgroundColor: 'black' }}
              sx={{ maxWidth: 345 }}
              value={video}
              onClick={(e) => click(e, video)}
            >
              <CardMedia
                component='img'
                height='140'
                src={img_link}
                alt='green iguana'
                className='card-media'
              />

              <CardContent>
                <Link src={link} underline='none' color='white'>
                  <Typography gutterBottom variant='h5' component='div'>
                    {title}
                  </Typography>
                </Link>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  color='white'
                >
                  {des}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant='outlined'>Watch Later</Button>
              </CardActions>
            </Card>
          )
        })}
        ,
      </section>
    </div>
  )
}
export default VideoList
