export const SET_NAME = "[user] SET_NAME";

export default function setName(newName) {
  return {
    type: SET_NAME,
    payload: newName,
  };
}
