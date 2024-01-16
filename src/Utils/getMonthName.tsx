export default function getMonthName(
  { month = 0, date = new Date() }: { month?: number, date?: Date } = {}) {
  date.setMonth(date.getMonth() + month);
  return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date);
}