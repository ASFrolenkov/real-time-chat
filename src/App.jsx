import { Navbar, Loader } from './components';
import './app.css'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import {useAuthState} from 'react-firebase-hooks/auth'
import { useContext } from "react"
import { Context } from '.';


function App() {
	const {auth} = useContext(Context)
    const [loading] = useAuthState(auth)

	return (
		loading ? 
				<Loader/>
				:
				<BrowserRouter>
					<Navbar/>
					<AppRouter/>
				</BrowserRouter>
		
	);
}

export default App;
