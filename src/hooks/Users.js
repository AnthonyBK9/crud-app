import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {

    const [users, setUsers] = useState()
    const URL = 'http://users-crud1.herokuapp.com/users/'
    
    useEffect(() => {
      axios.get(URL)
        .then((res) => setUsers(res.data))
        .catch((err) => console.log(err))
    }, [])


    
    return users 
}

export default Users