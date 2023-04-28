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
    <header
      className="flex flex-col sm:flex-row m-5 justify-between 
    items-center md:items-stretch h-auto"
    >
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {headerItems.map((items) => (
          <HeaderItem key={items.title} title={items.title} Icon={items.Icon} />
        ))}
        {/* <HeaderItem title="HOME" Icon={HomeIcon} /> */}
      </div>
      <h1 className="text-xl md:text-3xl font-bold whitespace-nowrap">
        Movie-Library
      </h1>
    </header>
  );
}

export default Header;
