import { Link, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';

import './Navigation.css';

export const Navigation = () => {
  const location = useLocation();
  
  return (
    <BottomNavigation 
      showLabels
      value={ location.pathname }
      className="app-navigation"
    >
      <BottomNavigationAction 
        component={Link}
        label="Search"
        value="/"
        to="/"
        icon={ <SearchIcon /> } 
      />

      <BottomNavigationAction 
        component={Link}
        label="Favorites" 
        value="/favorites"
        to="/favorites"
        icon={ <FavoriteIcon /> } 
      />
    </BottomNavigation>
  );
};