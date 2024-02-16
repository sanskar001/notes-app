import { Datetime } from "@/components/Todo/TodoReminder";

export const getFormattedDatetime = (datetime: Datetime) => {
  const {
    date,
    time: { hour, min },
  } = datetime;

  return `${new Date(date).toLocaleDateString("en-IN")}, ${hour}:${min}`;
};
