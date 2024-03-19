import React,{Suspense} from 'react'
import {PropTypes}  from 'prop-types'
import load from "../assets/load.gif";

const LazySuspense = ({component:Component, ...rest}) => {
  return (
 
    <Suspense className="container" fallback={<img className="load" src={load} alt="Loading..." />} >
        <Component {...rest}/>
    </Suspense>
   
  )
}
LazySuspense.propTypes = {
    component: PropTypes.element.isRequired
}

export default LazySuspense