import React, {useEffect ,useState} from 'react';
import { useQuery, useMutation } from '@apollo/client';

import UserList from './UserList';
import AddUser from './AddUser';

import { v4 as uuidv4 } from 'uuid';

import {getUsersListQuery, addUserMutationQuery,deleteUserMutationQuery} from '../../queries/queries';

function UserDetail(){

    const [listOfUsers, setListOfUsers] = useState([]);
    const [removedUser, setRemovedUser] = useState();
    const [addedUser, setAddedUser] = useState();
    const [userInfo, setUserInfo] = useState({username:'', rocket:'', twitter:''});


    const { data, refetch } = useQuery(getUsersListQuery);

    const [deleteUser, { data:data1 }] = useMutation(deleteUserMutationQuery);
    const [addUser, { data:data2 }] = useMutation(addUserMutationQuery);

    useEffect(() => {
        if(data) setListOfUsers(data.users);
        return( ()=>setListOfUsers([]));
    }, [data]);

    useEffect(() => {
        if(data1){
            setRemovedUser(data1.delete_users.returning);
            alert('User Deleted');
        } 
        refetch();
        return( ()=>setRemovedUser(''));
    }, [data1]);

    useEffect(() => {
        if(data2){
            setAddedUser(data2.insert_users);
            alert('User details Added');
        } 
        refetch();
        return( ()=>setAddedUser(''));
    }, [data2]);

    const addUserData = (event)=>{
        if(userInfo.username!='' && userInfo.rocket!='' && userInfo.twitter!=''){
            addUser({ variables: { id:uuidv4(), name: userInfo.username, rocket: userInfo.rocket, twitter: userInfo.twitter } });
        }else{
            alert("Please enter all fields to insert user!")
        }
    }

    const onChangeHandler = (event) => {
        let field = event.target.name;
        let val = event.target.value;
        setUserInfo(prevState => ({...prevState ,[field]: val}));
    }
    
    return(
        <div>
            <AddUser onChangeHandler={onChangeHandler} addUserData={addUserData} />
            <UserList listOfUsers={listOfUsers} deleteUser={deleteUser}/>
        </div>
    );
}

export default UserDetail;