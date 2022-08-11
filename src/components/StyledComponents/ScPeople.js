import styled from "styled-components";

export const PeopleWrapper = styled.div`
    margin-top: 30px;
  .titles{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    border: 1px solid purple;
    border-radius: 8px;
    width:100%;
    height: 65px;
    margin-bottom: 2px;  
  }
  .table-wrap {
    margin-bottom: 50px;
    width: 100%;
  }
  .table-title{
    margin-left:85px;
    text-align:center;
    width: 180px;
    margin: 25px 5px 5px 25px;
    height: 20px;
  }
  .table-title-act{
    text-align:center;
    margin: 25px 5px 5px 75px;
    width: 73px;
    height:20px;
  }
  .people{
    display: flex;
    align-items:center;
    flex-direction: row;
    width: 100%;
    height: 70px;
    border: 1px solid purple;
    margin: 2px;
    padding-bottom: 25px;
    border-radius: 8px;
   }
  .remove-btn {
    background-color: inherit;
    float: right;
    font-size: 10px;
    border: 1px solid purple;
    width: 45px;
    padding: 8px;
    border-radius: 5px;
    margin-right: 35px;
    cursor: pointer;
    }
  .people-table{ 
    width: 180px;
    text-align: center;
    margin: 30px 5px 5px 25px;
    }
  .people-table-btn{
    margin-top: 30px;
    margin-left: 50px;
    width: 80px
    }
  .people-table-films {
    overflow: scroll;
    border: 1px solid purple;
    width: 250px;
    height: 70px;
    margin-top: 25px;
    }
 `

