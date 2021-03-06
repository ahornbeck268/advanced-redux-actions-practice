import React from 'react';

function Users(props) {
  let usersDivs = null;
  if(props.users){
    const sorted = props.users.sort((a,b) => {
      return a[props.sortOn] > b[props.sortOn];
    });
    usersDivs = sorted.filter((u) => {
      return !props.firstNameFilter ||
      (props.firstNameFilter &&
      u.first_name.indexOf(props.firstNameFilter) > -1);
    })
    usersDivs = usersDivs.map((u, index) => {
      return <div key={index}>{u.first_name} {u.last_name}</div>
    })
  }
  return (
      <div>
        <h1>Users</h1>
       {usersDivs}
      </div>
  );
}
export default Users;
