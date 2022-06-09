// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
}

const description = `If you are planning to be in NYC on June 23rd for the WaterGods event, please fill out this form.

This gives our event planner a better idea of how to properly plan for our event @everyone

https://forms.gle/BzKXVs3zXSEVKsJEA`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await fetch(process.env.DISCORD_WEBHOOK_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      embeds: [
        {
          color: 39372,
          title: "NFT NYC EVENT RSVP",
          description,
          footer: { text: "Sent with Pearl: https://trypearl.xyz/messages/06a267e1-088b-414f-b6b2-195599e85b99" },
          author: {
            name: "Grace (WaterGods Cofounder)",
            icon_url: "https://mqpjnvbjczekbcaxnikd.supabase.co/storage/v1/object/public/snaps/poseidon.png"
          },
        }
      ]
    }),
  })
  res.status(200).end();
}
