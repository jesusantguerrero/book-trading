import './../assets/css/AppHeader.css';

const AppHeader = ({ action , addBook })=> {
  return(
    <header className="app-header">
      <h1 className="app-header__title"> Book-trading</h1>
      {/* <SearchBox id="main-search" action={action} addBook={addBook}/> */}
      <nav className="app-nav">
        <li><a href="#" className="app-nav__link">Home</a></li>
        <li><a href="#" className="app-nav__link">Books</a></li>
        <li><a href="#" className="app-nav__link">My Books</a></li>
        <li><a href="#" className="app-nav__link"> User Name</a></li>
      </nav>

      <div className="user-info">
        <a></a>
      </div>
    </header>
  )
}

export default AppHeader;