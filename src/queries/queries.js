import { gql } from '@apollo/client';

const getLaunchPadsQuery = gql`
    query launchpads{
        launchpads{
            id,
            name
        }
    }
`;

const getLaunchPadDetailQuery = gql`
    query launchpad($id: ID!){
        launchpad(id:$id){
            id
            name
            attempted_launches
            successful_launches
            details
            status
        }
    }
`;


const getUsersListQuery = gql`
    query users{
        users {
          id
          name
          rocket
          twitter
        }
      }
`;

const addUserMutationQuery = gql`
    mutation insert_users($id:uuid, $name:String, $rocket:String, $twitter:String){
        insert_users(
            objects: {
            id: $id, 
            name: $name, 
            rocket: $rocket,
            twitter: $twitter
        }) {
        affected_rows
        returning {
            id
            name
            rocket
            timestamp
            twitter
          }
        }
    }
`;

const deleteUserMutationQuery = gql`
    mutation delete_users($id: uuid){
        delete_users(where: {id: {_eq: $id}}) {
        affected_rows
        returning {
            name
        }
        }
    }
`;

export { getLaunchPadsQuery, getLaunchPadDetailQuery, getUsersListQuery, addUserMutationQuery, deleteUserMutationQuery};