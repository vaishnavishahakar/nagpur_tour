import ReactDOM from 'react-dom/client';
import "./index.css"

import Home from './views/Deeksha-Bhoomi/Deeksha-Bhoomi';
import About from './views/Raman_Science_Centre/Raman_Science_Centre';
import Contact from './views/Shri Swaminarayan Mandir/Shri Swaminarayan Mandir';

const root = ReactDOM.createRoot(document.getElementById('root'));

const currentPath = window.location.pathname;

if (currentPath=="/"){
  root.render(<Home/>)
}
else if(currentPath=="/about")
{
  root.render(<About/>)
}
else if(currentPath=="/contact")
{
  root.render(<Contact/>)
}
else{
  root.render(<h1>404 Not Found</h1>)
}
