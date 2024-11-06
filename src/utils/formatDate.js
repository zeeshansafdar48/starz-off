export function formatDate(dateString) {
  const date = new Date(dateString);

  // Use Intl.DateTimeFormat to format the date
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);

  return formattedDate;
}
