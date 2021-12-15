import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import Badge from '@mui/material/Badge'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreIcon from '@mui/icons-material/MoreVert'
import { TextField } from '@mui/material'
import '../components/CSS_FILE/menuBar.css'
import { BsShuffle } from 'react-icons/bs'
import { WiDayShowers } from 'react-icons/wi'
import Tooltip from '@mui/material/Tooltip'
import Boop from './boop_animation'
import { FiCamera } from 'react-icons/fi'
import { Button } from '@material-ui/core'
import Spring from './spring_animation'
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

export default function MenuBar(props) {
  const state = {
    value: ' ',
  }
  const handleChange = (e) => {
    state.value = e.target.value
    console.log(state.value)
    //console.log(this.props)
  }

  const handleSubmit = (e) => {
    console.log(state.value)
    const { onFormSubmit } = props
    onFormSubmit(state.value)

    e.preventDefault()
  }
  const handleClick = (e) => {
    const { shuffleMusic } = props
    shuffleMusic(state.value)
    e.preventDefault()
  }
  const handlePause = () => {
    const { pauseState } = props
    pauseState = true
  }
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='error'>
            <BsShuffle />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size='large'
          aria-label='show 17 new notifications'
          color='inherit'
        >
          <Badge badgeContent={17} color='error'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' style={{ backgroundColor: '#212121' }}>
        <Toolbar>
          <Spring rotation={90} timing={300}>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              sx={{ mr: 2 }}
              transformOrigin='center'
            >
              <WiDayShowers />
            </IconButton>
          </Spring>
          <Typography
            variant='h5'
            noWrap
            component='div'
            sx={{ display: { xs: 'none', sm: 'block' } }}
            fontFamily='Noto Sans KR'
          >
            pluvio
          </Typography>
          <Search style={{ width: 800 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <form onSubmit={handleSubmit} style={{ width: 800 }}>
              <StyledInputBase
                style={{ width: 800 }}
                className='input'
                id='outlined-basic'
                variant='outlined'
                fullWidth
                placeholder='Search...'
                onChange={handleChange}
              ></StyledInputBase>
            </form>
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size='large' color='inherit' onClick={handleClick}>
              <Badge color='error'>
                <Boop rotation={-90} timing={400}>
                  <Tooltip title='Shuffle'>
                    <IconButton>
                      <BsShuffle color='white' />
                    </IconButton>
                  </Tooltip>
                </Boop>
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              aria-label='show 17 new notifications'
              color='inherit'
              onClick={handlePause}
            >
              <Badge color='error'>
                <Tooltip title='Camera'>
                  <Boop rotation={90} timing={400}>
                    <IconButton
                      size='large'
                      edge='start'
                      color='inherit'
                      aria-label='open drawer'
                      sx={{ mr: 2 }}
                    >
                      <FiCamera />
                    </IconButton>
                  </Boop>
                </Tooltip>
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  )
}
