import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer } from 'miragejs'

createServer({
  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => (
      [
        {
          id: 1,
          title: 'transaçao',
          amount: 4000,
          type: 'income',
          category: 'food',
          data: new Date()
        }
      ]
    ))
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

