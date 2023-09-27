import React, { useEffect, useState } from "react";

function DisneylandUSA() {
  const [times, setTimes] = useState(null);

  const fetchData = async () => {
    const url = "http://queue-times.com/parks/16/queue_times.json";

    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      referrerPolicy: "strict-origin-when-cross-origin"
    });
    if (!response.ok) {
      throw new Error(
        `Failed to fetch park data. Status Code: ${response.status}`
      );
    }
    const data = await response.json();

    console.log(data);

    setTimes(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>
        Powered by <a href="https://queue-times.com/en-US">Queue-Times.com</a>
      </p>
    </div>
  );
}
export default DisneylandUSA;
