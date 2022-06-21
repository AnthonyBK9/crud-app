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
    <div className="list">
      <div className="list-user">
          <h2 className="list-name">{user.first_name} {user.last_name}</h2>
      </div>
      <div className="list-info">
        <div>
          <p className="list-content"><span className="list-title">Email:</span>{user.email}</p>
          <p className="list-content"><span className="list-title">Birthday:</span>{user.birthday}</p>
        </div>
        <div className="btn-list">
          <button className="btn-delete" onClick={() => deleteUser(user.id)}><i className="fa-solid fa-trash-can"></i></button>
          <button className="btn-edit" onClick={updateUser}><i className="fa-solid fa-user-pen"></i></button>
        </div>
      </div>
    </div>
  )
}

export default UsersList