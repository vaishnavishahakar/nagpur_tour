import ReactDOM from 'react-dom/client';
import "./index.css"

import Deeksha_Bhoomi from './views/Deeksha_Bhoomi/deeksha_bhoomi';
import Raman_Science_Centre from './views/Raman_Science_Centre/Raman_Science_Centre';
import Shri_Swaminarayan_Mandir from './views/Shri_Swaminarayan_Mandir/shri_swaminarayan_mandir';

const root = ReactDOM.createRoot(document.getElementById('root'));

const currentPath = window.location.pathname;

if (currentPath=="/"){
  root.render(<Deeksha_Bhoomi/>)
}
else if(currentPath=="/Raman_Science_Centre")
{
  root.render(<Raman_Science_Centre/>)
}
else if(currentPath=="/shri_swaminarayan_mandir")
{
  root.render(<Shri_Swaminarayan_Mandir/>)
}
else{
  root.render(<h1>404 Not Found</h1>)
}
