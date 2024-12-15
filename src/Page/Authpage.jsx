import React from 'react';

import { Outlet } from 'react-router-dom';
function AuthPage({variable}){
    console.log(variable)
    return (<>
    <div className='w-full h[100vh]'>
       {variable?<Outlet/>:null}
    </div>
    
    
    
 </>
    )

}

export default AuthPage
