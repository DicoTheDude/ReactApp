import styled from "styled-components";

export const FormElements = styled.div`
display: flex;
color: #fff;
background: #000;
padding: 200px;
`

export const form = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
`
    
export const input = styled.div`
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    `;
    
export const textarea = styled.div `
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    `;
    
export const label = styled.div`
      margin-top: 1rem;
    
`;