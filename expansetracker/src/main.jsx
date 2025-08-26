import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ExpanseContextProvider from './contexts/useExpanseProvider.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExpanseContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ExpanseContextProvider>
  </StrictMode>,
)
