import DropDown from "./DropDown";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <div className="flex justify-between py-5 px-10 darkFontLight  ">
      <DropDown />
      <ThemeButton />
    </div>
  );
};

export default Navbar;
