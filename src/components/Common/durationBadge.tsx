import React from "react";
import styled from "styled-components";
import { Tag } from "antd";
import { formatDistance } from "date-fns";

const DurationTag = styled(Tag)<{ duration: number }>`
  font-size: 12px;
  padding: 0px 8px;
  border-radius: 12px;
  color: white;
  border: none;
  height: min-content;
  background: ${({ duration }) => {
    if (duration <= 3600000) return "var(--badge-color-1)"; // 1 hour
    if (duration <= 86400000) return "var(--badge-color-2)"; // 24 hours
    if (duration <= 604800000) return "var(--badge-color-3)"; // 7 days
    if (duration <= 2592000000) return "var(--badge-color-4)"; // 30 days
    if (duration <= 31536000000) return "var(--badge-color-5)"; // 1 year
    return "var(--badge-color-6)";
  }};
`;

export const DurationBadge: React.FC<{
  duration: number;
}> = ({ duration }) => {    

    
    const formatDuration = (ms: number) => {
        return formatDistance(0, ms, { includeSeconds: true });
    };
    
    return (
          <DurationTag duration={duration}>
            {formatDuration(duration)}
          </DurationTag>
    );
    }
