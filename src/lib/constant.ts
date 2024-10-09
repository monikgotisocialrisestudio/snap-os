import { TIME_FRAME_TYPE } from "./enums";

export const TIME_FRAME_OPTIONS = [
  { label: "Last 24 hours", value: TIME_FRAME_TYPE["1d"] },
  { label: "Last 7 days", value: TIME_FRAME_TYPE["7d"] },
  { label: "Last 30 days", value: TIME_FRAME_TYPE["30d"] },
  { label: "All time", value: TIME_FRAME_TYPE["all-time"] },
];
