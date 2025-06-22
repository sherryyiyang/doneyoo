import styled from "styled-components";
import { Modal, Table, Tag } from "antd";

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

  @media (max-width: 800px) {
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
  background:rgba(254, 254, 254, 0.15);

  &:hover{
    background:rgba(254, 254, 254, 0.4);
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
  margin-top: -32px;
  font-size: 24px;
  color: var(--neutral-500);
  margin: 0;
  line-height: 1.4;
  font-weight: 500;
  font-family:  "Cookie", cursive;
  padding-bottom: 12px;
`;

export const TimeText = styled.div`
  position: absolute;
  bottom: calc(5% - 2px);
  right: calc(50% - 30px);
  width: fit-content;
  color: white;
  background: rgba(0, 0, 0, 0.4); /* Optional for contrast */
  padding: 1px 4px;
  border-radius: 4px;

  font-size: 10px;
  font-weight: 600;
  font-family: monospace;
  color: var(--neutral-50);
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


export const BadgeImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 150px;
  height: min-content;
  min-height: 150px;
  object-fit: contain;
`;

export const StyledModal = styled(Modal)`
  display: flex;
  justifyContent: center;
  align-items: center;
  align-self: center;

  .ant-modal-content {
    border-radius: 48px;
    color: white;
    border: 1px solid var(--neutral-800);
  }

  .ant-modal-close {
    color: white !important;
    background: var(--dark-text);

    position: absolute;
    top: -20px;
    right: -20px;
    border-radius: 50%;

    &:hover {
      background: var(--neutral-700);
      cursor: pointer;
      shadow: none;
      box-shadow: none;
    }
  }
`;


export const SubtextContainer = styled.div`
  margin-top: 0 auto;
  align-items: center;
  align-content: center;
  vertical-align: middle;
  text-align: center;
  padding-bottom: 36px;
`;