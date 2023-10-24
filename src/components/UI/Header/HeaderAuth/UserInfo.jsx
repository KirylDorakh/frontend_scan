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
            <div className={cl.info}>
                <div className={cl.description}>
                    <p>Использовано компаний </p>
                    <p>Лимит по компаниям</p>

                </div>
                <div className={cl.numbers}>
                    <p>34</p>
                    <p className={cl.limit}>100</p>
                </div>

            </div>
            <div className={cl.user}>
                <div className={cl.name}>
                    <p>Алексей А.</p>
                    <button onClick={handleLogOut}>Выйти</button>
                </div>
                <div className={cl.userImg} style={avatarStyle}></div>
            </div>
        </div>
    );
};

export default UserInfo;