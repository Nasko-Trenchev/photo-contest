export default function NavigationHeader(){

    return (
        <header>
        <nav class="navbar__menu">
          <div className="logo">
          <img src="../../" alt="Photo"/>
          </div>
        <ul class="navbar__list">
          <li class="navbar__item"><a class="navbar__link" href="#">Home</a></li>
          <li class="navbar__item"><a class="navbar__link" href="#">Submit Photo</a></li>
          <li class="navbar__item"><a class="navbar__link" href="#">Gallery</a></li>
          <li class="navbar__item"><a class="navbar__link" href="#">Login</a></li>
          <li class="navbar__item"><a class="navbar__link" href="#">Register</a></li>
        </ul>
      </nav>
    </header>
    )
}