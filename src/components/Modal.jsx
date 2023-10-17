import { IconEye, IconEyeOff, IconX } from "@tabler/icons-react"
import { EMAIL_VALIDATIONS, FIRST_NAME_VALIDATIONS, LAST_NAME_VALIDATIONS, PASSWORD_VALIDATIONS } from "../constants/formValidations"

const Modal = ({
  isShowModal,
  handleCloseModal,
  handleSubmit,
  register,
  submit,
  idUserToEdit,
  toggleShowPass,
  isShowPass,
  errors }) => {

  return (
    <section className={`fixed bg-black/25 top-0 bottom-0 left-0 right-0 transition-all ${isShowModal ? 'visible opacity-100 z-10' : 'invisible opacity-0'}`}>

      <form onSubmit={handleSubmit(submit)} className="bg-[#3C3C3D] rounded-r-[30px] h-screen flex justify-center items-center w-[min(100%,_450px)] relative">
        <button onClick={handleCloseModal} type="button" className="text-white absolute top-8 right-8 hover:text-red-500 transition-colors">
          <IconX />
        </button>
        <div className="w-3/4 grid gap-5">
          <h2 className="text-center text-white text-2xl font-light">
            {idUserToEdit ? "Edit User" : "Create New User"}
          </h2>
          <div className="grid gap-3 relative">
            <label htmlFor="first_name" className="text-white font-light">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="first_name"
              type="text"
              {...register('first_name', FIRST_NAME_VALIDATIONS)}
              placeholder='Enter name'
              className="border border-[#E5E5E5] bg-transparent rounded-md px-3 py-1 outline-none text-white/50"
            />
            {
              errors.first_name && (
                <span className="text-xs text-red-500 absolute -bottom-5 left-3">
                  {errors.first_name.message}
                </span>
              )}
          </div>
          <div className="grid gap-3 relative">
            <label htmlFor="last_name" className="text-white font-light">
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              id="last_name"
              type="text"
              {...register('last_name', LAST_NAME_VALIDATIONS)}
              placeholder='Enter last name'
              className="border border-[#E5E5E5] bg-transparent rounded-md px-3 py-1 outline-none text-white/50"
            />
            {
              errors.last_name && (
                <span className="text-xs text-red-500 absolute -bottom-5 left-3">
                  {errors.last_name.message}
                </span>
              )}
          </div>
          <div className="grid gap-3 relative">
            <label htmlFor="email" className="text-white font-light">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="text"
              {...register('email', EMAIL_VALIDATIONS)}
              placeholder='Enter email'
              className="border border-[#E5E5E5] bg-transparent rounded-md px-3 py-1 outline-none text-white/50" />
            {
              errors.email && (
                <span className="text-xs text-red-500 absolute -bottom-5 left-3">
                  {errors.email.message}
                </span>
              )}
          </div>
          <div className="grid gap-3 relative">
            <label htmlFor="password" className="text-white font-light">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              type={isShowPass ? "text" : "password"}
              {...register('password', PASSWORD_VALIDATIONS)}
              placeholder='Password'
              className="border border-[#E5E5E5] bg-transparent rounded-md px-3 py-1 outline-none text-white/50" />
            <button className="text-white absolute top-[41px] right-3" onClick={toggleShowPass} type="button">
              {isShowPass ?
                <IconEyeOff />
                :
                <IconEye />
              }
            </button>
            {
              errors.password && (
                <span className="text-xs text-red-500 absolute -bottom-5 left-3">
                  {errors.password.message}
                </span>
              )}
          </div>
          <div className="grid gap-3">
            <label htmlFor="birthday" className="text-white font-light">
              Birthday
            </label>
            <input
              id="birthday"
              type="date"
              {...register('birthday')}
              className="border border-[#E5E5E5] bg-transparent rounded-md px-3 py-1 outline-none text-white/50" />
          </div>
          <button type="submit" className="rounded-md bg-[#5465FF] text-white py-2 transition-colors mt-7 hover:bg-[#4957d5]">{idUserToEdit ? "Edit" : "Create"}</button>
        </div>
      </form>

    </section>
  )
}
export default Modal