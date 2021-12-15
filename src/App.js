import React from 'react'
import useState from 'react'
import { Grid } from '@material-ui/core'
import youtube from './api/youtube'
import SearchBar from './components/searchBar'
import VideoList from './components/videoList'
import VideoDetails from './components/videoDetails'
import { useForm } from 'react-hook-form'
import { findapi } from './api/youtube'
import { Typography } from '@mui/material'
import MenuBar from './components/menuBar'
import './components/CSS_FILE/app.css'
class App extends React.Component {
  state = {
    videos: [],
    selectedVideos: null,
    pause: false,
  }
  handleSubmit = async (value) => {
    var res = await youtube.get('search', {
      params: { q: value, maxResults: 20 },
    })
    const random = Math.random() * 25

    this.setState({ videos: res.data.items, selectedVideos: res.data.items[0] })
    console.log(this.state.selectedVideos)
  }
  randomMusic = async (value) => {
    var response = await youtube.get('search', {
      params: { q: value, maxResults: 40 },
    })
    console.log(response.data.items)
    var res2 = []

    for (var i = 0; i < 20; ++i) {
      var random = parseInt(Math.random() * 40)
      res2.push(response.data.items[random])

      console.log(res2)
    }
    this.setState({ videos: res2 })
  }
  handleclick = (videoshowing) => {
    this.setState({ selectedVideos: videoshowing })
    console.log(this.state.selectedVideos)
  }
  render() {
    return (
      <container className='container-all' style={{ margin: 0 }}>
        <div style={{ backgroundColor: 'inherit' }}>
          <MenuBar
            onFormSubmit={this.handleSubmit}
            shuffleMusic={this.randomMusic}
            pauseState={this.state.pause}
          />
          <Grid
            justify='center'
            container
            spacing={25}
            style={{ marginLeft: 20, marginTop: 20 }}
          >
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {/* <Grid item xs={8}>
                <SearchBar onFormSubmit={this.handleSubmit} />
              </Grid> */}
                <Grid item xs={8}>
                  <VideoDetails
                    videos={this.state.selectedVideos}
                    pause={this.state.pause}
                  />
                </Grid>
                <Grid item xs={4}>
                  <VideoList
                    videoshow={this.state.videos}
                    changeVideo={this.handleclick}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </container>
    )
  }
}

export default App
