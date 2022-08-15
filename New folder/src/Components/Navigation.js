import React from 'react'

const Navigation = ({onSignIn}) => {
  return (
    <nav style= {{display: 'flex', "justifyContent": "flex-end"}}>
        <p className="f3 pa3 dim black pointer underline link" onClick={onSignIn}>Sign Out</p>
    </nav>
  )
}

export default Navigation;