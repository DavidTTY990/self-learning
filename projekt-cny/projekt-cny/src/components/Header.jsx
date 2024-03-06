export default function Header() {
    return (
      <header className="header-wrapper">
        <div className="announcement">
          <a href="">請支持貓咖，讓貓咖一起變得更好</a>
        </div>
        <div className="main-header">
          <a href="" className="main-logo">
            貓咖 | Cat Cafe
          </a>
          <a href="" className="main-tutorial">
            第一次找貓咖？
          </a>
          <div className="menu-container">
            <button type="button" className="btn btn-dark btn-lg">
              註冊
            </button>
            <button type="button" className="btn btn-light btn-lg ms-3">
              登入
            </button>
          </div>
        </div>
      </header>
    );
}