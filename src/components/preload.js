import React from 'react';
function PreLoad(props) {
    return (
        <div id={props.loading ? 'preloader' : 'preloader-none'}></div>
    );
}

export default PreLoad;