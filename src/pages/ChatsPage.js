import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ChatsPage = () => {
  const [chats, setChats] = useState([])

  const fetchChats = async () => {
    const { data } = await axios.get('/chats')
    setChats(data)
    console.log(data);
  }

  useEffect(() => {
    fetchChats()
  }, [])
  
  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  )
}

export default ChatsPage