export const Nav = (props) => {
    const {children, section} = props;
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-primary fixed-top">
          <div className="container p-2 ">
            <a className="navbar-brand" href="#">{children}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <a className="nav-link active" href="#">Welcome</a>
                <a className="nav-link" href="/menu">Menu</a>
                <a className="nav-link" href="#">Ciptakan resep</a>
                <a className="nav-link disabled" aria-disabled="true">Login</a>
              </div>
            </div>
          </div>
        </nav>
      </>

    );
}
