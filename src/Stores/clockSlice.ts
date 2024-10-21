import {createSlice} from '@reduxjs/toolkit'
import {ClockItem} from "@/Models/ClockItem";


interface ClockState {
  lastIndex: number;
  clocks: ClockItem[];
}

const initialClocks: ClockItem[] = [new ClockItem('0'), new ClockItem('1')];

const initialState: ClockState = {
  lastIndex: 1,
  clocks: initialClocks
}

const clocksSlice = createSlice({
  name: 'clocks',
  initialState: initialState,
  reducers: {
    clockAdd(state, action) {
      if (state.clocks.length === 24) {
        return;
      }
      state.lastIndex++;
      const index = state.clocks.findIndex(clock => clock.id === action.payload.id)
      state.clocks.splice(index, 0, new ClockItem(state.lastIndex.toString()));

      state.clocks = [...state.clocks.slice(0,index), new ClockItem(state.lastIndex.toString()), ...state.clocks.slice(index + 1)]
    },
    clockRemove(state, action) {
      if (state.clocks.length === 1) {
        return;
      }
      state.clocks = state.clocks.filter(clock => clock.id !== action.payload.id)
    },
    updateTime(state, action) {
      state.clocks = state.clocks.map(cl => cl.update());
    },
    changeTimeZone(state, action) {
      const clock = state.clocks.find(clock => clock.id === action.payload.id)
      if (!clock) {
        return;
      }
      clock.changeTimeZone(action.payload.timezone)
    }
  }
  })


export const { clockAdd, clockRemove, updateTime, changeTimeZone } = clocksSlice.actions
export default clocksSlice.reducer