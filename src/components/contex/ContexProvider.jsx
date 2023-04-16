import React, { createContext } from 'react';

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../../firebase/firebase.config';



let auth = getAuth(app)

export let contex = createContext(null)



const ContexProvider = ({ children }) => {


    let handleBTN = (email, passeord) => {

        return createUserWithEmailAndPassword(auth, email, passeord)

    }


    let user = {


        handleBTN

    }



    return (
        <div>

            <contex.Provider value={user}>

                {children}


            </contex.Provider>
        </div>
    );
};

export default ContexProvider;