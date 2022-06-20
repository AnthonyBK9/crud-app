import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';
import { useForm } from 'react-hook-form';

const URL = 'http://users-crud1.herokuapp.com/users/'
function App() {

  const { register, handleSubmit, reset } = useForm();
  const [users, setUsers] = useState();
  const [userUpdate, setUserUpdate] = useState();
    
  useEffect(() => {
    axios.get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }, [])
  
  const getUsers = () => {
    axios.get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getUsers();
  }, [])
  
  const createUser = (newUser) => {
    axios.post(URL, newUser)
      .then()
      .catch(err => console.log(err))
      .finally(() => getUsers())
  }

  const updateUserById = (id, updateUser) => {
    axios.patch(`${URL}${id}/`, updateUser)
      .then(() => {
        getUsers()
        setUserUpdate()
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="container">
      <div className="App">
        <div className="container-list ">
          <table>
            <thead>
              <tr>
                <th>Name</th><th>E-mail</th><th>Birthday</th><th>Action</th>
              </tr>
            </thead>
            {
              users?.map(user => (
                <UsersList 
                  user={user}
                  key={user.id}
                  URL={URL}
                  getUsers={getUsers}
                  updateUserById={updateUserById}
                  setUserUpdate={setUserUpdate}
                  reset={reset}
                />
              ))
            }
          </table>
          {/* {
            users?.map(user => (
              <UsersList 
                user={user}
                key={user.id}
                URL={URL}
                getUsers={getUsers}
                updateUserById={updateUserById}
                setUserUpdate={setUserUpdate}
                reset={reset}
              />
            ))
          } */}
        </div>
        <div className="container-form ">
          <UsersForm 
            createUser={createUser}
            updateUserById={updateUserById}
            userUpdate={userUpdate}
            register={register}
            handleSubmit={handleSubmit}
            reset={reset}
          />
        </div>
      </div>
    </div>
  )
}

export default App
