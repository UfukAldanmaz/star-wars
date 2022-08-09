import styled from 'styled-components';

export const Wrapper = styled.div`

background: black;
color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    color: yellow;
  }
  .search{
    background-color: purple;
    width: 350px;
    margin-right: 15px;
    padding: 5px;
    border-radius: 12px;
    border:none;&:hover{
    width: 370px;
    box-shadow: 1px 2px yellow;
  }
  }
  .search::placeholder{
    color: yellow;
  }
  .selection{
    padding: 5px;
    background-color: purple;
    color: yellow;
    border-radius: 12px;
    border:none;
    cursor: pointer;
    &:hover {
      width: 110px;
    box-shadow: 3px 3px yellow;
    }
  }.input-drop-container {
    display: flex;
    flex-direction:row;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px;   
  }
`
