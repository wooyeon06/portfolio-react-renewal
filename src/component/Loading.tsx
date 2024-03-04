/* eslint-disable @next/next/no-img-element */
// Loading.js
import React from 'react';
import Spinner from '/public/images/loading_pink.gif';


export default function Loading() {
    return (
        <>
            <div className="loading_backgraound">
                <div className="loading_wrapper">
                    <img src={Spinner.src} alt="로딩중" width="100px" />
                </div>
            </div>
        </>
    );
};