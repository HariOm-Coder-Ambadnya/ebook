import { Outlet, Link } from 'react-router-dom';

export function Error(){
    return(
        <>
            <p>404 Page Not Found</p>
            <p>Go to <Link to="/apps">Product</Link></p>
        </>
    )
}