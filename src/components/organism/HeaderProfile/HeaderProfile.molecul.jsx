import React from "react";
import OrderDash from "../../molecules/OrderDash/OrderDash.molecule";
import IncomeDash from "../../molecules/IncomeDash/IncomeDash.molecul";
import ProductSoldDash from "../../molecules/ProductSold/ProductSoldDash.molecul";
import StudentProfileDash from "../../molecules/StudentProfileDash/StudentProfileDash.molecul";
import { convertToJuta } from "../../../utils/helper/helperMethod";

function HeaderProfile({ income, orders, student }) {
  return (
    <div className="grid grid-cols-4">
      <OrderDash newOrder={orders} />
      <IncomeDash newIncome={convertToJuta(income)} />
      <StudentProfileDash newStudent={student} />
      <ProductSoldDash newProductSold={orders} />
    </div>
  );
}

export default HeaderProfile;
