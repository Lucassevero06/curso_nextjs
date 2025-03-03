import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div>
      <nav>Links da Dashboard</nav>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
