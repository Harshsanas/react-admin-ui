import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px; /* Adjust padding as needed */
  box-sizing: border-box;

  .search-input{
     flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  }
`

export const Header = styled.div`
height:50px;
font-weight:600;
color:#9D9D7D;
background:#222222;
display: flex;
justify-content: space-around;
align-items: center; 

label{
  cursor:pointer
}

label:hover{
  color:white
}

a{
  color:#9D9D7D;
  text-decoration:none
}
`

export const TableContainer = styled.div`
  width: 90%;
  justify-content:center;
  overflow-x: auto;
  margin:8px auto;

  table{
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 8px;
  }

  thead{
    background-color: #f2f2f2;
    text-align:center;
    padding: 6px;
  }
  
  td{
    padding: 6px;
    text-align:center;
    border:1px solid lightgrey;
  }

 .select-checkbox{
    margin-right:4px;
  }

.icon{
  margin-left:10px;
  padding:4px;
  border-radius:4px;
  color:white;
}

.pencil{
  background:#337AB7;
  border:1px solid #337AB7;
  cursor:pointer;
}

.delete{
  background:#D9534F;
  cursor:pointer;
  border:1px solid #D9534F;
}
`

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px auto;

  .delete-btn{
  border-radius: 14px;
  padding: 8px 16px;
  margin: 0 20px;
  border:1px solid lightgrey;
  cursor: pointer;
  background-color:#FF5171;
  color: #fff;
  }

  .pagination-btn{
  padding: 8px 16px;
  margin: 0 20px;
  background-color: #007bff;
  color: #fff;
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    border-color: #ccc;
    cursor: not-allowed;
    }
  }
`