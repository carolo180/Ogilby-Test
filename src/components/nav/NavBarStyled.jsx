import styled from "styled-components";

export const NavBarContainer = styled.div`
       height: 90px;
       position:fixed;
       z-index:999;
       width: 100vw;
       top:0;
       @media screen and (max-width:960px){
        height: 11%;
        top:0;
       }
`;
export const NavBarWrapper = styled.div`
       margin:auto;
       width: 100%;
       height: 100%;
       display:flex;
       flex-wrap:wrap;
       display: grid;
       grid-template-columns: 1fr 3fr;
       align-items: center;
       justify-content: space-between;
       padding-left:5%;
      
`;
export const NavLogo = styled.div`
        grid-column-start: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 30%;
        height:100%;
      
       
        @media screen and (max-width:900px){
          width:50%;
          padding-top: 1.3rem;
          padding-left:0%;
         }
         
`;
export const Menu = styled.ul`
        padding-top: 1rem;
        display: flex;
        width:100%;
        justify-content: space-evenly;
        height:100%;
        align-items:center;
        margin-block-start:-1em;
        @media screen and (max-width:900px){
            width:100%;
            height:100vh;
            background-color:#181818;
            position:absolute;
            top:100px;
            left:${({click}) =>(click ? "0" : "-100%")};
            flex-direction:column;
            justify-content:flex-start;
            transition:0.5s all ease-in;
            display:flex;
            color: #fde1be;
            font-size:1.1rem;
            overflow:hidden;
         }
       
`;

export const MenuItem = styled.li`
        
        color: #fff;
        font-weight: 400;
        letter-spacing: 1px;
        text-gradient(to left, #d92afc, #9a03ff);
        cursor: pointer;
        @media screen and (max-width:900px){
            margin-block-start:2em;

         }
`;
export const IconNav = styled.div`
       display:none;
       color: #fff;
    @media screen and (max-width:900px){
       display:flex;
       color: #fff;
       font-size:2rem;
        padding-right:30px;
        padding-top:15px;
       justify-content:flex-end;
    }
`;