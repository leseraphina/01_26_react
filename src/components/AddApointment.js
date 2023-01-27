import { useState } from 'react';
import {BiCalendarPlus} from 'react-icons/bi';

// || && 연산자 => 출력값
// () => {} 함수형, 함수형 => () => {}
// 컴포넌트 나누기
// 함수명, 이름없는 함수 변수 -> react , component JSX

function AddWrite({toggleForm}){
  if(!toggleForm){
    return null;
  }
  return (
    <>
    <ul>
        <li>
          <label htmlFor="userName">집사명</label>
          <input type="text" id="userName" />
        </li>
        <li>
          <label htmlFor="userChildren">애기명</label>
          <input type="text" id="userChildren" />
        </li>
        <li>
          <label htmlFor="userDate">예약일</label>
          <input type="date" id="userDate" />
        </li>
        <li>
          <label htmlFor="userTime">예약시간</label>
          <input type="time" id="userTime" />
        </li>
        <li>
          <label htmlFor="userData">기타설명</label>
          <textarea id="userData"></textarea>
        </li>
      </ul>
      <p>
          <button type="submit">예약하기</button>
        </p>
    </>
  )
}

function AddApointment() {
  // state
const [toggleForm,setToggleForm] = useState(false)

  return (
    <div id="appoint">
      <h4 onClick={() => {setToggleForm(!toggleForm)}}>
        <BiCalendarPlus />
        예약하기</h4>
      <AddWrite 
        toggleForm = {toggleForm}/>
    </div>
  );
}

export default AddApointment;
