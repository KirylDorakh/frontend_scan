import React from 'react';
import {RouterProvider} from "react-router-dom";
import {router, privateRouter} from "./router/routes";
import {useSelector} from "react-redux";

const MyRouter = () => {
    const checkAuth = useSelector(state => state.auth.isAuth)
    return (
        <RouterProvider router={checkAuth ? privateRouter : router} />
    );
};

export default MyRouter;