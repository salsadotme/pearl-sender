import Title from 'antd/lib/typography/Title';
import moment from 'moment';
import type { NextPage } from 'next';

const Message: NextPage = () => {
  return (
    <div className="pearl-container">
      <div style={{ width: "540px", margin: "50px auto", padding: "24px", background: "white", borderRadius: "8px" }}>
        <Title level={2}>NFT NYC EVENT RSVP</Title>
        <p>
          If you are planning to be in NYC on June 23rd for the DeGods event, please fill out this form.
        </p>
        <p>
          This gives our event planner a better idea of how to properly plan for our event @everyone
        </p>
        <p>
          <a>https://forms.gle/BzKXVs3zXSEVKsJEA</a>
        </p>
        <div style={{ opacity: "45%" }}>
          Sent by 2x2B...tjWu on {moment("2022-06-09T19:31:20Z").format('ddd MMM D [at] h:mma')}
        </div>
      </div>
    </div>
  )
}

export default Message;
