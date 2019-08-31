import React from 'react';
import styled from 'styled-components';

const Map = styled("div")`
  width: 500px;
  heigth: 500px;
`;

//The main purpose of this class is to identify if there is a logged user and redirect him to the proper view.
class SafeTeamApp extends React.Component {
  constructor(props) {
    super(props);
    var map = window.map;
    this.state = {
      map,
    };
  };

  componentDidMount(){
  };

  render() {
    return (
      <div className='App'>
      </div>
      );
    }
}

export default SafeTeamApp;