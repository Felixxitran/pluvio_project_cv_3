import React from 'react'
import { useState, useEffect } from 'react'
import { Paper, TextField } from '@material-ui/core'

import DarkMode from './darkmode'
class searchBar extends React.Component {
  //const [state, setState] = useState('')
  // const handleChange = (event) => {
  //   this.setState({ searchTerm: event.target.value })
  // }
  // constructor(props) {
  //   super(props)
  //   this.state = { value: '' }

  //   this.handleChange = this.handleChange.bind(this)
  //   this.handleSubmit = this.handleSubmit.bind(this)
  // }

  state = {
    value: ' ',
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value })
    console.log(this.state.value)
    //console.log(this.props)
  }

  handleSubmit = (e) => {
    console.log(this.state.value)
    const { onFormSubmit } = this.props
    onFormSubmit(this.state.value)

    e.preventDefault()
  }
  render() {
    return (
      <div>
        <Paper sx={16} elevation={6} style={{ padding: '25' }}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id='outlined-basic'
              variant='outlined'
              fullWidth
              label='Search...'
              onChange={this.handleChange}
            ></TextField>
          </form>
        </Paper>
      </div>
    )
  }
}
export default searchBar
