import DisplayProvider from "@/app/context/DisplayContext";
import ThemeProvider from "@/app/context/ThemeProvider";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

const Container = async () => {
  const fetchedData = await fetchData();

  // Display Context provider for grouping and sorting state
  // Theme Context provider for light and dark mode*
  return (
    <ThemeProvider>
      <DisplayProvider fetchedData={fetchedData}>
        <Navbar />
        <Dashboard />
      </DisplayProvider>
    </ThemeProvider>
  );
};

export default Container;
async function fetchData() {
  const res = await fetch(process.env.BOARD_API, { cache: "no-cache" });
  const data = await res.json();
  return data;
}
