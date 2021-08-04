import React from 'react';
import {Typography, AppBar} from '@material-ui/core'
import VideoPlayer from './component/VideoPlayer';
import Options from './component/Options';
import Notifications from './component/Notifications';
import {makeStyles} from '@material-ui/core/styles'




const useStyles=makeStyles((theme)=>(
{
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  
}
))


function App() {
  const Classes= useStyles()
  return (
    <div className={Classes.wrapper}>
      <AppBar className={Classes.appBar} position='static' color='primary'>
        <Typography variant='h4' align='center'> Video Chat Application Concept @ Sushil Singh

        </Typography>

      </AppBar>
      <VideoPlayer/>
      <Options>
        <Notifications/>
      </Options>
      <div>
        <footer>

          Crafted by- Sushil Singh
          <div> @  all right reserved</div>
        </footer>

      </div>
      
    </div>
  );
}

export default App;
