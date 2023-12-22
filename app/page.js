import Dashboard from "@/components/Dashboard";
import ThemeProvider from "./context/ThemeProvider";
import Navbar from "@/components/Navbar";
import DisplayProvider from "./context/DisplayContext";

export default async function Home() {
  const fetchedData = await fetchData();
  return (
    <div>
      <ThemeProvider>
        <DisplayProvider fetchedData={fetchedData}>
          <Navbar />
          <Dashboard />
        </DisplayProvider>
      </ThemeProvider>
    </div>
  );
}

async function fetchData() {
  const res = await fetch(process.env.BOARD_API, { cache: "no-cache" });
  const data = await res.json();
  return data;
}
