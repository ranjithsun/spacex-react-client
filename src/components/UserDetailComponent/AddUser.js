import {Button, TextField, Card, CardContent} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '20ch',
      },
    },
  }));

function AddUser({ onChangeHandler, addUserData }){
    const classes = useStyles();
    return(
    <Card>
        <CardContent>
            <form className={classes.root} >
                <TextField required id="standard-basic" label="Enter Name" name="username" onChange={onChangeHandler} />
                <TextField required id="standard-basic" label="Enter Rocket details" name="rocket" onChange={onChangeHandler} />
                <TextField required id="standard-basic" label="Enter Twitter account" name="twitter" onChange={onChangeHandler} />
                <Button variant="contained" onClick={addUserData} >Add User</Button>
            </form>
        </CardContent>
    </Card>
    )
}

export default AddUser;