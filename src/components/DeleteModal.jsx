const DeleteModal = ({
  isShowDeleteModal,
  handleCloseDeleteModal,
  deleteUser
}) => {
  return (
    <section className={`fixed bg-black/25 top-0 bottom-0 left-0 right-0 transition-all flex justify-center items-center p-5 ${isShowDeleteModal ? 'visible opacity-100' : 'invisible opacity-0'}`}>
      <div className="bg-white text-center p-5 rounded-[10px] flex flex-col gap-10 w-[min(100%,_400px)]">
        <h2 className="text-2xl font-light">Are you sure you want to delete this user?</h2>
        <div className="flex gap-10 justify-center items-center">
          <button onClick={handleCloseDeleteModal} className="text-white bg-[#5465FF] hover:bg-[#4957d5] py-2 px-5 rounded-md transition-colors">Cancel</button>
          <button onClick={() => deleteUser(isShowDeleteModal)} className="text-white bg-[#d85d5d] hover:bg-[#d93f3f] py-2 px-5 rounded-md transition-colors">Delete</button>
        </div>
      </div>
    </section>
  )
}
export default DeleteModal