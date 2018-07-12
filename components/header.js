import React from 'react';
import Link from 'next/link';

const nav = {
    display:"flex",
    width:"100%",
    height:"60px",
    lineHeight:"60px",
    backgroundColor:"black"
}

export default ()=>(
    <div style={nav}>
        <div style={{width:"50%", display:"flex",textAlign:"center"}}>
        <Link href="/">
            <a className="navbox">Home</a>
        </Link>
        <Link href="/write">
            <a  className="navbox">Write</a>
        </Link>
        <Link href="/about">
            <a  className="navbox">About</a>
        </Link>
        <Link href="/login">
            <a  className="navbox">Login</a>
        </Link>
        <style>
            {`
                *{
                    margin:0;
                    padding:0;
                }
                .navbox{
                    flex:1;
                    justify-content:center;
                    font-size:24px;
                    color:white;
                    text-decoration:none;
                    border:solid 1px lightgrey;
                }
                .navbox:hover{
                    font-size:28px;
                }
            `}
        </style>
        </div>
    </div>
)