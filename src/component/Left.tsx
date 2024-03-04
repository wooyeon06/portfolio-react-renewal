"use client"

/* eslint-disable @next/next/no-img-element */
import { Hr } from "./Styles";
import I from "/public/images/i.png";

export default function Left() {
    return (
        <>

            <img id="img01" src={I.src} alt="my" className="w-full" />

            <div className="mt-[30px]">
                <strong className="font-700 vegur">Wlog</strong>
            </div>

            <div className="mt-[5px]">
                <p className="vegur">Est placerat in egestas erat imperdiet</p>
            </div>

            <div className="h-[66px] flex items-center">
                <img id="ico_main" src="/images/ico_mail.png" alt="my" className="w-[15px] h-[15px]" />
                <span className="ml-[5px]">wooyeon06@gmail.com</span>
            </div>
            <Hr></Hr>

            <div className="mt-[25%] mb-[15px]">

                <button
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse"
                    aria-expanded="true"> INTRODUCE </button>
                <div className="collapse show" id="home-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">About me</a></li>
                        <li><a href="#none" className="move_scroll link-dark d-inline-flex text-decoration-none rounded" data-target="introduce_2">Advantages</a></li>
                    </ul>
                </div>


            </div>
            <p className="my-[15px]"><strong className="font-700 vegur">Project</strong></p>
            <p className="my-[15px]"><strong className="font-700 vegur">Skill</strong></p>


        </>
    );
}   