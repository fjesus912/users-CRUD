import { IconGift, IconPencil, IconTrash } from "@tabler/icons-react"

const User = ({
  userInfo,
  handleClickUpdate,
  handleOpenDeleteModal
}) => {
  return (
    <article className="border-2 py-4 px-5 rounded-2xl bg-white grid gap-2">
      <h5 className="text-xl">{userInfo.first_name} {userInfo.last_name}</h5>
      <hr />
      <div className="grid">
        <span className="text-[#9a9a9a]">Email</span>
        <span>{userInfo.email}</span>
      </div>
      <div className="grid">
        <span className="text-[#9a9a9a]">Birthday</span>
        <span className="flex gap-1 items-center"><IconGift />{userInfo.birthday}</span>
      </div>
      <hr />
      <div className="flex gap-3 justify-end items-center">
        <button onClick={() => handleClickUpdate(userInfo)} className="text-white bg-yellow-400 hover:bg-yellow-500 p-2 rounded-md transition-colors">
          <IconPencil />
        </button>
        {/* <button onClick={() => deleteUser(userInfo.id)} className="text-white bg-[#d85d5d] hover:bg-[#d93f3f] p-2 rounded-md transition-colors"> */}
        <button onClick={() => handleOpenDeleteModal(userInfo.id)} className="text-white bg-[#d85d5d] hover:bg-[#d93f3f] p-2 rounded-md transition-colors">
          <IconTrash />
        </button>
      </div>

    </article>
  )
}
export default User