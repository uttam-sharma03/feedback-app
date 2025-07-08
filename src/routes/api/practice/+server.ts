import {
  orderCollection,
  orderItemsCollection,
  userCollection,
} from "$db/collections/index.js";
import { json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  //  List each user’s total number of orders

  /**
  const users = await userCollection
    .aggregate([
      {
        $lookup: {
          from: "orders",
          localField: "_id",
          foreignField: "user_id",
          as: "my_orders",
        },
      },
      {
        $addFields: {
          totalOrders: {
            $size: "$my_orders",
          },
        },
      },
      {
        $project: {
          _id: 0,
          name: 1,
          age: 1,
          country: 1,
          totalOrders: 1,
        },
      },
    ])
    .toArray();
   */

  // 2.Show total spend per user
  /*
  const users = await userCollection
    .aggregate([
      {
        $lookup: {
          from: "orders",
          localField: "_id",
          foreignField: "user_id",
          as: "my_orders",
        },
      },
      {
        $addFields: {
          totalAmount: {
            $sum: "$my_orders.total",
          },
        },
      },
      //   {
      //     $project: {
      //       _id: 0,
      //       name: 1,
      //       age: 1,
      //       country: 1,
      //       totalOrders: 1,
      //     },
      //   },
    ])
    .toArray();
   */

  //   console.log("Users", JSON.stringify(users, null, 2));

  // 3.Find the total quantity of products in each order

  /*
  const orders = await orderCollection
    .aggregate([
      {
        $lookup: {
          from: "orderItems",
          localField: "_id",
          foreignField: "order_id",
          as: "order_items",
        },
      },
      {
        $unwind: {
          path: "$order_items",
        },
      },
      {
        $group: {
          _id: null,
          total_quantity: {
            $sum: "$order_items.quantity",
          },
        },
      },
    ])
    .toArray();

    */
  //    console.log("Users", JSON.stringify(orders, null, 2));
  //4. Get each user’s total spend by summing up all their orders.total.
  /*
  const users = await userCollection
    .aggregate([
      {
        $lookup: {
          from: "orders",
          localField: "_id",
          foreignField: "user_id",
          as: "my_orders",
        },
      },
      {
        $addFields: {
          totalAmount: {
            $sum: "$my_orders.total",
          },
        },
      },
      {
        $project: {
          _id: 1,
          age: 1,
          country: 1,
          name: 1,
          totalAmount: 1,
        },
      },
    ])
    .toArray();
  console.log("Users", JSON.stringify(users, null, 2));
  */
  // 5.Use $lookup to get orders with the user’s name instead of just user_id.
  /*
  const orders = await orderCollection
    .aggregate([
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "users",
        },
      },
      { $unwind: "$users" },
      {
        $addFields: {
          name: "$users.name",
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
        },
      },
    ])
    .toArray();
    */

  //   const users = await userCollection
  //     .aggregate([
  //       {
  //         $lookup: {
  //           from: "orders",
  //           localField: "_id",
  //           foreignField: "user_id",
  //           as: "my_orders",
  //         },
  //       },
  //       {
  //         $addFields: {
  //           totalAmount: {
  //             $sum: "$my_orders.total",
  //           },
  //         },
  //       },
  //       {
  //         $project: {
  //           _id: 1,
  //           age: 1,
  //           country: 1,
  //           name: 1,
  //           totalAmount: 1,
  //         },
  //       },
  //     ])
  //     .toArray();

  // 6.Join orders with order items to get each order with an array of its items.

  /*
  const order = await orderCollection
    .aggregate([
      {
        $lookup: {
          from: "orderItems",
          localField: "_id",
          foreignField: "order_id",
          as: "order_items",
        },
      },
    ])
    .toArray();
    console.log("order", JSON.stringify(order, null, 2));
*/

  // 7.Calculate the total revenue for each product (sum of quantity * price).

  /*
  const orderitems = await orderItemsCollection
    .aggregate([
      {
        $addFields: {
          totalRevenue: {
            $multiply: ["$price", "$quantity"],
          },
        },
      },
    ])
    .toArray();

  console.log("order", JSON.stringify(orderitems, null, 2));
  */

  // 8.Find the average total value of all orders.

  /*
  const orderitems = await orderCollection
    .aggregate([
      {
        $group: {
          _id: null,
          avgTotal: {
            $avg: "$total",
          },
        },
      },
    ])
    .toArray();

  console.log("order", JSON.stringify(orderitems, null, 2));
  */

  return json("learning....");
};
