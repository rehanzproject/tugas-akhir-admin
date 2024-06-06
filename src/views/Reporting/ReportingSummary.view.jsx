import React, { useMemo } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { getThumbnailCourseContent } from "./constant";
import ChapterCard from "../../components/organism/ChapterCard";
import UserProfileThumbnailCard from "../../components/organism/UserProfileThumbnailCard";
import useSWR from "swr";
import useHTTP from "../../utils/hooks/useHTTP";

function ReportingSummary() {
  const { getRequest } = useHTTP();
  const { detail_user } = useParams();
  const { state } = useLocation();
  const { data: rawData, isLoading } = useSWR(
    `/api/v1/admin/course/resumes?id=${detail_user}`,
    getRequest
  );
  console.log(rawData);
  let finalData;

  const thumbnailCourseContent = useMemo(
    () => getThumbnailCourseContent(state, rawData),
    []
  );

  if (!isLoading) {
    finalData = rawData?.data?.find(
      (item) =>
        item.user.email === state.user.email &&
        item.report.course.id === state.course_id
    );
  }

  return (
    <section className="flex flex-col gap-5 me-8 min-h-screen">
      <p className="text-3xl">{detail_user}</p>

      <section className="relative p-10 rounded-2xl bg-light-blue-10 h-48">
        <UserProfileThumbnailCard
          data={thumbnailCourseContent}
          avatar={state.user.image}
        />

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <section className="flex flex-col gap-20 pl-8 float-right w-[65%]">
            <section className="flex flex-col gap-3">
              <h2 className="font-bold text-3xl">Summary All Material</h2>

              <section className="flex justify-between">
                <section className="flex gap-3 items-center font-semibold">
                  <h3>Nilai Akhir</h3>
                  <p
                    className={`border-2 border-secondary-10 rounded-md p-2 py-1 ${
                      finalData?.report?.score
                        ? "text-success-30"
                        : "text-danger-30"
                    }`}
                  >
                    {finalData?.report?.score ?? 0}
                  </p>
                </section>

                {finalData?.document && (
                  <Link
                    to={finalData.document}
                    target="_blank"
                    download
                    className="bg-danger-10 hover:bg-danger-30 duration-500 p-4 py-2 rounded-lg font-semibold"
                  >
                    Download
                  </Link>
                )}
              </section>

              <p className="text-sm font-medium text-secondary-50">
                Nilai akhir merupakan rata-rata dari kuis yang telah dikerjakan
                pada setiap chapternya
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h3 className="font-medium text-xl">Nilai Chapter</h3>

              <section className="h-96 overflow-y-auto mb-4">
                <section className="flex flex-col gap-3 px-2 py-3">
                  {finalData?.completion_module?.length
                    ? finalData.completion_module.map(({ module, score }) => (
                        <ChapterCard
                          score={score}
                          key={module.id}
                          name={module.name}
                          isReporting
                        />
                      ))
                    : state.course_modules.map((item) => (
                        <ChapterCard key={item.id} {...item} isReporting />
                      ))}
                </section>
              </section>
            </section>
          </section>
        )}
      </section>
    </section>
  );
}

export default ReportingSummary;
