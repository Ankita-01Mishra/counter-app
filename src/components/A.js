import React from 'react'

import B from './B'

const A = () => {
    // const [cendol , setCendol ] = useState(2)
  let cendol = 2


  return (
    <div>A

        <B value = {cendol}/>
    </div>
  )
}

export default A