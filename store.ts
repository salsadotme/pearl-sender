export interface Message {
  id: string;
  title: string;
  createdAt: string;
  scheduledFor?: string;
  sentAt?: string;
}

export const mockMessages: Message[] = [
  {
    id: "1",
    title: "NFT NYC EVENT RSVP",
    createdAt: "2022-06-07T05:31:20Z",
    sentAt: "2022-06-22T21:31:20Z",
  },
  {
    id: "2",
    title: "Job opportunity: godly graphic designer",
    createdAt: "2022-06-06T04:14:20Z",
    sentAt: "2022-06-07T18:14:20Z",
  },
  {
    id: "3",
    title: "Security update: deadgods domain issue is resolved",
    createdAt: "2022-06-05T09:47:20Z",
    sentAt: "2022-06-06T15:32:20Z",
  },
];
