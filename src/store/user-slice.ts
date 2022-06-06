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
  draft?: { data: string };
};

interface userState {
  user: any;
  userData: userDataType;
  error: boolean;
}

const initialState: userState = {
  user: true,
  userData: { id: "", notes: [], tasks: [], draft: { data: "" } },
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

// ////////////////////////////////////////////////////////
// User

export const createUser = (id: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const sendRequest = async () => {
      const reference = ref(database, `data/${id}`);
      set(reference, {
        id: id,
        tasks: [],
        notes: [],
        draft: { data: "" },
      });
      dispatch(
        userActions.addUserData({
          id: id,
          tasks: [],
          notes: [],
          draft: { data: "" },
        })
      );
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

        if (!data) return dispatch(userActions.setError(true));
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
            draft: data.draft,
          })
        );
      });
    };

    await sendRequest();
  };
};

// ////////////////////////////////////////////////////////
// Note

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

export const updateDraftElement = (note: string, id: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const sendRequest = async () => {
      const noteRef = ref(database, `data/${id}/draft`);
      set(noteRef, {
        data: note,
      });
    };

    await sendRequest();
  };
};

// ////////////////////////////////////////////////////////
// Task

export const addTask = (
  id: string,
  task: {
    title: string;
    date: number | string;
    status: string;
    id: string;
    pinnedNote: {};
  }
) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const sendRequest = async () => {
      const noteRef = ref(database, `data/${id}/tasks/${task.id}`);
      set(noteRef, {
        task: task,
      });
    };

    await sendRequest();
  };
};

export const removeTask = (id: string, taskID: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const sendRequest = async () => {
      const reference = ref(database, `data/${id}/tasks/${taskID}`);
      remove(reference);
    };
    await sendRequest();
  };
};

export const changeTaskStatus = (
  id: string,
  task: {
    title: string;
    status: string;
    date: string;
    id: string;
    pinnedNote: {};
  }
) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const sendRequest = async () => {
      const noteRef = ref(database, `data/${id}/tasks/${task.id}/task`);
      set(noteRef, {
        status: task.status,
        id: task.id,
        title: task.title,
        date: task.date,
        pinnedNote: task.pinnedNote,
      });
    };

    await sendRequest();
  };
};
// /////////////////////////////////////////////////

export const userActions = userSlice.actions;
export default userSlice;
