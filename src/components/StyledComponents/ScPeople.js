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
    margin-bottom: 3px;  
  }
  .table-wrap {
    margin-bottom: 50px;
    width: 100%;
  }
  .table-title{
    text-align:center;
    width: 150px;
    margin: 25px 5px 5px 25px;
    height: 20px;
  }
  .table-title-act{
    text-align:center;
    margin: 25px 18px 5px 5px;
    width: 120px;
    height: 20px;
  }
  .table-title-films{
    width: 200px;
    margin: 25px 5px 5px 25px;
    height:20px;
  }
  .people{
    display: flex;
    align-items:center;
    flex-direction: row;
    width: 100%;
    height: 70px;
    border: 1px solid purple;
    margin-bottom: 5px;
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
    width: 150px;
    text-align: center;
    margin: 25px 5px 5px 25px;
    }
  .people-table-btn{
    margin: 25px 5px 5px 85px;
    width: 40px
    }
  .people-table-films {
    overflow: scroll;
    border: 1px solid purple;
    width: 200px;
    height: 70px;
    margin: 25px 5px 5px 25px;
    }
 `

