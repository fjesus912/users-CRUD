import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { BASE_URL, EMPTY_FORM_VALUES } from './constants/users';
import Modal from './components/Modal';
import Header from './components/Header';
import { useForm } from 'react-hook-form';
import UsersList from './components/UsersList';

function App() {
  const [isShowModal, setIsShowModal] = useState(false)
  const [isShowPass, setIsShowPass] = useState(false)

  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false) // Prueba

  const [users, setUsers] = useState([])
  const [idUserToEdit, setIdUserToEdit] = useState(null)

  const { handleSubmit, register, reset, formState } = useForm()
  const { errors } = formState

  const submit = (data) => {
    if (idUserToEdit) {
      updateUser(data)
    } else {
      createUser(data)
    }
  }

  const handleOpenModal = () => {
    setIsShowModal(true)
    setIsShowPass(false)
  }

  const handleCloseModal = () => {
    setIsShowModal(false)
    reset(EMPTY_FORM_VALUES)
    setIdUserToEdit(null)
  }

  const toggleShowPass = () => {
    setIsShowPass(isShowPass => !isShowPass)
  }

  const handleOpenDeleteModal = () => { // Prueba
    setIsShowDeleteModal(true)
  }

  const handleCloseDeleteModal = () => { // Prueba
    setIsShowDeleteModal(false)
  }

  const createUser = (data) => {
    axios
      .post(BASE_URL + '/users/', data)
      .then(() => {
        handleCloseModal()
        getAllUsers()
      })
      .catch((err) => console.log(err))
  }

  const deleteUser = (id) => {
    axios
      .delete(BASE_URL + `/users/${id}/`)
      .then(() => {
        getAllUsers()
        handleCloseDeleteModal()
      })
      .catch((err) => console.log(err))

  }

  const updateUser = (data) => {
    axios
      .put(BASE_URL + `/users/${idUserToEdit}/`, data)
      .then(() => {
        getAllUsers()
        handleCloseModal()
      })
      .catch((err) => console.log(err))
  }

  const getAllUsers = () => {
    axios
      .get(BASE_URL + '/users/')
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err))
  }

  const handleClickUpdate = (userToUpdate) => {
    handleOpenModal()
    reset(userToUpdate)
    setIdUserToEdit(userToUpdate.id)
  }

  useEffect(() => {
    getAllUsers()
  }, []);

  return (
    <main className='min-h-screen font-Lato bg-cover bg-[url("/bg.jpeg")]'>
      <Header handleOpenModal={handleOpenModal} />
      <Modal
        isShowModal={isShowModal}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
        register={register}
        submit={submit}
        idUserToEdit={idUserToEdit}
        toggleShowPass={toggleShowPass}
        isShowPass={isShowPass}
        errors={errors}
      />
        
      <UsersList
        users={users}
        deleteUser={deleteUser}
        handleClickUpdate={handleClickUpdate}
        isShowDeleteModal={isShowDeleteModal}
        handleOpenDeleteModal={handleOpenDeleteModal}
        handleCloseDeleteModal={handleCloseDeleteModal}
      />
    </main>
  );
}

export default App;
