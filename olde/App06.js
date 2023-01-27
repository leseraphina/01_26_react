import { useEffect, useState } from "react";


function App() {
  const [data,setData] = useState(null);
  useEffect(() => {
    fetch(`./data.json`)
    .then(response => response.json())
    .then(data => setData(data))
  },[])
  if(data){
    return (
      <pre>{JSON.stringify(data,null,2)}</pre>
    )
  }
  return (
    <div>

    </div>
  );
}

export default App;
