import { Chat, Login } from "../components";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        comp: <Login/>
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        comp: <Chat/>
    }
]