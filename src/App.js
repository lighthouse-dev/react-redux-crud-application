import React from 'react';
import PropTypes from 'prop-types';

function App() {
  const profiles = [
    { name: 'Taro', age: 28 },
    { name: 'Hanako', age: 26 },
    { name: 'Ichiro', age: 25 }
  ];

  return (
    <div>
      {profiles.map((profile, index) => {
        return <User key={index} name={profile.name} age={profile.age} />;
      })}
    </div>
  );
}

const User = props => {
  return (
    <div>
      Hi, I am {props.name}, and {props.age} years old!
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default App;
