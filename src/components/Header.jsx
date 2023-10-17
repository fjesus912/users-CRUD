const Header = ({ handleOpenModal }) => {
  return (
    <header className="grid p-5">
      <h1 className="text-[#5465FF] font-medium text-2xl text-center">List of users</h1>
      <button onClick={handleOpenModal} className="rounded-md bg-[#5465FF] text-white transition-colors mt-7 hover:bg-[#4957d5] p-2 px-4 mx-auto">
        Create user
      </button>
    </header>
  )
}
export default Header