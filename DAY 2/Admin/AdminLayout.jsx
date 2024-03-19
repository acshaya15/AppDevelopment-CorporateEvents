import React from 'react'
import PropTypes from "prop-types"
import ASidebar from './ASidebar'
import Footer from '../Components/Footer'
const AdminLayout = ({children}) => {
  return (
    <div>
       <ASidebar/>
        <main>
            {children}
        </main>

    </div>
  )
}
AdminLayout.propTypes = {
    children:PropTypes.node.isRequired
}
export default AdminLayout