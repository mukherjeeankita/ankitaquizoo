import React from "react";
const Error =({children})=>{
    return (
<>
<div
    style = {{
        width:"100%",
        padding:"10",
        borderRadius:4,
        backgroundColor:"red",
        textAlign:"center",
        color:"black",
        textTransform:"capitalize",
        marginBottom:20,
    }}
    >
    {children}
</div>
</>
    )
}

export default Error;