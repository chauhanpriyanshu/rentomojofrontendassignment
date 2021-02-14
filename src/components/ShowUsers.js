import React from 'react';
import useDataFetcher from '../hooks/dataFetcher';
import { NavLink } from 'react-router-dom';

const ShowUsers = (props) => {
  const { type } = props.match.params;
  const { isLoading, users } = useDataFetcher(type);
  return (
    <React.Fragment>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <React.Fragment>
          <table>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Company</th>
                      <th>Blog Posts</th>
                  </tr>
              </thead>
          <tbody>
          {users.map(( listValue, index ) => {
          return (
            <tr key={index}>
              <td>{listValue.name}</td>
              <td>{listValue.company.name}</td>
              <td>
                <NavLink to="/posts" activeClassName="active">
                    View Posts      
                </NavLink>
              </td>
            </tr>
          );
        })}
          </tbody>
          </table>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ShowUsers;