
import React from 'react'

//importing styled components
import * as S from './dashboard.styles';

//import router dom
import { Link } from 'react-router-dom';

//react icons
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

const Dashboard = () => {

    return (
        <>
            <S.Header>
                <Link to='/' >React Admin Dashboard</Link>
                <a href='https://github.com/Harshsanas/react-admin-ui.git' target="_blank" rel="noreferrer">
                    <label>Github Source</label>
                </a>
            </S.Header>
            <S.MainContainer>
                <input
                    name='userSearch'
                    className='search-input'
                    placeholder='Search by name, email or role'
                />
            </S.MainContainer>
            <S.TableContainer>
                <table>
                    <thead>
                        <td>
                            <input type='checkbox' id='selectAllUsers' className='select-checkbox' />
                            <label htmlFor='selectAllUsers'>Select All Users</label>
                        </td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Role</td>
                        <td>Action</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type='checkbox' id='selectAllUsers' className='select-checkbox' />
                            </td>
                            <td>
                                Harshit
                            </td>
                            <td>
                                xyz@gmail.com
                            </td>
                            <td>
                                Admin
                            </td>
                            <td>
                                <FaPencilAlt
                                    className="icon pencil"
                                />
                                <FaTrash
                                    className="icon delete"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </S.TableContainer>
        </>
    )
}

export default Dashboard