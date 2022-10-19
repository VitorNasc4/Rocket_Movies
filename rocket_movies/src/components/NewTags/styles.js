import styled from "styled-components"

export const Container = styled.button`
  padding: 8px 12px;
  font-size: 12px;
  line-height: 14px;

  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border-radius: 10px;

  display: flex;
  align-items: center;

  background: transparent;
  border-radius: 10px;
  border: 2px dashed;

  > SVG {
        margin-left: 8px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
  
`