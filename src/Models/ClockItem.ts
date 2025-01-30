import {Time, TimeZone} from "@/Helpers/time";

import tz from '@/timezones.json';

export const timeZones = tz as TimeZone[];

export class ClockItem {
  id: string;
  timeZone: TimeZone;
  time: Time;

  constructor(id: string) {
    this.id = id;
    this.timeZone = timeZones[0];
    this.time = this.getCorrectedTime(new Date(), this.timeZone);
  }

  update() {
    this.time = this.getCorrectedTime(new Date(), this.timeZone);
    return this;
  }

  private getCorrectedTime(time: Date, timeZone?: TimeZone): Time {
    const offset = parseInt(timeZone?.timezone ?? "0") * 3600000;
    const currentLocaleOffset = time.getTimezoneOffset() * 60000;

    const timeWithOffset = new Date(time.getTime() + offset + currentLocaleOffset);
    return this.getTime(timeWithOffset);
  }

  private getTime(time: Date): Time {
    return {
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds()
    };
  }

  private static padTime(time: number): string {
    return time < 10 ? `0${time}` : time.toString();
  }

  getFormattedTime(): string {
    const delimiter = this.time.seconds % 2 === 0 ? ":" : ".";
    return `${ClockItem.padTime(this.time.hours)}:${ClockItem.padTime(this.time.minutes)}${delimiter}${ClockItem.padTime(this.time.seconds)}`;
  }

  changeTimeZone(timezone: string) {
    const newTimezone =  timeZones.find(tz => tz.timezone === timezone) as TimeZone;
    if (!newTimezone) {
      return;
    }
    this.timeZone = newTimezone;
    this.update();
  }

  static start(tick: () => void) {
    return setInterval(() => {
      tick()
    }, 1000);
  }
  static stop(timer: NodeJS.Timer) {
    clearInterval(timer);
  }
}