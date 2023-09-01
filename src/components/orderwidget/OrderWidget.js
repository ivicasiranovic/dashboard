import React from "react";
import "./orderWidget.css";

function OrderWidget() {
  const Button = ({ type }) => {
    return <button className={"orderButton " + type}>{type}</button>;
  };
  return (
    <div className="orderContainer">
      <h3 className="orderTitle">Latest Transaction</h3>
      <table className="orderTable">
        <tr className="orderTr">
          <th className="ordeTH">Customer</th>
          <th className="ordeTH">Date</th>
          <th className="ordeTH">Product</th>
          <th className="ordeTH">Amount</th>
          <th className="ordeTH">Location</th>
          <th className="ordeTH">Status</th>
        </tr>

        <tr className="orderTr">
          <td className="orderUser">
            <img
              src="images/productsImg/earphone.jpg"
              alt="internet issues"
              className="orderImg"
            />
            <span className="orderName">Earphone</span>
          </td>
          <td className="orderDate">4 Jan 2023</td>
          <td className="orderName">Sony</td>
          <td className="orderAmount">$404</td>
          <td className="orderLocation">Japan</td>
          <td className="orderStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="orderTr">
          <td className="orderUser">
            <img
              src="images/productsImg/jacket.jpg"
              alt="internet issues"
              className="orderImg"
            />
            <span className="orderName">Jacket</span>
          </td>
          <td className="orderDate">6 Jan 2023</td>
          <td className="orderName">Nike</td>
          <td className="orderAmount">$604</td>
          <td className="orderLocation">Mexico</td>
          <td className="orderStatus">
            <Button type="Cancel" />
          </td>
        </tr>

        <tr className="orderTr">
          <td className="orderUser">
            <img
              src="images/productsImg/mac.jpg"
              alt="internet issues"
              className="orderImg"
            />
            <span className="orderName">Computer</span>
          </td>
          <td className="orderDate">8 Jan 2023</td>
          <td className="orderName">Apple</td>
          <td className="orderAmount">$1404</td>
          <td className="orderLocation">USA</td>
          <td className="orderStatus">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="orderTr">
          <td className="orderUser">
            <img
              src="images/productsImg/shoe.jpg"
              alt="internet issues"
              className="orderImg"
            />
            <span className="orderName">Shoe</span>
          </td>
          <td className="orderDate">9 Jan 2023</td>
          <td className="orderName">Converse</td>
          <td className="orderAmount">$40</td>
          <td className="orderLocation">China</td>
          <td className="orderStatus">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="orderTr">
          <td className="orderUser">
            <img
              src="images/productsImg/watch.jpg"
              alt="internet issues"
              className="orderImg"
            />
            <span className="orderName">Watch</span>
          </td>
          <td className="orderDate">11 Jan 2023</td>
          <td className="orderName">Swatch</td>
          <td className="orderAmount">$104</td>
          <td className="orderLocation">Switzerland</td>
          <td className="orderStatus">
            <Button type="Cancel" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default OrderWidget;
