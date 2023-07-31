import ProjectComponent from '@/components/project-components/ProjectComponent';
import React from 'react'

const updateProjectPage = () => {
  const selectedRoute = "update-project"; 

  return (
    <ProjectComponent selectedRoute={selectedRoute}/>
  )
}

export default updateProjectPage