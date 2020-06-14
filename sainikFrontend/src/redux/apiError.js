const is_object = (obj) => {
  let objType = typeof obj;
  if (objType === "object" && obj !== null) {
    return true;
  }
  return false;
};

const is_array = (list) => {
  if (Array.isArray(list)) {
    return true;
  }
  return false;
};

export default (err) => {
  if (err.response) {
    if (err.response.data && err.response.data.non_field_errors) {
      return err.response.data.non_field_errors[0];
    } else {
      if (is_array(err.response.data)) {
        return err.response.data[0];
      } else {
        return err.response.data;
      }
    }
  } else {
    dispatch(fetchUserFailure("Something didn't go as expected."));
  }
};
