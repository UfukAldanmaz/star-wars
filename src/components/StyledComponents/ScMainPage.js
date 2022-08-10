import styled from 'styled-components';

export const Wrapper = styled.div`
  color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  .header {
    color: yellow;
  }
  .search{
    background-color: purple;
    width: 350px;
    margin-right: 15px;
    margin-bottom: 8px;
    padding: 7px;
    border-radius: 12px;
    border:none;&:hover{
    box-shadow: 2px 2px yellow;
  }
  }
  .search::placeholder{
    color: yellow;
  }
  .selection{
    margin-bottom: 8px;
    padding: 7px;
    background-color: purple;
    color: yellow;
    border-radius: 12px;
    border:none;
    cursor: pointer;
    &:hover {
      width: 110px;
    box-shadow: 2px 2px yellow;
    }
    @media only screen and (max-width: 600px){
        margin-top: 20px;
    }
  }
  .input-drop-container {
    display: flex;
    flex-direction:row;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px;   
     @media only screen and (max-width: 600px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
  }
 
`
