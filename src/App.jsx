import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './layouts/layout'
import HomePage from './pages/home_page'
import GamePage from './pages/game_page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  }, {
    path: 'game',
    element: <GamePage />
  }
])

function App({routes}) {
  return (
    <Layout>
      <RouterProvider router={router}/>
    </Layout>
  )
}

export default App
