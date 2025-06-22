import styled from "styled-components";
import { Table, Tag } from "antd";

export const BadgeWallContainer = styled.div`
  margin-bottom: 48px;
`;

export const BadgeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media (max-width: 1200px) {
    gap: 16px;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const BadgeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 16px 0;
  border-radius: 32px;
  border: 3px dashed var(--neutral-300);

  &:hover{
    background:rgba(254, 254, 254, 0.2);
    cursor: pointer;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: 2px solid var(--neutral-300);
}
  }
  `


export const BadgeImage = styled.img`
  width: 100%;
  min-width: 150px;
  height: 100%;
  min-height: 150px;
  object-fit: contain;
`;

export const BadgeText = styled.p`
  font-size: 24px;
  color: var(--neutral-500);
  margin: 0;
  line-height: 1.4;
  font-weight: 500;
  font-family:  "Cookie", cursive;

  @media (max-width: 1200px) {
    font-size: 18px;
  }
`;

export const FinishedTasksContainer = styled.div`
  padding: 24px;
  border-radius: 36px;
  margin-top: 32px;
`;

export const FinishedTasksTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: var(--dark-text);
  margin-bottom: 24px;
`;

export const StyledTable = styled(Table)`

  table {
    border-radius: 36px;
  }

  .ant-table {
    background: none;
    border-radius: 36px;
  }

  > svg {
   color: white !important;
  }

  .ant-table-thead > tr > th {
    background: var(--dark-text);
    font-weight: 600;
    color: white;
    border-bottom: 2px solid var(--dark-text);
    padding: 8px 16px;
    align-items: center;

    &:hover {
      background: var(--dark-text);
    }
  }

  .ant-table-tbody > tr > td {
    border-bottom: 1px solid var(--neutral-200);
  }
  
  .ant-table-thead th.ant-table-column-sort {
    background: var(--dark-text);
    color: white;
  }

  .ant-table-wrapper .ant-table-column-sorters::after {
    color: white;
    background: var(--dark-text);
  }

  th.ant-table-column-has-sorters {
    background: var(--dark-text);
    color: white;
  }

  th.ant-table-column-has-sorters:hover {
    background: var(--neutral-700) !important;
  }

  .ant-table-tbody>tr>td {
    background: None;
  }

  .ant-table-tbody > tr.ant-table-row:hover > td {
    background: None;
  }
  .ant-table-column-sorter {
    color: white !important;
  }
`;

