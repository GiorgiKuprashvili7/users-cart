import { Container, IconButton, Paper, Stack, Typography } from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded'

const Home = ({ data, addUserToCart, cartData }: any) => {
  return (
    <Container>
      {data?.data.map((user: any) => {
        return (
          <Paper key={user.id} sx={{ p: 1, m: 1 }}>
            <Stack direction="row" sx={{ alignItems: 'center' }}>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                {user.name}
              </Typography>

              <IconButton
                disabled={
                  cartData.find((cartData: any) => cartData.id === user.id) &&
                  true
                }
                sx={{ bgcolor: 'primary.light' }}
                onClick={() => addUserToCart(user)}
              >
                <AddRoundedIcon />
              </IconButton>
            </Stack>
          </Paper>
        )
      })}
    </Container>
  )
}

export default Home
