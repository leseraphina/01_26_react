import AddApointment from './components/AddApointment';
import Search from './components/Search';
import AddInfo from './components/AddInfo';

import { BiArch } from "react-icons/bi";
import { useCallback, useEffect, useState } from 'react';

function App() {
// data state
const [appointList,setAppointList] = useState([]);

const fetchData = useCallback(
  () => {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => setAppointList(data))
  },[]
)
useEffect(
  fetchData,[fetchData]
)
// network -> 무한반복 -> soures -> pause
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
         {appointList.map(
          (appointment) =>
              ( <AddInfo  
                key={appointment.id} 
                appointment={appointment}
                onDelectAppoint={
                  appointmentId => setAppointList(appointList.filter(appointment => appointment.id !== appointmentId))
                }
                />)
         )
          }
        </ul>
      </div>
    </article>
  );
}

export default App;
