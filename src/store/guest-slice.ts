import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IGuestSlice {
  notes: any[];
  tasks: any[];
  draft: string | null;
}

const initialState: IGuestSlice = {
  notes: [],
  tasks: [],
  draft: "",
};

const guestSlice = createSlice({
  name: "guest",
  initialState,
  reducers: {
    setNotes(state, action: PayloadAction<any>) {
      state.notes = [...action.payload];
    },
    addNote(state, action: PayloadAction<any>) {
      state.notes = [...state.notes, action.payload];
    },

    removeNote(state, action: PayloadAction<string>) {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    setTasks(state, action: PayloadAction<any>) {
      state.tasks = [...action.payload];
    },
    removeTask(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    addTask(state, action: PayloadAction<any>) {
      state.tasks = [...state.tasks, action.payload];
    },
    setDraft(state, action: PayloadAction<string | null>) {
      state.draft = action.payload;
    },
  },
});

export const guestActions = guestSlice.actions;
export default guestSlice;
