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
    <article className="card">
        <div className="card-content">
            <div className="card-header">
                <h3 className="card-title"><i className="fa-solid fa-user-large"></i> {user.first_name} {user.last_name}</h3>
            </div>
            <div className="card-body">
                <p><span><i className="fa-solid fa-cake-candles"></i> Birthday:</span> {user.birthday}</p>
                <p><span><i className="fa-solid fa-envelope"></i> E-mail: </span> {user.email}</p>
            </div>
            <div className="card-button">
                <button className="btn-delete" onClick={() => deleteUser(user.id)}><i className="fa-solid fa-trash-can"></i></button>
                <button className="btn-edit" onClick={updateUser}><i className="fa-solid fa-user-pen"></i></button>
            </div>
        </div>
    </article>
  )
}

export default UsersList