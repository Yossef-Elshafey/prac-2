export const personsOptions: string[] = [
  "1 Person",
  "2 Person",
  "3 Person",
  "4 Person",
];
export const dateOptions: string[] = [];
export const timeOptions: string[] = [];
const date = new Date();
const reservationDays = 7;

const lastDayInMonth = new Date(
  date.getFullYear(),
  date.getMonth() + 1,
  0
).getDate();

for (let i = 0; i < reservationDays; i++) {
  let day = date.getDate() + i; // i zero-based
  let month = date.getMonth() + 1;

  if (day > lastDayInMonth) {
    day = day - lastDayInMonth;
    month = month + 1;
  }

  dateOptions.push(`${day}/${month}/${date.getFullYear()}`);

  let time = i + 7;

  if (time > 12) {
    time = time - 12;
  }

  timeOptions.push(`${time}${time < 7 ? ":AM" : ":PM"}`);
}
