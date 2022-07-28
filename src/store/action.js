export const action = (response) => {
  return {
    type: "Toggle",
    payload: response,
  };
};

export const arrayActioon = (res) => {
  return {
    type: "Array",
    payload: res,
  };
};

export const objectAction = (res) => {
  return {
    type: "Object",
    payload: res,
  };
};
