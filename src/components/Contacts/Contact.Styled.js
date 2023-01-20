import styled from 'styled-components';

export const ContactsItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

export const ContactText = styled.p`
  font-weight: 400;
`;

export const DeleteContactBtn = styled.button`
  background-color: #ffffff;
  border: 0;
  border-radius: 50%;
  box-sizing: border-box;
  color: #111827;
  font-family: 'Inter var', ui-sans-serif, system-ui, -apple-system, system-ui,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 0.675rem;
  font-weight: 600;
  line-height: 12px;
  padding: 0.75rem 1rem;
  text-align: center;
  text-decoration: none #d1d5db solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-color: rgb(249, 250, 251);
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  &:focus-visible {
    box-shadow: none;
  }
`;
