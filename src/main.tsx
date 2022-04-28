import React from "react"
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client"

import { App } from "./components/App"
import './index.css'
import { pokemonStore } from "./modules/store";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={pokemonStore}>
      <App />
    </Provider>
  </React.StrictMode>
)
