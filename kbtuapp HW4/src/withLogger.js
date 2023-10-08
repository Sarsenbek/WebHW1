import React from 'react';

const withLogger = (WrappedComponent) => {
  class WithLogger extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} is unmounted`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return WithLogger;
}
export default withLogger;