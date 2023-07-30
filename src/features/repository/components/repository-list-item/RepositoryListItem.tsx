import { ReactElement } from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

import { IRepo } from 'features/repository/types';

import './RepositoryListItem.css';

interface IRepositoryListItemProps {
  repo: IRepo,
  additionalActions?: ReactElement,
}

export const RepositoryListItem = ({ repo, additionalActions }: IRepositoryListItemProps) => {
  return (
    <Card className="app-repsitory-list-item">
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

      <CardActions className="justify-space-between">
        <Button size="small" href={ repo.url } target="_blank">
          Open on GitHUB
        </Button>

        { additionalActions }
      </CardActions>
    </Card>
  );
};