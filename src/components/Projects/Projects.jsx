import React from 'react'

import projects from '../../data/projects.json'

function Projects() {
  return (
    <section>
        <h2>Projects</h2>

        <div>
            {
                projects.map((project, id) => {
                    return (
                        <div key={id}>
                            
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Projects