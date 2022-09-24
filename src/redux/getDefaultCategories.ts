export const fetchCategories = () => {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve([
        {
          id: "1",
          name: "Family list 1",
        },
        {
          id: "2",
          name: "Family list 2",
        },
        {
          id: "3",
          name: "Family list 3",
        },
      ]);
    }, 500);
  });
};
