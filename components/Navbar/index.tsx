const Navbar = () => {
    return (
    <nav className="nav-bar p-4 relative z-10">
      <a href="/" className="nav-logo-link">
        <img src="/icons/logo.png" className="nav-logo" />
      </a>
     
      <ul>
        <li><a href="https://www.tangphucofficial.com">Hai Ly?</a></li>
        <li><a href="/fansite">Đi vào gừng</a></li>
        <li><a href="/about">đi tìm củi</a></li>
        <li><a href="/schedule">xây đập</a></li>
      </ul>
    </nav>
    );
}
export default Navbar;
