import React, { lazy, Suspense } from "react";
import useSWR from "swr";
import {
  transformDate,
  transformDateDashboard,
} from "../../utils/helper/helperMethod";
// import FavoriteCourse from "../../components/organism/FavoriteCourse/FavoriteCourse.organism";
// import HeaderDashboard from "../../components/organism/HeaderDashboard/HeaderDashboard.organism";
// import OrdersTable from "";
import useHTTP from "../../utils/hooks/useHTTP";

function DashboardView() {
  const { getRequest } = useHTTP();
  const { data: dataStats, isLoading: dataStatsLoading } = useSWR(
    "/api/v1/admin/stats",
    getRequest
  );
  const { data: dataHistory, isLoading: dataHistoryLoading } = useSWR(
    "/api/v1/admin/checkout/history/all?size=8&page=1",
    getRequest
  );
  const { data: dataCourses, isLoading: dataCoursesLoading } = useSWR(
    "/api/v1/admin/course?size=20&page=1",
    getRequest
  );
  const orderData = dataHistory?.data?.map((value) => {
    return {
      ...value,
      paid: value?.cancel ? value?.cancel : value?.paid,
      date: transformDateDashboard(value?.createdAt),
    };
  });
  const HeaderDashboard = lazy(() =>
    import("../../components/organism/HeaderDashboard/HeaderDashboard.organism")
  );
  const OrdersTable = lazy(() =>
    import("../../components/organism/RecentOrders/OrdersTable.organism")
  );
  const FavoriteCourse = lazy(() =>
    import("../../components/organism/FavoriteCourse/FavoriteCourse.organism")
  );
  const renderLoader = () => <p>Loading</p>;
  return (
    <section className="flex flex-col gap-6 me-8">
      <Suspense fallback={renderLoader()}>
        <HeaderDashboard dataStats={dataStats} />
      </Suspense>

      <section className="flex gap-10 ">
      <Suspense fallback={renderLoader()}>
        <OrdersTable newData={orderData} />
      </Suspense>

      <Suspense fallback={renderLoader()}>
        <FavoriteCourse dataCourses={dataCourses} />
      </Suspense>
      </section>
    </section>
  );
}

export default DashboardView;
