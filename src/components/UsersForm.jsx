import React from 'react'
import { useForm } from 'react-hook-form';

const UsersForm = ({createUser, updateUserById, userUpdate, register, handleSubmit, reset  }) => {

    const defaultValue = {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: '',
    }

    const submit = (data) => {
        if (userUpdate !== undefined) {
            updateUserById(userUpdate.id, data)
            reset(defaultValue)
        } else {
            createUser(data)
        }
        reset(defaultValue);
    }

  return (
    <form action="" className="form" onSubmit={handleSubmit(submit)}>
        <h2 className="form-title">New User</h2>
        <div className="input">
            <label htmlFor="first_name"><i className="fa-solid fa-user-large"></i></label>
            <div className="input-name">
                <input type="text" id="first_name" placeholder='first name' {...register('first_name')}/>
                <input type="text" id="last_name" placeholder='last name' {...register('last_name')}/>
            </div>
        </div>
        <div className="input">
            <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
            <input type="email" id="email" placeholder="email" {...register('email')}/>
        </div>
        <div className="input">
            <label htmlFor="password"><i className="fa-solid fa-lock"></i></label>
            <input type="password" id="password" placeholder="password" {...register('password')}/>
        </div>
        <div className="input">
            <label htmlFor="date"><i className="fa-solid fa-cake-candles"></i></label>
            <input type="date" id="date" {...register('birthday')}/>
        </div>
        <div>
            <button className="btn-create">{userUpdate !== undefined ? 'Update': 'Add'} <i className="fa-solid fa-plus"></i></button>
        </div>
    </form>
  )
}

export default UsersForm