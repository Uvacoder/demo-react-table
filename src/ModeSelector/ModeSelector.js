import React from 'react';

export default props =>{
    const url = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
    return (
        <div style={{display:'flex', justifyContent:'center', padding: '50px 0'}}>
            <button onClick={()=>props.onSelect(url)} className="btn">Get data</button>
        </div>
    )
}