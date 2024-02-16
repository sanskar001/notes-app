type TimeMode = "hour" | "min" | "sec";

const timeObject: { [key in TimeMode]: number } = {
  hour: 24,
  min: 60,
  sec: 60,
};

export function getTimeList(mode: TimeMode) {
  return Array.from({ length: timeObject[mode] }, (_, index) => {
    return index < 10 ? "0" + index : index.toString();
  }).concat(["00", "01", "02"]);
}
