import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useFetch } from '../hooks/useFetch';

const UserCard = ({ userData }) => {
  const { response: userFromApi } = useFetch(userData.url);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        height='400'
        border-radius='50%'
        src={userFromApi?.avatar_url}
        alt='user avatar'
      ></CardMedia>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {userFromApi?.login}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Followers: {userFromApi?.followers}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Bio: {userFromApi?.bio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>
          <a href={userFromApi?.html_url}>View Profile</a>
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
