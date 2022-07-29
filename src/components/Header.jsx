const Header = () => {
  return (
    <div className="Header">
      <header>
        <div className="Top_line_header">
          <div className="Header_info"></div>
            <div className="Logo_top">
            <a href="/">
              <img src="https://qoza.ru/wp-content/uploads/2020/03/logo.png" alt="logo" width="auto" height="50"></img>
            </a>
          </div>
          <div className="Currency">
            <div>RUB</div>
            <div>USD</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
