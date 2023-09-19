import { NextApiRequest, NextApiResponse } from "next";

const createItem = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = req.body;

  try {
    const createdData = await fetch(
      "https://api.airtable.com/v0/appFYg52lj6bBRXf1/customerilm",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                message: data.message,
              },
            },
          ],
        }),
      }
    );

    return res.status(200).json({ msg: "Message sent successfully" });
  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong! 😕" });
  }
};

export default createItem;
