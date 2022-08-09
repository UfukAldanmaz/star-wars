import { useState } from "react";
import MainPage from "./MainPage";
import { Input, StyledLogin } from "./StyledComponents/ScLogin";

const Login = () => {
    const [user, setUser] = useState({
        name: 'admin',
        password: 'admin',
        isAuth: false
    })

    const handleLogin = () => {
        setUser({
            ...user,
            isAuth: true
        })
    }

    return <div>
        {!user.isAuth ?
            <StyledLogin>
                <Input placeholder="name" />
                <Input type='password' placeholder="password" />
                <button onClick={handleLogin}>Login</button>
            </StyledLogin> :
            <MainPage />}
    </div>
}

export default Login;