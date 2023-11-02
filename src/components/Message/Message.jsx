import React, { useContext, useState } from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import { Drawer, IconButton } from '@mui/material';
import { newsContext } from '../../Context'
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Message.css'

export default function Message({ data, endpoint, id }) {

    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState(null)
    const [value, setValue] = useState("")
    const { get_doc, news, set_doc } = useContext(newsContext)


    const handleGet = async () => {
        setOpen(true);
        get_doc(`${endpoint}-${id}`,).then(res => setMessage(res))
        get_doc(`${endpoint}-${id}`,).then(res => console.log(res))
    }

    const handleSend = async () => {
        console.log(message)
        if (message) {
            console.log("ADDING INTO ARRAY")
            set_doc(`${endpoint}-${id}`, { userMessage: [...message?.userMessage, value] })
            handleGet();
        } else {
            console.log("ELSE")
            set_doc(`${endpoint}-${id}`, { userMessage: [value] })
            handleGet();
        }
        setValue(" ")
    }

    return (
        <div>
            <IconButton className='commentBtn' onClick={() => { handleGet() }}><ChatIcon /></IconButton>

            <Drawer
                anchor={"bottom"}
                open={open}
                onClose={() => setOpen(false)}
            >
                <section className='message'>
                    <h2>Comments</h2>

                    <div className='comments'>
                        {!message ? (<><h1>no comment</h1></>) : (
                            <>
                                {
                                    message?.userMessage.map((e, i) => (
                                        <div key={i} className='realComment'>
                                            <div><AccountCircleIcon/>User</div>
                                            <div>{e}</div>
                                        </div>
                                    ))
                                }
                            </>
                        )}
                    </div>

                    <div className='message_input'>
                        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Add a comment...' />
                        <div><NearMeIcon /><button onClick={handleSend}>Send</button></div>
                    </div>

                </section>
            </Drawer>
        </div>
    )
}
