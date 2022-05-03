import {
  Avatar,
  Container,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { Box, typography } from '@mui/system'
import React from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

const Cart = ({ cartData, removeUserCart }: any) => {
  return (
    <Container>
      {cartData.length === 0 && (
        <Box sx={{ height: 200, display: 'grid', placeItems: 'center' }}>
          <Typography variant="h6" color="warning.main">
            no users are addded
          </Typography>
        </Box>
      )}

      {cartData?.map((user: any) => {
        return (
          <Paper sx={{ p: 1, m: 1 }} key={user.id}>
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
              <Avatar>{user.name.slice(0, 1)}</Avatar>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{user.name}</Typography>
                <Typography variant="body2">{user.email}</Typography>
              </Box>
              <Box>
                <IconButton onClick={() => removeUserCart(user.id)}>
                  <CloseRoundedIcon />
                </IconButton>
              </Box>
            </Stack>
          </Paper>
        )
      })}
    </Container>
  )
}

export default Cart
