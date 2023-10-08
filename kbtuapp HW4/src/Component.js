import React from 'react';

const MyComponent = React.memo(({ name }) => { //Added memoization
  return <div>Hello, {name}!</div>;
});

export default MyComponent;