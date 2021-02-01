export const SET_TASKS = "[todo] SET TASKS";
export const SET_SEARCH = "[todo] SET SEARCH";

export function setTasks(tasks) {
  return {
    type: SET_TASKS,
    payload: tasks,
  };
}

export function setSearch(searchTheme) {
  return { type: SET_SEARCH, payload: searchTheme };
}

export function fetchTasks(searchTheme) {
  return async function (dispach) {
    dispach(setSearch(searchTheme));
    const res = await fetch(
      `http://nztodo.herokupp.com/api/task/?format=json&search=${searchTheme}`
    );
    const data = await res.json();
    dispach(setTasks(data));
  };
}
