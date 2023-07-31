import ProjectComponent from '@/components/project-components/ProjectComponent';
import React from 'react'

const ViewProject = () => {
  const selectedRoute = "project"; 

  return (
    <ProjectComponent selectedRoute={selectedRoute}/>
  )
}

export default ViewProject