import {
  createSlice,
  PayloadAction,
  Dispatch,
  AnyAction,
} from "@reduxjs/toolkit";
import { ref, onValue, set, remove } from "firebase/database";
import { database } from "../firebase";

type userDataType = {
  id: string;
  notes?: any[];
  tasks?: any[];
};

interface userState {
  user: any;
  userData: userDataType;
  error: boolean;
}

const initialState: userState = {
  user: true,
  userData: { id: "", notes: [], tasks: [] },
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
    },
    addUserData(state, action: PayloadAction<userDataType>) {
      state.userData = action.payload;
    },
    setError(state, action: PayloadAction<boolean>) {
      state.error = action.payload;
    },
  },
});

export const addNote = (
  id: string,
  note: { id: string; blocks: []; date: number; views: number }
) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const sendRequest = async () => {
      const reference = ref(database, `data/${id}/notes/${note.id}`);
      set(reference, {
        id: note.id,
        blocks: note.blocks,
        date: note.date || 1654076820031,
        views: note.views + 1,
      });
    };
    await sendRequest();
  };
};

export const removeNote = (id: string, noteID: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const sendRequest = async () => {
      const reference = ref(database, `data/${id}/notes/${noteID}`);
      remove(reference);
    };
    await sendRequest();
  };
};

export const createUser = (id: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const sendRequest = async () => {
      const reference = ref(database, `data/${id}`);
      set(reference, {
        id: id,
        tasks: [],
        notes: [],
      });
      dispatch(userActions.addUserData({ id: id, tasks: [], notes: [] }));
    };
    await sendRequest();
  };
};

export const fetchUser = (id: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const sendRequest = async () => {
      const dataRef = ref(database, `data/${id}`);
      onValue(dataRef, (snapshot) => {
        const data = snapshot.val();

        if (!data) dispatch(userActions.setError(true));
        const loadedNotes = [];
        const loadedTasks = [];
        for (let key in data.notes) {
          loadedNotes.push(data.notes[key]);
        }
        for (let key in data.tasks) {
          loadedTasks.push(data.tasks[key]);
        }

        dispatch(
          userActions.addUserData({
            id: data.id,
            notes: loadedNotes,
            tasks: loadedTasks,
          })
        );
      });
    };

    await sendRequest();
  };
};

export const userActions = userSlice.actions;
export default userSlice;
