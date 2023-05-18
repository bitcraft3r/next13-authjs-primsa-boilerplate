import SignButton from "./SignButton"

interface NavbarProps { currentUser?: any }

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
    return (
        <nav>
            Navbar
            <SignButton currentUser={currentUser} />
        </nav>
    )
}

export default Navbar