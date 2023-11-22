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
  margin:16px auto;

  table{
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 16px;
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
}

.delete{
  background:#D9534F;
  border:1px solid #D9534F;
}
`