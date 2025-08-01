"use client"
import { useTideCloak } from '@tidecloak/nextjs';
import Topbar from '../components/Topbar'
import { useState } from 'react';

export default function Dashboard()  {
    const [filteredNotes, setFilteredNotes] = useState([])
    const [search, setSearch] = useState("")
    const [error, serError] = useState("")
    const { logout } = useTideCloak()


    return (
      <>
        <div className="bg-gray-100 min-h-screen">
          {/* Topbar with search */}
          <Topbar
            showSearch={true}
            searchValue={search}
            onSearchChange={setSearch}
          />

          {/* Notes Section */}
          <div className="p-5">
            {error && <p className="text-red-500 mb-4">{error}</p>}

            {filteredNotes.length === 0 ? (
              <p className="text-center text-gray-500 mt-8">No notes found.</p>
            ) : (
              <div className="grid gap-4.5 md:grid-cols-2 lg:grid-cols-3">
                {filteredNotes.map((note) => (
                  <Link
                    to={`/notes/${note.id}`}
                    key={note.id}
                    className="bg-white shadow hover:shadow-2xl p-4 border hover:border-blue-500 rounded transform transition duration-500 hover:scale-105 "
                  >
                    <h2 className="text-xl font-semibold">{note.title}</h2>
                    <p className="text-sm text-gray-600">
                      {new Date(note.timestamp).toLocaleString()}
                    </p>
                    <p className="mt-2">
                      {note.body.length > 300
                        ? note.body.slice(0, 300) + "..."
                        : note.body}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div
            to="/notes/new"
            className="fixed bottom-6 pb-3.5 right-6 md:right-10 bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center  text-6xl shadow-lg hover:bg-blue-700 transition"
            title="Create New Note"
          >
            +
          </div>
        </div>
      </>
    );
}

