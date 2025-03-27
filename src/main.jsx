// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import RenderAppWithData from './pages/home/ShopCategory/RenderApp'
import './index.css'
import DataProvider from './Components/DataContext'
import { Provider } from 'react-redux'
import store from './app/store'

// Create the root once
const root = ReactDOM.createRoot(document.getElementById('root'))

// Render the application using the existing root
root.render(
  <Provider store={store}>
    <DataProvider>
      <RenderAppWithData />
    </DataProvider>
  </Provider>
)
