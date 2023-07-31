import { Button } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

interface IFavoriteButtonProps {
  handleClick: () => void,
  isFavorite: boolean,
}

export const FavoriteButton = (
  { handleClick, isFavorite}: IFavoriteButtonProps
) => {
  return (
    <Button 
      size="small" 
      onClick={ handleClick }
      color={ isFavorite ? 'error' : 'primary' }
    >
      { isFavorite
        ? <> <DeleteOutlineOutlinedIcon /> Remove from Favorites </>
        : <> <FavoriteBorderOutlinedIcon /> Add to Favorites </>
      }   
    </Button>
  );
};