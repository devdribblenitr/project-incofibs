import React from 'react'

function AccountIcon({active, toggle}) {
    
    const normalStateTop = { width: "28px", height: "4px", backgroundColor: "#444", marginLeft: "auto", marginRight: "auto", marginTop: "auto", marginBottom: "4px" }

    const normalStateBottom = { width: "18px", height: "4px", backgroundColor: "#444", margin: "4px auto auto 6px" }

    const activeStateTop = {
        width: "30px", height: "2px", backgroundColor: "#444", marginLeft: "auto", marginRight: "auto", marginTop: "auto", marginBottom: "-1px", transform: "rotate(45deg)"
    }

    const activeStateBottom = { width: "30px", height: "2px", backgroundColor: "#444", margin: "-1px auto auto auto", transform: "rotate(-45deg)" }

    return (
        <div style={{ width: "40px", height: "40px", display: "flex", justifyContent: "center", flexDirection: "column" }} onClick={toggle}>
            <div style={active?activeStateTop: normalStateTop} className="ease-in-out duration-300 rounded"></div>
            <div style={active?activeStateBottom: normalStateBottom} className="ease-in-out duration-300 rounded"></div>
        </div>
    )
}

export default AccountIcon