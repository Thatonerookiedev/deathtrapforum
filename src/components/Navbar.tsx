import Link from "next/link";









const gamelink = 'https://gamejolt.com/games/wofliesdiner/413549'


const Navbar = () => {
    return ( 
        <>
            <nav 
                className="navbar-container"
                aria-label="navbar"
            >
                
                <Link href='/' className="navlink" aria-label="NavLink-Posts">Posts</Link>

                <Link href={gamelink} target="blank" className="navlink" aria-label="NavLink-Game">Game</Link>

                <Link href='/' className="navlink" aria-label="NavLink-About">About</Link>
                
            </nav>
        </>
     );
}
 
export default Navbar;












