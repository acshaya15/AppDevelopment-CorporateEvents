import React from 'react'
import PropTypes from "prop-types"
import Uheader from "../User/Uheader";
const UserLayout = ({children}) => {
  return (
    <div>
        <Uheader/>
        <main>
            {children}
        </main>

    </div>
  )
}
UserLayout.propTypes = {
    children:PropTypes.node.isRequired
}
export default UserLayout