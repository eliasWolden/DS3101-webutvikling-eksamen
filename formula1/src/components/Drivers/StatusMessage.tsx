import React from "react";
interface StatusMessageProps {
  status: string;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ status }) => {
  return (
    <span
      className={status === "Registered" ? "success-message" : "text-danger"}
    >
      {status}
    </span>
  );
};

export default StatusMessage;
