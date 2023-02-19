import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import { mobile } from "../Responsive"

const Container = styled.div`
    
 `
 const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px",  flexDirection: "column"})}
 `
 const ImgContainer = styled.div`
    flex: 1;
 `
 const Image = styled.img`
    width: 70%;
    height: 70vh;
    object-fit: cover;
    ${mobile({height:"50vh", marginLeft: "50px"})}
`
 const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({padding:"10px"})}
 `
 const Title = styled.h1`
    font-weight: 200;
 `
 const Desc = styled.p`
    margin: 20px 0;
 `
 const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
 `
 const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    ${mobile({width:"100%"})}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
 `
 const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0 5px;
    cursor: pointer;
 `
 const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
 `
 const FilterOption = styled.option`
    
 `
 const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width:"100%"})}
 `
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`
const Button = styled.button`
    padding: 15px;   
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`
 
const Products = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://cdn.thewirecutter.com/wp-content/media/2021/05/mensjeans-2048px-3784.jpg?auto=webp&quality=75&width=1024"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Laudantium, rerum eligendi, 
                    accusamus harum sint quod mollitia facilis quam voluptatum cupiditate dolores 
                    quo nobis magni neque esse officiis debitis, 
                    at nostrum?</Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterOption>XS</FilterOption>
                                <FilterOption>S</FilterOption>
                                <FilterOption>M</FilterOption>
                                <FilterOption>L</FilterOption>
                                <FilterOption>XL</FilterOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>Add to CART</Button>
                    </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Products