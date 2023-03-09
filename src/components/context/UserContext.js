import { createContext, useEffect, useState } from "react";


const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [theme, setTheme] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem("userId");
        if (data !== null) {
            setTheme(true);
        } else {
            setTheme(false);
        }
    }, []);

    const values = {
        theme,
        setTheme
    }

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>

}

export default UserContext;