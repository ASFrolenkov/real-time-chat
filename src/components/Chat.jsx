import {useAuthState} from 'react-firebase-hooks/auth'
import { useContext, useState } from "react"
import { Context } from '..';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import {useCollectionData} from 'react-firebase-hooks/firestore'
import Loader from './Loader';
import firebase from 'firebase/compat/app';


const Chat = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }
    
    if (loading) {
        return <Loader/>
    }

    return (
        <Container>
            <Grid container style={{height: window.innerHeight - 50, alignItems: 'center', justifyContent: 'center', marginTop: '20px'}}>
                <div style={{
                    width: '80%',
                    height: '70vh',
                    border: '1px solid gray',
                    overflowY: 'auto'
                }}>
                    {messages.map(message => {
                        return (
                            <div 
                                key={message.createdAt} 
                                style={{margin: '10px',
                                        border: user.uid === message.uid ? '2px solid green' : '2px solid red',
                                        marginLeft: user.uid === message.uid ? '10px' : 'auto',
                                        width: 'fit-content',
                                        padding: '5px'}}>
                                <Grid container>
                                    <Avatar src={message.photoURL}/>
                                    <div>{message.displayName}</div>
                                </Grid>
                                <div>{message.text}</div>
                            </div>
                        )
                    })}
                </div>

                <Grid
                    container
                    direction={'column'}
                    alignItems={'flex-end'}
                    style={{width: '80%'}}>
                        <TextField 
                            variant='outlined' 
                            fullWidth 
                            maxRows={2}
                            value={value}
                            onChange={e => setValue(e.target.value)}/>
                        <Button 
                            variant='outlined' 
                            style={{marginTop: '10px'}}
                            onClick={sendMessage}>Отправить</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Chat