import AddApointment from './components/AddApointment';
import Search from './components/Search';
import AddInfo from './components/AddInfo';

import { BiArch } from "react-icons/bi";
import { useCallback, useEffect, useState } from 'react';

function App() {
// data state
const [appointList,setAppointList] = useState([]);
const [query,setQuery] = useState('');
const [sortBy,setSortBy] = useState('petName');

const filterAppointments = appointList.filter(
  item => {
    return (
      item.petName.toLowerCase().includes(query.toLowerCase()) ||
      item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
      item.aptNotes.toLowerCase().includes(query.toLowerCase()) 
    )
  }
).sort(
  (a,b) => {
    return (a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 : 1 )
  }
)

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
  //  40 - 55 분
    <article>
      <h3>
        <BiArch />
        예약시스템
        </h3>
      <AddApointment 
         onSendAppointment = {
          myAppointment => setAppointList([...appointList,myAppointment])
         }
         lastId={
          appointList.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max,0)
         }
         />
      <Search 
        query = {query}
        onQueryChange = {(myQuery) => setQuery(myQuery)}
        sortBy = {sortBy}
        onSortChange = {(mySortBy) => setSortBy(mySortBy)}
        />
      <div id="list">
        <ul>
         {filterAppointments.map(
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
