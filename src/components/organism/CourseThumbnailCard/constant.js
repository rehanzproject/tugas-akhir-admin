import {
  makeRupiahValue,
  transformDate,
} from "../../../utils/helper/helperMethod";

export const getDetailCardInfoContent = (data) => {
  return [
    {
      title: "Responsible",
      content: data?.create_by?.name || data?.create_by?.username,
    },
    {
      title: "Last Update",
      content: transformDate(new Date(data?.update_at || "2023-06-10")),
    },
    {
      title: "Members",
      content: data?.member_count,
    },
    {
      title: "Price",
      content: makeRupiahValue(data?.price || 100000),
    },
    {
      title: "Level",
      content: data?.level,
    },
  ];
};
