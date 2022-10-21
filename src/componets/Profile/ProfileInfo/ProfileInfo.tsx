import React from 'react';
import s from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <img src="https://pagosaviews.com/wp-content/uploads/2022/02/hero-balloon-adventures-t.jpg"/>
            <div className={s.descriptionBlock}>Ava + des</div>
        </div>
    );
};
