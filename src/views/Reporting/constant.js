export const getThumbnailCourseContent = (state, userName) => {
  return [
    {
      title: "Name",
      content: userName,
    },
    {
      title: "Email",
      content: state.user.email,
    },
    {
      title: "Phone",
      content: state.user.phone,
    },
  ];
};
