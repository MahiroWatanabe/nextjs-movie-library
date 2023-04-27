import {
  CheckBadgeIcon,
  CircleStackIcon,
  HomeIcon,
  BoltIcon,
  DocumentMagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import HeaderItem from "./HeaderItem";

const headerItems = [
  { title: "HOME", Icon: HomeIcon },
  { title: "TRENDING", Icon: BoltIcon },
  { title: "VERIFIED", Icon: CheckBadgeIcon },
  { title: "COLLECTIONS", Icon: CircleStackIcon },
  { title: "SEARCH", Icon: DocumentMagnifyingGlassIcon },
  { title: "ACCOUNT", Icon: UserIcon },
];
function Header() {
  return (
    <header className="">
      <div>
        {headerItems.map((items) => (
          <HeaderItem key={items.title} title={items.title} Icon={items.Icon} />
        ))}

        {/* <HeaderItem title="HOME" Icon={HomeIcon} /> */}
      </div>
      <h1>Movie-Library</h1>
    </header>
  );
}

export default Header;
