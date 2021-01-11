import React, {useState} from 'react';

const Home=()=>{
    const [account, setAccount]=useState("");
    const [textarea,setTextArea]=useState("");
    const [selval, setSelValue]=useState("");
    return (
        <div>
            <input type="text" placeholder="請輸入帳號" value={account} 
              onChange={(e)=>{setAccount(e.target.value)}}/>
            <div>
                目前帳號:{account}
            </div>
            <button onClick={()=>{setAccount("")}}>取得新的帳號</button><br/>
            <textarea rows="5" cols="40" value={textarea} 
                      onChange={(e)=>{setTextArea(e.target.value)}}></textarea><br/>
            <button onClick={()=>{setTextArea("")}}>Clear TextArea</button>
            <div><pre>{textarea}</pre></div>
            <select value={selval} onChange={(e)=>{setSelValue(e.target.value)}}>
                <option value="123">123</option>
                <option value="456">456</option>
            </select>
            <div>目前選項:{selval}</div>
            <button onClick={()=>{setSelValue("789")}}>改為789</button>
        </div>
    )
}

export default Home;