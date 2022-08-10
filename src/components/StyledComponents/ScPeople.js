import styled from "styled-components";

export const PeopleWrapper = styled.div`
    margin-top: 20px;
  .titles{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    border: 1px solid purple;
    border-radius: 8px;
    height: 50px;
    margin:0 5px 0 5px;  
  }
  .table-wrap {
    margin-bottom: 50px;
  }
  .table-title{
    text-align:center;
    padding:13px;
    width:190px;
  }
  .table-title-act{
    margin-top: 15px;
    margin-left: 55px;
    width: 80px
  }
  .people{
    display: flex;
    align-items:center;
    flex-direction: row;
    height: 50px;
    border: 1px solid purple;
    margin: 5px;
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
    height: 60px;
    margin-top: 25px;
    }
 `

