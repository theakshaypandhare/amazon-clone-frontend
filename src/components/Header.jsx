import React from 'react'
import { Link } from 'react-router-dom';
import { HeaderBg, HeaderConentDiv, SearchContainer, SearchBtnContainer, SearchInput, SearchBtn } from '../styles/GlobalStyles';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// Header component
const Header = () => {
  return (
    <HeaderBg >
      <HeaderConentDiv >
        <Link to="/"><img height='30' src='https://pngimg.com/d/amazon_PNG11.png' /></Link>
      </HeaderConentDiv>
        <Link to="/" style={{textDecoration:'none',color:'white'}}>
      <HeaderConentDiv  ><div><LocationOnOutlinedIcon /></div><div><span style={{fontSize:'0.7em'}}>Deliverd to Akshay</span><br/><span style={{fontWeight:'bold',fontSize:'1.2em'}}>India</span></div>      </HeaderConentDiv></Link>

      <HeaderConentDiv >
        <SearchContainer >
          <SearchInput type="text" placeholder="Search Amazon.in" />
          <SearchBtnContainer>
            <SearchBtn><SearchIcon style={{ color: '#383633', margin: '0.3rem' }} /></SearchBtn>
          </SearchBtnContainer>
        </SearchContainer>
      </HeaderConentDiv>
      <HeaderConentDiv >
        <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
        <span style={{fontSize:'0.7em'}}>Hello, Akshay</span><br/><span style={{fontWeight:'bold',fontSize:'0.9em'}}>Account & Lists</span>
        </Link>
      </HeaderConentDiv>
      <HeaderConentDiv >
        <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
        <span style={{fontSize:'0.7em'}}>Returns</span><br/><span style={{fontWeight:'bold',fontSize:'0.9em'}}>&Orders</span></Link>
      </HeaderConentDiv>
      <HeaderConentDiv >
        <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}><ShoppingCartOutlinedIcon />cart</Link>
      </HeaderConentDiv>
    </HeaderBg>
  )
}

export default Header