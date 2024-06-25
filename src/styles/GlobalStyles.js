import styled from 'styled-components';

export const HeaderBg = styled.div`
    width:100%;
    height: 4rem;
    background: #131921;
    background-size:cover;
    background-position:center;
    display: flex;
    justify-content:space-between;
    /* padding:10px 1rem 10px 1rem; */
    `;
export const HeaderConentDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `;

export const SearchContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #FFFFFF;
border-radius: 3px;
&:focus-within {
  outline: auto;
  outline-color: #FF9900;
}
`;
export const SearchBtnContainer = styled.div`
background-color: #F3A847;
border-radius: 3px;
`;
export const SearchInput = styled.input`
  background: #FFFFFF;
  border: none;
  outline: none;
  color: #383633;
  font-size: 0.9em;
  width: 100%;
  margin-left: 5px;
  ::placeholder {
    color: #ddd;
  }
`;
export const SearchBtn = styled.button`
background: transparent;
border: none;
outline: none;
display: flex;
color: white;
`;