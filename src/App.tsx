import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import { axiosRequest } from './utils/axios_utils'

function App() {
  const [cartData, setCartData] = useState<any[]>([])

  const fetchUsers = () => {
    return axiosRequest({})
  }
  const { data, isLoading } = useQuery('users', fetchUsers)

  const addUserToCart = (user: any) => {
    const userExist = cartData.find((cartUser: any) => cartUser.id === user.id)
    if (!userExist) {
      setCartData([...cartData, user])
    }
  }

  const removeUserCart = (id: any) => {
    const newData = cartData.filter((user: any) => user.id !== id)
    setCartData(newData)
  }

  if (isLoading) {
    return (
      <Box sx={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <div className="App">
      <Header cartUsersNum={cartData.length} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data}
              cartData={cartData}
              addUserToCart={addUserToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart cartData={cartData} removeUserCart={removeUserCart} />}
        />
      </Routes>
    </div>
  )
}

export default App
