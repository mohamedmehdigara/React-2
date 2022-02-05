import React from 'react';

function HobbyList() {
  const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];
  const hobby = props.hobbies;
  const listItems = hobby.map((Hobby) =>
    <li>{Hobby}</li>
  );
  return( <div>
    {listItems} key={i}
  </div>);
}

export default HobbyList;

