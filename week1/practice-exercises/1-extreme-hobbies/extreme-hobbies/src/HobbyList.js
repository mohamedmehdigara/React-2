import React from 'react';



function HobbyList(props) {
  const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];

  const hobby = props.hobbies;
  const listItems = hobby.map((Hobby) =>
    <li>{hobbies.Hobby}</li>
  );
  return( <div>
    {listItems} 
  </div>);
}

export default HobbyList;

