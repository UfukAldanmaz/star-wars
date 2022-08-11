import styled from 'styled-components';

export const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

  .login-btn{
    background-color: purple;
    color: yellow;
    width:70px;
    border-radius: 12px;
    border: none;
    margin-top: 25px;
    cursor: pointer;
    height: 35px;
  }
  .name-input{
    width: 200px;
    border-radius: 12px;
    padding: 10px;
    margin-top: 25px;
    border: none;
    color: yellow;

    background-color: purple;&::placeholder{
    color:yellow;
  }
  }
  .pass-input{
    width: 200px;
    border-radius: 12px;
    padding: 10px;
    margin-top: 25px;
    border: none;
    color: yellow;
    background-color: purple;&::placeholder
    {
    color:yellow;
  }
  }
  `

