import React from 'react';

import { Outlet } from 'react-router-dom';
function AuthPage(){
    return (<>
    <div className='w-full h[100vh]'>
    <Outlet/>
    </div>
    
    
    
 </>
    )

}

export default AuthPage
