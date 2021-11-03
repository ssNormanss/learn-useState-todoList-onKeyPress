import "./styles.css";
import { useState } from "react";

export default function App() {
  //const storageJobs = JSON.parse(localStorage.getItem('jobs'))
  //JSON.parse(storageJobs)

  const [job, setJob] = useState("");

  //const [jobs, setJobs] = useState(storageJobs ?? []);

  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    return storageJobs ?? [];
  });

  // const handleInput = () => {
  //   setJobs((prev) => {
  //     const newJobs = [...prev, job];

  //     //save to localStorage
  //     const jsonJobs = JSON.stringify(newJobs);
  //     localStorage.setItem("jobs", jsonJobs);

  //     return newJobs;
  //   });
  //   setJob("");
  // };

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];

      //save to localStorage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });
    setJob("");
  };

  return (
    <div className="App" style={{ padding: 32 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}
