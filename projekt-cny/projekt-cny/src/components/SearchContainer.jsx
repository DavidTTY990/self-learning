export default function SearchContainer({handleCurrentLocationClick}) {
  return (
    <section className="user-search-container">
      <div className="user-search-title-container">
        <h3>工作 + 吸貓 + 咖啡？</h3>
        <h4>快來找最適合你的貓咖！</h4>
        <div className="user-search-input-container">
          <input type="text" placeholder="輸入縣市、地區或店名" />
          <span className="material-symbols-outlined"> search </span>
        </div>
        <div className="user-search-neighborhood-container">
          <div className="user-search-neighborhood-container-text-container">
            <h4>找找附近的貓咖？</h4>
            <p>需開啟瀏覽器定位權限</p>
          </div>
          <button
            type="button"
            className="btn btn-light btn-md"
            onClick={(e) => handleCurrentLocationClick(e)}
          >
            立即搜尋
          </button>
        </div>
      </div>
    </section>
  );
}
