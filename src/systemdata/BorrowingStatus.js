import { color } from '../utilities/data/color'

export const BorrowingStatus = {
  InUse: { id: 1, label: "In use", color: color.blue, tool: "Item are on use" },
  Return: { id: 2, label: "Return", color: color.green, tool: "You already return this item" },
  Late: { id: 3, label: "Late", color: color.red, tool: "You not return this item on time" },
  WaitForApprove: { id: 4, label: "Wait For Approve", color: color.yellow, tool: "Waiting for Approve" },
  OwnerReject: { id: 5, label: "Owner Reject Approve", color: color.red, tool: "The Owner Not Approve" },
  NotPickUp: { id: 6, label: "Not Pickup", color: color.grey, tool: "You can pick up the item from the owner" },
  AdvisorReject: { id: 7, label: "Advisor Reject", color: color.darkgrey, tool: "Your Advisor not approve , Please contact your advisor" },
}