
import React, { useEffect, useState } from 'react'

//importing styled components
import * as S from './dashboard.styles';

//import router dom
import { Link } from 'react-router-dom';

//react icons
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

const Dashboard = () => {

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectAll, setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [editableRows, setEditableRows] = useState([]);

    const usersPerPage = 10;
    useEffect(() => {
        fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const filteredUsers = users.filter(
        user =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.role.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSelectAll = () => {
        const visibleIds = currentUsers.map(user => user.id);
        setSelectedItems(selectAll ? [] : visibleIds);
        setSelectAll(!selectAll);
    };
    const handleSelectItem = (itemId) => {
        setSelectedItems(prevSelected => {
            if (prevSelected.includes(itemId)) {
                return prevSelected.filter(id => id !== itemId);
            } else {
                return [...prevSelected, itemId];
            }
        });
    };

    const handleDeleteSelected = () => {
        const updatedUsers = users.filter(user => !selectedItems.includes(user.id));
        setUsers(updatedUsers);
        setSelectedItems([]);
    };

    const handleEditItem = itemId => {
        setEditableRows(prevEditableRows => {
            if (prevEditableRows.includes(itemId)) {
                return prevEditableRows.filter(id => id !== itemId);
            } else {
                return [...prevEditableRows, itemId];
            }
        });
    };

    const handleSaveEdit = (itemId, field, value) => {
        const updatedUsers = users.map(user =>
            user.id === itemId ? { ...user, [field]: value } : user
        );
        setUsers(updatedUsers);
        setEditableRows(prevEditableRows => prevEditableRows.filter(id => id !== itemId));
    };

    const handleDeleteItem = (itemId) => {
        const updatedUsers = users.filter(user => user.id !== itemId);
        setUsers(updatedUsers);
        setSelectedItems(prevSelected => prevSelected.filter(id => id !== itemId));
    };

    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;

    const currentUsers = filteredUsers.slice(startIndex, endIndex);

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
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
            </S.MainContainer>
            <S.TableContainer>
                <table>
                    <thead>
                        <td>
                            <input
                                type='checkbox'
                                id='selectAllUsers'
                                checked={selectedItems.length === filteredUsers.length}
                                className='select-checkbox'
                                onChange={handleSelectAll}
                            />
                            <label htmlFor='selectAllUsers'>Select All Users</label>
                        </td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Role</td>
                        <td>Action</td>
                    </thead>
                    <tbody>
                        {currentUsers.map(user => (
                            <tr key={user.id}>
                                <td>
                                    <input
                                        type='checkbox'
                                        id={`user_${user.id}`}
                                        checked={selectedItems.includes(user.id)}
                                        onChange={() => handleSelectItem(user.id)}
                                        className='select-checkbox'
                                    />
                                </td>
                                <td>
                                    {editableRows.includes(user.id) ? (
                                        <input
                                            type='text'
                                            value={user.name}
                                            onChange={(e) => setUsers((prevUsers) => prevUsers.map((prevUser) => (prevUser.id === user.id ? { ...prevUser, name: e.target.value } : prevUser)))}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    handleSaveEdit(user.id, 'name', e.target.value);
                                                }
                                            }}
                                        />
                                    ) : (
                                        user.name
                                    )}
                                </td>
                                <td>
                                    {editableRows.includes(user.id) ? (
                                        <input
                                            type='text'
                                            value={user.email}
                                            onChange={(e) => setUsers((prevUsers) => prevUsers.map((prevUser) => (prevUser.id === user.id ? { ...prevUser, email: e.target.value } : prevUser)))}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    handleSaveEdit(user.id, 'email', e.target.value);
                                                }
                                            }}
                                        />
                                    ) : (
                                        user.email
                                    )}
                                </td>
                                <td>
                                    {editableRows.includes(user.id) ? (
                                        <input
                                            type='text'
                                            value={user.role}
                                            onChange={(e) => setUsers((prevUsers) => prevUsers.map((prevUser) => (prevUser.id === user.id ? { ...prevUser, role: e.target.value } : prevUser)))}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    handleSaveEdit(user.id, 'role', e.target.value);
                                                }
                                            }}
                                        />
                                    ) : (
                                        user.role
                                    )}
                                </td>
                                <td>
                                    <FaPencilAlt className="icon pencil" onClick={() => handleEditItem(user.id)} />
                                    <FaTrash className="icon delete" onClick={() => handleDeleteItem(user.id)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </S.TableContainer>
            <S.Pagination>
                <button
                    className='delete-btn'
                    onClick={handleDeleteSelected}>
                    Delete Selected
                </button>
                <button
                    className='pagination-btn'
                    onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>{`Page ${currentPage} of ${totalPages}`}</span>
                <button
                    className='pagination-btn'
                    onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </S.Pagination>
        </>
    )
}

export default Dashboard