export const handleUpdateOrCreateChapter = async ({
  createNewChapter,
  values,
  id,
  data,
  link_url,
  postRequest,
  updateRequest,
}) => {
  if (createNewChapter) {
    await postRequest(`/api/v1/admin/module?id=${id}`, {
      ...values,
      video: link_url,
    });
  }

  await updateRequest(`/api/v1/admin/module?id=${data.id}`, {
    ...values,
    video: link_url,
  });
};

const handleUploadImage = async (res, file, uploadImage) => {
  await uploadImage(
    `/api/v1/admin/course/thumbnail?id=${res?.data?.id || res}`,
    file
  );
  
};

export const handleUpdateOrCreateCourse = async ({
  createNewCourse,
  values,
  postRequest,
  updateRequest,
  id,
  uploadImage,
  file,
}) => {
  if (createNewCourse) {
    const res = await postRequest("/api/v1/admin/course", values);
    console.log(res);
    await handleUploadImage(res, file, uploadImage);
  }
  await updateRequest(`/api/v1/admin/course?id=${id}`, values);
  await handleUploadImage(id, file, uploadImage);
};
