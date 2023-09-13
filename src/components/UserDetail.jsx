// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'

// export default function UserDetail() {
//   const {userId} = useParams()
//   const [user , setUser] = useState([])

//   useEffect(()=>{
//     axios.get(`https://www.melivecode.com/api/users/${userId}`)
//     .then(apiData => setUser(apiData.data))
//   },[userId] )

//   return (
//     <div>
//       <div>
//         username: {user.fname}
//       </div>
//       <div>
//         username: {user.lname}
//       </div>
//     </div>
//   )
// }
