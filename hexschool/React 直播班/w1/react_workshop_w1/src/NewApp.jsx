function NewApp() {
    const num = 100;

    return (<div style={{ paddingBottom: 20 }}>
        我建立的第一個元件 數字 {num*2} <br></br>
        {num === 100 ? <div>是</div> : <div>不</div>} 等於 100
        {/* 嘗試寫一點註解 */}
        <div className="testClass">測試卡片</div>
        {/* 留意行內樣式的寫法 */}
        <label style={{ marginRight: 10 }}htmlFor="testInput">這是 Label</label> 
        <input type="text" id="testInput" disabled />
        <img src="" alt="" />  
        {/* 標籤都會自閉 */}
        </div>
        )
}

export default NewApp;