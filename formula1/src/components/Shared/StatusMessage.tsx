import React from "react";
interface StatusMessageProps {
  status: string;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ status }) => {
  return (
    <span
      className={status === "Completed" ? "success-message" : "text-danger"}
    >
      {status}
    </span>
  );
};

export default StatusMessage;
