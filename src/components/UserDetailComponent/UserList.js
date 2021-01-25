import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    root: {
      width: '100%',
      marginTop: '10px'
    },
    container: {
      maxHeight: 440,
    },
  });

function UserList({listOfUsers, deleteUser}){
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

    return(
    <Paper className={classes.root}>
        <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell key="sno">S.No</TableCell>
                        <TableCell key="name">Name</TableCell>
                        <TableCell key="rocket">Rocket detail</TableCell>
                        <TableCell key="twitter">Twitter profile</TableCell>
                        <TableCell key="delete">Delete user</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                { 
                    listOfUsers.length>0 && 
                    listOfUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(
                    (user, index) => {
                        return(
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>{index+1}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.rocket || "No data"}</TableCell>
                            <TableCell>{user.twitter || "No data"}</TableCell>
                            <TableCell>
                                <a href="#" onClick={()=>deleteUser({ variables: { id: user.id } })}>Delete</a>    
                            </TableCell>
                        </TableRow>
                        )
                    }
                )
                }
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={listOfUsers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </Paper>
    )
}

export default UserList