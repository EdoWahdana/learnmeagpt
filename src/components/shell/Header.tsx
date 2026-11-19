import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Nav } from "./Nav";
import { Search } from "./Search";
import { SearchSlot } from "./SearchSlot";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="shell-column shell-header">
      <div className="shell-top">
        <Logo />
        <div className="shell-top-actions">
          <Menu />
          <ThemeToggle />
        </div>
      </div>
      <SearchSlot>
        <Search />
      </SearchSlot>
      <div className="section-nav-wide">
        <Nav />
      </div>
    </header>
  );
}
