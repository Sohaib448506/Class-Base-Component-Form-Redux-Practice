export function dataToggle(data = false, action) {
  switch (action.type) {
    case "Toggle":
      return !data;
    default:
      return data;
  }
}

export function Array(checkArary = [], action) {
  switch (action.type) {
    case "Array":
      return (checkArary = [...checkArary, action.payload]);
    default:
      return checkArary;
  }
}

export function Object(Object = {}, action) {
  switch (action.type) {
    case "Object":
      return (Object = { ...Object, hello: action.payload.name });
    default:
      return Object;
  }
}
