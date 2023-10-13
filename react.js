import {useEffect, useState} from 'react';

export default function App() {
  const [data, setData] = useState("");
  const getData = async () => {
    const resp = await fetch('https://api.sampleapis.com/avatar/info');
    const json = await resp.json();
    setData(json);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}