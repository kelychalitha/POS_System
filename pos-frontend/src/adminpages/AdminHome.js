import React, { useEffect } from 'react'
import './Admin.css'
import AdminNavBar from './components/AdminNavBar'

export default function AdminHome() {

  useEffect(() => {

  }, [])

  return (
    <div>
      <AdminNavBar />

      <div className="admin-home">
        <div className="admin-home-content">
          <h1>WELCOME</h1>
          <h2>Admin Dashboard</h2>   
        </div>
      </div>
    </div>
  )
}
