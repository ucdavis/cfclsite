'use strict';


function StoneOne() {
    return ();
}

class Main extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
        <StoneOne/>
    );
  }
}

// render the page
ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
