import SignButton from "./SignButton"

interface NavbarProps { currentUser?: any }

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
    return (
        <nav className="fixed w-full bg-gray-100 z-10 shadow-md p-[1rem] flex justify-between items-center">
            <div className="tracking-widest">LOGO</div>
            <SignButton currentUser={currentUser} />
        </nav>
    )
}

export default Navbar