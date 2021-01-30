import React, { Fragment } from 'react' 

function Home(props) {
  return (
    <Fragment>
      <h1>Hello { props.match.params.name }</h1>
    </Fragment>
  )
}

export default Home 