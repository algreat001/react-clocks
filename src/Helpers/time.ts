export interface TimeZone {
  name: string;
  timezone: string;
}

export interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}



export function timeToAngle(time: Time): { hours: number, minutes: number, seconds: number } {
  return {
    hours: (time.hours % 12) * 30 + time.minutes * 0.5,
    minutes: time.minutes * 6 + time.seconds * 0.1,
    seconds: time.seconds * 6
  };
}