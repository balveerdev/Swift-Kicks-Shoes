import './index.css';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Swift-Kicks-Shoes/">
    <SearchProvider>  
      <App />
    </SearchProvider>
  </BrowserRouter>
);
