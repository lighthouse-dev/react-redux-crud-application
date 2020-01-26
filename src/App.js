import React from 'react';

function App() {
  const profiles = [
    { name: 'Taro', age: 28 },
    { name: 'Hanako', age: 26 },
    { name: 'Ichiro' }
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

User.defaultProps = {
  age: 1
};

export default App;
