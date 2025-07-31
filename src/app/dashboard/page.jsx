"use client"
import { useTideCloak } from '@tidecloak/nextjs';

export default function Dashboard()  {
    const { logout } = useTideCloak()

    return(
        <>
            <div>
                <h1 className="text-2xl">Welcome to home</h1>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={logout}>Log out</button>

            </div>

        </>
    )
}

