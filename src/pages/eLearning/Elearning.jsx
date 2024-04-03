import React from 'react'
import "./Elearning.css"
import SubHeader from '../../globals/SubHeader/SubHeader'

function Elearning() {
  return (
    <>
        <SubHeader
        title={"eLearn"}
        path={[{ url: "/elearn", label: "Home" }]}
        current={"eLearn"}
      />
      <div className="container"></div>
    </>
  )
}

export default Elearning