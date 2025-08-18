import logo from "../assets/favicon.svg"
export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="left-side">
          <img src={logo} alt="website logo" />
          <h2>Flair.ai</h2>
        </div>
        <ul className="right-side">
          <li>Features <i class="ri-arrow-down-wide-line"></i></li>
          <li>Pricing</li>
          <li>Enterpise</li>
          <li>Community Gallery</li>
          <li>Resources <i class="ri-arrow-down-wide-line"></i></li>
          <li>
            <button>Try Flair AI for free</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}