import {useState, useEffect } from "react";


function App() {
  const [title,setTitle] = useState('happy');
  // mount,unmount,deps 변경이 되면 사용 렌더링
  useEffect(() => {console.log('effect')},[title]);
  useEffect(() => {console.log('인수없는 effect')},[]);
  return (
    <div>
       <h1>{title}</h1>
       <button onClick={() => setTitle('first')}>first</button>
       <button onClick={() => setTitle('second')}>second</button>
    </div>
  );
}

export default App;
