import React from 'react';
import '../style/LayoutHeader.less'
import LayoutHeaderSearch from './LayoutHeaderSearch';

const LayoutHeader = ({img}) => (
    <div class="layout-header">
        <form class="layout-header__settings" action="#">
            <button class="layout-header__button layout-header__button_upload">Upload video</button>
            <button class="layout-header__button layout-header__button_youtube-apps">Open youtube applications</button>
            <button class="layout-header__button layout-header__button_tools">Open account settings</button>
            <button class="layout-header__button_sign-in">Sign in</button>
        </form>
        <button class="layout-header__button layout-header__button_hamburger-menu">
            Toggle menu
        </button>

        <img class="layout-header__logo" src={img}/>
        <LayoutHeaderSearch/>
    </div>);


export default LayoutHeader;