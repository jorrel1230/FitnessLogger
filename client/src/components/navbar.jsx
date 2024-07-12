import './NavbarExtras/Navbar.css'

function Navbar() {
return (
    <div>
        <ul>
            <p>Fitness Logger</p>
            <li className='ml-4'><a href="/">Home</a></li>
            <li><a href="news.asp">News</a></li>
            <li><a href="contact.asp">Contact</a></li>
            <li><a href="/about">About Me</a></li>
        </ul>
    </div>
);
}

export default Navbar;
  