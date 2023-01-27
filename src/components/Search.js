import { BiSearch,BiCaretDown,BiCheckboxChecked } from "react-icons/bi";

function Search() {
  return (
    <div id="search">
       <p>
        <BiSearch />
        <input type="text" placeholder="search" />
        <button type="button"><BiCaretDown /></button>
        <ul>
          <li>애기이름 <BiCheckboxChecked /></li>
          <li>예약자명 <BiCheckboxChecked /></li>
          <li>날짜 <BiCheckboxChecked /></li>
        </ul>
       </p>
    </div>
  );
}

export default Search;
// 40 - 50