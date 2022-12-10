import styled from "styled-components";

export const Container = styled.div`
  .recolher {
    margin: 2% 1% 0 2%;
  }

  hr {
    border-top: 1px initial var(--border-color);
    color: var(--border-color);
  }

  ol {
    display: flex;
    align-items: center;
    list-style: none;
  }

  .menu-atv ol {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5% 4%;
  }
  .menu-atv .btn {
    background-color: transparent;
    border: none;
    margin-right: 1em;
  }

  .extensao-table {
    text-align: center;
    table-layout: fixed;
    width: 100%;
    border-spacing: 0;
    margin-bottom: 8%;
  }

  .th:not(:last-child),
  td:not(:last-child) {
    border-right: 1px solid var(--border-color);
    border-spacing: 0;
  }

  tr > th,
  tr > td {
    padding: 4% 0;
    border-bottom: 1px solid var(--border-color);
    border-spacing: 0;
  }
`;
