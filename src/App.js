import AddApointment from './components/AddApointment';
import Search from './components/Search';
import AddInfo from './components/AddInfo';

import { BiArch } from "react-icons/bi";

function App() {
  return (
    <article>
      <h3>
        <BiArch />
        예약시스템
        </h3>
      <AddApointment />
      <Search />
      <div id="list">
        <ul>
         <AddInfo />
        </ul>
      </div>
    </article>
  );
}

export default App;
