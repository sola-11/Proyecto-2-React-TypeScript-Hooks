import { useState } from 'react';

interface User  {
    uid: string;
    name: string;
}


export const Usuario = () => {
const [user, setUser] = useState<User>();

const login= () => {

setUser({
    uid:'ABC123',
    name: 'Solanny Batista'
});

}

    return (
        <div>
            <h3>Usuario: useState</h3>

            <button
            onClick= { login }
            className= "btn btn-outline-primary">
                Login

            </button>

            {
                (!user)
                ? <pre> No hay usuario </pre>
                : <pre> { JSON.stringify(user)} </pre>
            }
            
            <pre> { JSON.stringify( user ) } </pre>

          
        </div>
    )
    }