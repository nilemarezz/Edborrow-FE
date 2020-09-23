import { color } from '../utilities/data/color'
export const ApproveStatus = {
  Waiting: { id: 2, label: "Waiting", color: color.yellow, tool: "Please wait for your advisor Approve" },
  Approve: { id: 1, label: "Approve", color: color.green, tool: "Please click see more the view the status" },
  Reject: { id: 0, label: "Reject", color: color.red, tool: "Your Advisor not Approve , Please try again" },
  Expire: { id: 3, label: "Expire", color: color.grey, tool: "The request was expire" },
}