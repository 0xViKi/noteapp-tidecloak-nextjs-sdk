'use client';
import { useTideCloak } from '@tidecloak/nextjs';

export default function App() {
  const { login } = useTideCloak();

 
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
        <div className="flex flex-col items-center justify-center mb-4 bg-white shadow-2xl rounded-lg p-6">
          <h1 className="text-2xl font-bold">Welcome to the Note App</h1>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            onClick={login}
          >
            Login
          </button>
        </div>
      </div>
    </>
  )
}
