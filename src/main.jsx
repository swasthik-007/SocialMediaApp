import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { QueryClient,QueryClientProvider } from 'react-query'
import './index.css'
import { BrowserRouter } from "react-router-dom";

const queryClient= new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:10000,
      cacheTime:300000
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

    <BrowserRouter>
      <App/>
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
