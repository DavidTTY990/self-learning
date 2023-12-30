//ES module 預設匯出
export default {
    data: [
        "這是第一句話",
        "這是第二句話",
        "這是第三句話"
      ],
      //刪除方法
      removeData(id) { //事件
        this.data.splice(id, 1)
        this.render();
      },
      //渲染畫面
      render() { //渲染方法
        const list = document.querySelector(".component ul")
        let content = ""; //待會作為組合 HTML 結構使用的空字串
        this.data.forEach((item, i) => {
          content = `${content}<li>${item} <button type="button" class="btn" data-id="${i}">刪除</button></li>` //帶入變數 content，讓每次 forEach 的重複執行都將 HTML 結構累加在一起
          //console.log(content);
        })
        list.innerHTML = content;
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            //console.log(e.target.dataset.id); //取出陣列項目的索引位置（點擊到的刪除按鈕）
            this.removeData(e.target.dataset.id)
          })
        })
      },
      init() { //生命週期：在載入的時候直接跑一次 
        this.render();
        console.log(this);
      }
}