export default function getDate({
  ndays = 0,
  date = new Date()
}: {
  ndays?: number,
  date?: Date
}): string {
  date.setDate(date.getDate() - ndays);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  
  return `${year}-${month}-${day}`;
}