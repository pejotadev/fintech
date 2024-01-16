export default function setMonth(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  return {
    firstDay,
    lastDay
  }
}