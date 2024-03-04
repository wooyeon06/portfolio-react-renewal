"use client"

import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect'
import { useEffect, useState } from "react";

const MWrap = styled.div`
        border-width: 0 0 1px;
        border-color: #e7e7e7;
        border-style: solid;    

        width:100%;
        height:45px;
    `


const Wrap = styled.div`
        width:100%;
        height:90px;
    `

export default function Header() {

    const [width, setWidth] = useState(document.body.clientWidth);
    const handleResize = () => {
        setWidth(document.body.clientWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
    }, []);




    console.log(width);

    return (
        <>
            {width < 600 ? (
                <MWrap className="flex items-center">
                    <a className="mlogo">
                        WLog
                    </a>
                    <div className="h-full mr-[5%] ml-[auto]">
                        <a className="menu-trigger" href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                    </div>
                </MWrap>
            ) :
                (
                    <Wrap className="flex items-center mt-[20px]">
                        <a className="logo">
                            WLog
                        </a>
                        <div className="h-full mr-[5%] ml-[auto] flex items-center">
                            <span className="right-header-item">Tistory</span>
                            <span className="right-header-item-center"> | </span>
                            <span className="right-header-item">Github</span>
                        </div>
                    </Wrap>
                )
            }
        </>
    );
}