import axios from 'axios'
import React from 'react'

const UsersList = ({user, URL, getUsers, setUserUpdate, reset}) => {

    const deleteUser = (id) => {
        axios.delete(`${URL}${id}/`)
          .then(res => console.log(res.data))
          .catch(err => console.log(err))
          .finally(() => getUsers())
      }

    const updateUser = () => {
        const user2 = {
            email: user.email,
            password: user.password,
            first_name: user.first_name,
            last_name: user.last_name,
            birthday: user.birthday,
        }
        reset(user2)
        setUserUpdate(user)
    }
  return (
    <tr>
        <td data-label="name">{user.first_name} {user.last_name}</td>
        <td data-label="email">{user.email}</td>
        <td data-label="birthday">{user.birthday}</td>
        <td data-label="action"><button className="btn-delete" onClick={() => deleteUser(user.id)}><i className="fa-solid fa-trash-can"></i></button>
            <button className="btn-edit" onClick={updateUser}><i className="fa-solid fa-user-pen"></i></button>
        </td>
    </tr>      
  )
}

export default UsersList