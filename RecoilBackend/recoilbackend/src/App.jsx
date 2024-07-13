import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import {notifications,totalNotificationSelector} from './compounds/Atoms'

function App() {
  return(
    <RecoilRoot>
        <Allnotification/>
    </RecoilRoot>
  )
}

function Allnotification(){
    const [notification,setnotification] = useRecoilState(notifications)
    const totalNotificationCount = useRecoilValue(totalNotificationSelector)

    // useEffect(() => {
    //     // fetch
    //     axios.get("https://sum-server.100xdevs.com/notifications")
    //       .then(res => {
    //         setnotification(res.data)
    //       })
    //   }, [])
    return(
        <>
      <button>Home</button>
      
      <button>My network ({notification.network >= 100 ? "99+" : notification.network})</button>
      <button>Jobs {notification.jobs}</button>
      <button>Messaging ({notification.messaging})</button>
      <button>Notifications ({notification.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
        </>
    )
}

export default App
