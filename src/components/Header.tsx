import { AppBar, Badge, Container, Toolbar, Typography } from '@mui/material'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import { useNavigate } from 'react-router-dom'

const Header = ({ cartUsersNum }: any) => {
  const navigate = useNavigate()
  return (
    <div>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate('/')}
              variant="h5"
              sx={{ flexGrow: '1', cursor: 'pointer' }}
            >
              header
            </Typography>

            <Badge
              onClick={() => navigate('/cart')}
              badgeContent={cartUsersNum}
              color="warning"
              sx={{ cursor: 'pointer' }}
            >
              <ShoppingCartRoundedIcon />
            </Badge>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default Header
