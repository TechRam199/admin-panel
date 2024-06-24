import React, { useEffect, useState } from 'react'

export default function ProtectedRoute({children}) {
    const [isloggedin, setisloggedin] = useState(true);

    useEffect(() => {
        // Login to check if user is logged in 
    const token = localStorage.getItem("toekn");

    fetch("/profile", {token}).then(data => data.json()).then(response => {
        setisloggedin(true);
    })
    }, [])

  return (
    <div>
      {isloggedin ? (children) : null}
    </div>
  )
}
