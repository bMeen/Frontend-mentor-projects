import Logo from "../ui/Logo";

import Profile from "../ui/Profile";

function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-light-grayish-blue p-4 md:py-6">
      <Logo />

      <Profile />
    </header>
  );
}

export default Header;
