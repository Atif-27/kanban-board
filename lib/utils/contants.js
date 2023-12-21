// export const statusGroup = [
//   { value: "Backlog" },
//   { value: "Todo" },
//   { value: "In Progress" },
//   { value: "Done" },
//   { cancelled: "Done" },
// ];
"use client";
export const ticketGroups = [
  {
    status: { value: "Backlog", name: "Backlog" },
    priority: { value: 0, name: "No Priority" },
  },
  {
    status: { value: "Todo", name: "Todo" },
    priority: { value: 1, name: "Low" },
  },
  {
    status: { value: "In progress", name: "In progress" },
    priority: { value: 2, name: "Medium" },
  },
  {
    status: { value: "Done", name: "Done" },
    priority: { value: 3, name: "High" },
  },
  {
    status: { value: "Cancelled", name: "Cancelled" },
    priority: { value: 4, name: "Urgent" },
  },
];

// Array of Tailwind CSS background color classes
const bgColorClasses = [
  "bg-blue-500",
  "bg-fuchsia-400",
  "bg-yellow-500",
  "bg-sky-500",
  "bg-indigo-600",
  "bg-purple-500",
  "bg-rose-500",
];

// Function to get a random background color class
export const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * bgColorClasses.length);
  return bgColorClasses[randomIndex];
};
