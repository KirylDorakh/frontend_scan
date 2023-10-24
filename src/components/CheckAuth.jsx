import React from 'react';
import UserService from "../API/services/UserService";
const CheckAuth = () => {
    const token = localStorage.getItem('token')

    const checkLogin = async (token) => {
        try {
            const response = UserService.fetchUser()
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div>

        </div>
    );
};

export default CheckAuth;