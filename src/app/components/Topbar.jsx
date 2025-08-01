"use client"
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { RiLogoutCircleRLine } from "react-icons/ri"
import { useEffect } from 'react'
import { useTideCloak } from '@tidecloak/nextjs';

const Topbar = ({ showSearch = false, searchValue = '', onSearchChange }) => {

  const { logout } = useTideCloak()

  // State to manage dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false)
  // const navigate = useNavigate()

  // State to manage full name and user avatar
  // const [profileName, setProfileName] = useState('')
  // const [userAvatar, setUserAvatar] = useState('')
  // const fullName = IAMService.getFullName()

  // useEffect( () => {
    
  //   // setProfileName
  //   const profileName = fullName.split(' ').map(name => name.charAt(0) + name.slice(1)).join(' ')
  //   setProfileName(profileName)

  //   // setUserAvatar
  //   const avatarInitials = fullName.split(' ').map(name => name.charAt(0)).join('')
  //   setUserAvatar(avatarInitials)

  // }, [fullName])


  return (
    <div className="bg-white shadow-md px-6 py-4 flex flex-row items-center justify-between gap-4 top-0 z-10">
      <div
        onClick={console.log('hello')}
        className="text-xl font-bold text-blue-600 cursor-pointer"
      >
        Note
      </div>

      {showSearch && (
        <input
          type="text"
          placeholder="Search notes..."
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded focus:outline-none"
        />
      )}

      {/* Avatar and dropdown */}
      <div onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)} className="relative">
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => setDropdownOpen((prev) => !prev)}
          >
          <span className="font-medium">TEST</span>
          <div 
          className="bg-blue-600 text-white pb-1 rounded-full w-10 h-10 flex items-center justify-center font-semibold uppercase">
            TT
          </div>
            
          {dropdownOpen && (
              <div className="absolute flex justify-center items-center right-0 w-34 bg-white border rounded-xl shadow-md mt-[99px]">
                <button
                  onClick={logout}
                  className="block w-full text-[18px] text-left px-4 py-2 hover:bg-slate-100 hover:text-red-500 rounded-xl cursor-pointer h-14 "
                  >
                  {/* <RiLogoutCircleRLine className="inline mr-5" /> */}
                  Logout
                </button>
              </div>
              )}
          </div>
      </div>
    </div>
  )
}

export default Topbar
