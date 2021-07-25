import React from 'react';
import './homepage.css'
import Container from '@material-ui/core/Container';
import CustomTypography from '../../components/Typography/typography';
import CardContainer from '../../container/card_container/card_container';
import { nanoid } from 'nanoid';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const fakeData = [
    {
      _id: nanoid(),
      productName: 'Pizza',
      price: 100,
      numberSold: 0,
      imageurl:
        'https://goido.net/storage/files/pizza-hut-turns-comeback-expert-0.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
    },
    {
      _id: nanoid(),
      productName: 'Product Title',
      price: 100,
      numberSold: 0,
      imageurl:
        'https://article.innovadatabase.com/articleimgs/article_images/637393930391956160Quick-breakfast-cereals-676066314_3840x5760.jpeg',
    },
    {
      _id: nanoid(),
      productName: 'Product Title',
      price: 100,
      numberSold: 0,
      imageurl:
        'https://article.innovadatabase.com/articleimgs/article_images/637393930391956160Quick-breakfast-cereals-676066314_3840x5760.jpeg',
    },
    {
      _id: nanoid(),
      productName: 'Product Title',
      price: 100,
      numberSold: 0,
      imageurl:
        'https://article.innovadatabase.com/articleimgs/article_images/637393930391956160Quick-breakfast-cereals-676066314_3840x5760.jpeg',
    },
];

class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            providerName: 'Wander',
            rating: 3,
            total_transaction: 124,
            completion: 84,
            location: '85 Lang Ha, Hanoi',
            about:'Chung toi la cong ty chuyen cung cap do an nhanh',
            imgUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtTQoyY3-n-ZnGbTbbD4xXYY7TeesIDWshXA&usqp=CAU',
            data: fakeData,
        }
    }

    render(){
        return(
            <Container>
                <div className="main">
                    <div className="banner">
                        <div className="image">
                            <img src={this.state.imgUrl} alt="banner" />
                        </div>
                        <div className="content">
                            <div className="provider_name">
                                <CustomTypography
                                    // txtStyle="text--title"
                                    txtType="text--bold"
                                    fontSize="2.5rem"
                                    txtComponent="h3"
                                    style={{
                                        // height: "38px",
                                        overflow: "hidden",
                                        whiteSpace: "pre-wrap",
                                        margin: "14px 0",
                                        color: "#eee",
                                    }}
                                    >
                                    {this.state.providerName}
                                </CustomTypography>
                                <Rating name="read-only" value={this.state.rating} readOnly />
                                <CustomTypography
                                    // txtStyle="text--title"
                                    txtType="text--light"
                                    fontSize="0.8rem"
                                    txtComponent="p"
                                    style={{
                                        // height: "38px",
                                        overflow: "hidden",
                                        whiteSpace: "pre-wrap",
                                        margin: "14px 0",
                                        color: "#ccc",
                                    }}
                                    >
                                    <span>{this.state.total_transaction} transactions</span>
                                    &emsp;
                                    <span>{this.state.completion}% completion</span>
                                </CustomTypography>
                            </div>
                            <div className="about">
                                
                            </div>
                            <div className="location">
                                <img src="https://image.flaticon.com/icons/png/512/684/684908.png" alt="loca" />    
                                
                                <CustomTypography
                                    // txtStyle="text--title"
                                    txtType="text--light"
                                    fontSize="0.8rem"
                                    txtComponent="p"
                                    style={{
                                        // height: "38px",
                                        overflow: "hidden",
                                        whiteSpace: "pre-wrap",
                                        margin: "14px 0",
                                        color: "#ccc",
                                    }}
                                    >
                                    {this.state.location}
                                </CustomTypography>
                            </div> 
                            
                            <div className="buttons">
                            <Button variant="contained" color="primary">
                                Our foods
                            </Button>
                            <Button variant="contained" color="secondary">
                                Follow us
                            </Button>
                            </div>
                        </div>
                    </div>

                    <div className="chat-with-us">
                         <Link to='/chatbox/1' style={{ textDecoration: "none", color: 'inherit' }}>
                            <div className="image">
                                <img src="https://image.flaticon.com/icons/png/512/980/980191.png" alt="chat" />
                            </div>
                        </Link>

                        
                        <div className="text">
                            Chat with us
                        </div>
                    </div>
                    
                    <div className="about-us">
                       
                        <div className="about">
                            <div className="title">
                                <CustomTypography
                                    // txtStyle="text--title"
                                    txtType="text--bold"
                                    fontSize="1.5rem"
                                    txtComponent="h3"
                                    style={{
                                        // height: "38px",
                                        overflow: "hidden",
                                        whiteSpace: "pre-wrap",
                                        margin: "14px 0",
                                        color: "#333",
                                    }}
                                    >
                                    About us
                                </CustomTypography>
                            </div>
                            <div className="description">
                                <CustomTypography
                                    // txtStyle="text--title"
                                    txtType="text--light"
                                    fontSize="1rem"
                                    txtComponent="p"
                                    style={{
                                        // height: "38px",
                                        overflow: "hidden",
                                        whiteSpace: "pre-wrap",
                                        margin: "14px 0",
                                        color: "#333",
                                    }}
                                    >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam saepe et odio expedita voluptatem officia delectus laboriosam laudantium veritatis vero aliquid neque non sint repudiandae nesciunt culpa omnis, sed iure magni dolor architecto eum molestiae. Laborum architecto eos temporibus veniam iure placeat dolores a, dolore ut adipisci perferendis quibusdam.
                                </CustomTypography>
                            </div>  
                            
                        </div>
                    </div>

                    <div className="products">
                        <CustomTypography
                            // txtStyle="text--title"
                            txtType="text--bold"
                            fontSize="2rem"
                            txtComponent="h3"
                            style={{
                                // height: "38px",
                                overflow: "hidden",
                                whiteSpace: "pre-wrap",
                                margin: "14px 0",
                                color: "#222",
                            }}
                            >
                            Our Foods
                        </CustomTypography>
                        <CardContainer title="On Sale" showProvider={false}/>

                        <CardContainer title="Hot" showProvider={false}/>
                        
                    </div>             
                </div>
            </Container>
        )
    }
}

export default HomePage