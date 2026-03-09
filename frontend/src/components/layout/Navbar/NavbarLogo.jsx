import logo from "../../../assets/logo/m2mlogo.png";

export default function NavbarLogo() {
    return (
        <div className="flex items-center">
            <img
                src={logo}
                alt="M2M Ferries"
                className="h-12 object-contain"
            />
        </div>
    );
}