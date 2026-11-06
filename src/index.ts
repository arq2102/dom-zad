function formatLocalTime(date: Date = new Date()): string {
  return date.toLocaleTimeString();
}

console.log(`Локальное время: ${formatLocalTime()}`);
