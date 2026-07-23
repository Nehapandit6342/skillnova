import {
    createContext,
    useContext,
    useState
} from "react";


const AuthContext = createContext(null);



export const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(() => {

        try {

            return JSON.parse(
                localStorage.getItem("user")
            ) || null;

        } catch {

            return null;

        }

    });



    const [token, setToken] = useState(

        localStorage.getItem("token") || null

    );




    const login = (userData, token) => {


        localStorage.setItem(
            "user",
            JSON.stringify(userData)
        );


        localStorage.setItem(
            "token",
            token
        );


        setUser(userData);

        setToken(token);


    };






    const logout = () => {


        localStorage.removeItem("user");

        localStorage.removeItem("token");


        setUser(null);

        setToken(null);


    };






    return (

        <AuthContext.Provider

            value={{

                user,

                token,

                login,

                logout,

                isAuthenticated: Boolean(token)

            }}

        >

            {children}

        </AuthContext.Provider>

    );


};






export const useAuth = () => {


    const context = useContext(AuthContext);


    if(!context){

        throw new Error(
            "useAuth must be used inside AuthProvider"
        );

    }


    return context;


};