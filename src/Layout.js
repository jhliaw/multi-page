import React from 'react';
import {Link} from 'react-router-dom';
const Layout=(props)=>{
    const StyleSheet={
        width:"100vw",
        height:"100vh",
        backgroundColor:(props.location.pathname=="/first")?"#FF2E63":"#08D",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    }
    return(
        <div style={StyleSheet}>
            <nav>
                <Link to="/first">點我連到第一頁</Link>
                <Link to="/second" style={{marginLeft:"20px"}}>點我連到第二頁</Link>
            </nav> 
        {props.children}
        </div>
    );
}

export default Layout;
