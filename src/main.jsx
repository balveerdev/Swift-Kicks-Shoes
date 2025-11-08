import './index.css';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
  <BrowserRouter basename="/Swift-Kicks-Shoes/">
=======
  <BrowserRouter>
>>>>>>> 879e776 (Initial commit)
    <SearchProvider>  
      <App />
    </SearchProvider>
  </BrowserRouter>
);
