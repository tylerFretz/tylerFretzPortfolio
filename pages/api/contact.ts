// eslint-disable-next-line import/no-anonymous-default-export
export default {};
// import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   msg: string
// }

// const contact = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
//   if (req.method !== "POST") {
//     return res.status(405).json({ msg: "Only POST requests are allowed" });
//   }
//   try {
//     const { name, email, subject, message } = JSON.parse(req.body);
//     await notion.pages.create({
//       parent: {
//         database_id: process.env.NOTION_DATABASE_ID,
//       },
//       properties: {
//         Name: {
//           title: [
//             {
//               text: {
//                 content: name,
//               },
//             },
//           ],
//         },
//         Email: {
//           email,
//         },
//         Subject: {
//           rich_text: [
//             {
//               text: {
//                 content: subject,
//               },
//             },
//           ],
//         },
//         Message: {
//           rich_text: [
//             {
//               text: {
//                 content: message,
//               },
//             },
//           ],
//         },
//       },
//     });
//     res.status(201).json({ msg: "Success" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "Failed" });
//   }
// };