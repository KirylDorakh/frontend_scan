import React from 'react';

import cl from "./UserInfo.module.css"

import AvatarImg from '../../../../img/avatar/avatar.jpg'

const UserInfo = ({handleLogOut}) => {

    const avatarStyle = {
        backgroundImage: `url(${AvatarImg})`,
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundSize: 'cover',
    }

    return (
        <div className={cl.userInfo}>
            <div className={cl.name}>
                <p>Алексей А.</p>
                <button onClick={handleLogOut}>Выйти</button>
            </div>
            <div className={cl.userImg} style={avatarStyle}></div>
        </div>
    );
};

export default UserInfo;