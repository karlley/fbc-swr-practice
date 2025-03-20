import "./App.css";
import useSWR from "swr";

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };

  const fetcher = ([url, headers]) =>
    fetch(url, { headers }).then((res) => res.json());
  const { data, error, isLoading } = useSWR([url, headers], fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load.</p>;
  return <p>Status: {data.description}</p>;
}

export default App;
