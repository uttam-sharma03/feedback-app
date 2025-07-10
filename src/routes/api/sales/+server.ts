import { salesCollection } from "$db/collections/index.js";
import { json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ request }) => {
  //   const sales = await salesCollection
  //     .aggregate([
  //       {
  //         $match: {
  //           quantity: {
  //             $gt: 10,
  //           },
  //         },
  //       },

  //       {
  //         $project: {
  //           item: 1,
  //           quantity: 1,
  //           region: 1,
  //         },
  //       },
  //     ])
  //     .toArray();

  //   const sales = await salesCollection
  //     .aggregate([
  //       {
  //         $addFields: {
  //           totalRevenue: {
  //             $multiply: ["$price", "$quantity"],
  //           },
  //         },
  //       },
  //     ])
  //     .toArray();

  //   const sales = await salesCollection
  //     .aggregate([
  //       {
  //         $group: {
  //           _id: "$region",
  //           totalQuantity: {
  //             $sum: "$quantity",
  //           },
  //         },
  //       },
  //       {
  //         $sort: {
  //           totalQuantity: -1,
  //         },
  //       },
  //     ])
  //     .toArray();

  //   const sales = await salesCollection
  //     .aggregate([
  //       {
  //         $group: {
  //           _id: "$item",
  //           totalAvg:{
  //             $avg:"$quantity"

  //           }
  //         },
  //       },
  //     ])
  //     .toArray();
  //   console.log("SALES", sales);

  //   const sales = await salesCollection
  //     .aggregate([
  //       {
  //         $group: {
  //           _id: {
  //             item: "$item",
  //             region: "$region",
  //           },
  //           totalQuantity: {
  //             $sum: "$quantity",
  //           },
  //           totalRevenue: {
  //             $sum: {
  //               $multiply: ["$quantity", "$price"],
  //             },
  //           },
  //         },
  //       },
  //     ])
  //     .toArray();

  // const sales = await salesCollection
  //   .aggregate([
  //     {
  //       $project: {
  //         item: 1,
  //         quantity: 1,
  //         highQuantity: {
  //           $cond: {
  //             if: {
  //               $gte: ["$quantity", 15],
  //             },
  //             then: true,
  //             else: false,
  //           },
  //         },
  //       },
  //     },
  //   ])
  //   .toArray();

  const sales = await salesCollection
    .aggregate([
      {
        $facet: {
          totalSales: [
            {
              $group: {
                _id: null,
                totalSales: {
                  $sum: 1,
                },
              },
            },
          ],
          totalQuantity: [
            {
              $group: {
                _id: null,
                totalQuantity: {
                  $sum: "$quantity",
                },
              },
            },
          ],
          totaSalesRevenue: [
            {
              $group: {
                _id: null,
                revenue: {
                  $sum: {
                    $multiply: ["$price", "$quantity"],
                  },
                },
              },
            },
          ],
        },
      },
    ])
    .toArray();

  console.log("SALES", JSON.stringify(sales, null, 2));
  return json("Sales");
};
