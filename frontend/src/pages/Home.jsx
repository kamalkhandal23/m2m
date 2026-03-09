import { useState } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState("");

  const testAPI = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/health`
      );
      setData(res.data.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Frontend Working</h1>
      <button onClick={testAPI}>Test Backend</button>
      <p>{data}</p>
    </div>
  );
}

export default Home;