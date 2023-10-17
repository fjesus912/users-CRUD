import User from "./User"

const UsersList = ({ users, deleteUser, handleClickUpdate, handleOpenDeleteModal, handleCloseDeleteModal, isShowDeleteModal }) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_280px)] justify-center max-w-[1000px] mx-auto gap-5 py-10 px-5">
      {
        users.map((user) => (
          <User key={user.id} 
            userInfo={user}
            deleteUser={deleteUser}
            handleClickUpdate={handleClickUpdate}

            handleOpenDeleteModal={handleOpenDeleteModal}
            handleCloseDeleteModal={handleCloseDeleteModal}
            isShowDeleteModal={isShowDeleteModal} />
      ))}
    </section>
  )
}
export default UsersList