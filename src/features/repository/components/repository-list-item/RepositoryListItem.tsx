import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { ISearchRepo } from 'features/repository/types';

interface IRepositoryListItemProps {
  repo: ISearchRepo,
}

export const RepositoryListItem = ({ repo }: IRepositoryListItemProps) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          { repo.name }
        </Typography>

        <Typography color="text.secondary">
          Author: { repo.owner.login }
        </Typography>

        <Typography variant="body2">
          { repo.description }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Open on GitHUB</Button>
        <Button size="small">Add to Favorites</Button>
      </CardActions>
    </Card>
  );
};