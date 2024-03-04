"use client"

import Header from "@/component/Header";
import Left from "@/component/Left";
import styled from "styled-components";


const MWrap = styled.div`
max-width: 980px;
margin: 0 auto;
padding-left: 15px;
padding-right: 15px
`



const Wrap = styled.div`
max-width: 980px;
margin: 0 auto;
padding-left: 15px;
padding-right: 15px
`


export default function Home() {


    return (<>
        <div style={{ width: "100%", height: "100%" }}>
            <Wrap>
                <Header></Header>


                <main className="w-full h-full">
                    <div className="flex flex-row">
                        <div className="w-[23%] mt-3">
                            <Left></Left>
                        </div>
                        <div className="w-[7%] mt-3"></div>
                        <div className="b w-[70%] mt-3">MAIN</div>
                    </div>
                </main>

            </Wrap>
        </div>
    </>);
}
