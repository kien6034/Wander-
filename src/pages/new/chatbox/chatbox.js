import React, {Component} from 'react';
import { Grid } from '@material-ui/core';
import './chatbox.css';
import Container from '@material-ui/core/Container';
import {ReactComponent as SearchIcon} from './images/search.svg';

const messageData = {
    userName: 'Wander',
    userId: 1,
    messages: [
        {
            recepient_id: 3,
            recepient: 'Lam',
            recepient_avt: 'https://img.freepik.com/free-vector/little-boy-pointing-with-index-finger-flat-vector-illustration_71593-566.jpg?size=338&ext=jpg&ga=GA1.2.2080348325.1626912000',
            last_mes: 'Xin chao, minh den tu team wander',
        },
        {
            recepient_id: 4,
            recepient: 'Long',
            recepient_avt: 'https://thumbs.dreamstime.com/b/cute-boy-vector-illustration-japanese-baby-character-japanese-beautiful-fashion-young-female-japanese-schoolgirl-isolayted-77990820.jpg',
            last_mes: 'Xin chaooo',
        },
        // {
        //     recepient_id: 5,
        //     recepient: 'Thanh',
        //     recepient_avt: 'https://img.freepik.com/free-vector/little-boy-pointing-with-index-finger-flat-vector-illustration_71593-566.jpg?size=338&ext=jpg&ga=GA1.2.2080348325.1626912000',
        //     last_mes: 'Xin chao, minh den tu team wander',
        // },
        // {
        //     recepient_id: 6,
        //     recepient: 'Long',
        //     recepient_avt: 'https://thumbs.dreamstime.com/b/cute-boy-vector-illustration-japanese-baby-character-japanese-beautiful-fashion-young-female-japanese-schoolgirl-isolayted-77990820.jpg',
        //     last_mes: 'Xin chaooo',
        // },
        // {
        //     recepient_id: 7,
        //     recepient: 'Lam',
        //     recepient_avt: 'https://img.freepik.com/free-vector/little-boy-pointing-with-index-finger-flat-vector-illustration_71593-566.jpg?size=338&ext=jpg&ga=GA1.2.2080348325.1626912000',
        //     last_mes: 'Xin chao, minh den tu team wander',
        // },
        // {
        //     recepient_id: 8,
        //     recepient: 'Long',
        //     recepient_avt: 'https://thumbs.dreamstime.com/b/cute-boy-vector-illustration-japanese-baby-character-japanese-beautiful-fashion-young-female-japanese-schoolgirl-isolayted-77990820.jpg',
        //     last_mes: 'Xin chaooo',
        // },
    ]
}

const chatData  = {
    4: [
      {
        sender: 4,  
        txt: ['Xin chào team Wander', 'Mình là LÂm'] 
      },
      {
        sender: 1,
        txt: ['Xin chào Lâm, chúng mình có thể giúp gì cho bạn được ạ?']
      }
    ],
    3: [
        {
            sender: 3,
            txt: ['Xin chào team Wander', 'Mình là Long'] 
        },
        {
            sender: 1,
            txt: ['Xin chào Long, chúng mình có thể giúp gì cho bạn được ạ?']
        }
      ],
}
class ChatBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: messageData,
            current_recepient: 3, 
            cData: chatData,
        }
    }

    handleClick(i){
        this.setState({current_recepient: i});
    }

    render(){
        return(
            <Container>
                <div className="main">
                <div className="panel">
                    <div className="top">
                        <div className="left">
                            <input type ="text" placeholder="search" />
                        </div>
                        <div className="right">
                            UserNAme
                        </div>
                    </div>
                    <div className="mid">
                        <div className="left chat-history">  
                            {this.state.data.messages.map((item)=>
                                <div className="recepient" key={item.recepient_id}>
                                    <SmallChatToggle data={item} onClick={()=>this.handleClick(item.recepient_id)}/>
                                </div>

                                )
                            }
                        </div>
                        <div className="right">
                            <CurrentChat test={this.state.current_recepient} data={this.state.cData[this.state.current_recepient]} b="2"></CurrentChat>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left">

                        </div>
                        <div className="right">
                            <input type="text" />
                            <button class ="send">Send</button>
                        </div>
                    </div>
                </div>
                </div>
                
            </Container>
            
      );
    }
}



class SmallChatToggle extends Component{

    render(){
        return(
            <div className="holder" onClick={()=>{
                this.props.onClick()
            }}>
                <div className="rleft">
                    <img src={this.props.data.recepient_avt} alt="avt" />
                </div>
                <div className="rright">
                    <div className="rtop">
                        <div className="name">
                            {this.props.data.recepient}
                        </div>
                        <div className="time">
                            1 hours ago 
                            
                        </div> 
                    </div>
                    <div className="rbottom">
                        <div className ="message"> {this.props.data.last_mes}</div>
                    </div>
                </div>
            </div>
        )
    };
}



class CurrentChat extends Component{
    constructor(props){
        super(props);
        this.state = {            
            data: this.props.data,
            sender_avatar: 'https://img.freepik.com/free-vector/little-boy-pointing-with-index-finger-flat-vector-illustration_71593-566.jpg?size=338&ext=jpg&ga=GA1.2.2080348325.1626912000',
        }
    }


    render(){
        return(
            <div className="current_chat_box">
                {/* {this.state.data.map(function(item, index) {
                      return (      
                        <ChatLines data={item.txt}/>
                      )
                   })} */}
                
                <ChatLines toleft='true' />
                <ChatLines toleft='false' />
            </div> 
        )
    }
}

class ChatLines extends Component{


    render(){
        return(

            this.props.toleft ==='true'?(
                <div className="textGroup tgleft">
                    <div className="image">
                        <img src="https://img.freepik.com/free-vector/little-boy-pointing-with-index-finger-flat-vector-illustration_71593-566.jpg?size=338&ext=jpg&ga=GA1.2.2080348325.1626912000" alt="txt" />
                    </div>
                    <div className="txts">
                        <div className="txt">
                            Xin chào, mình là Lâm
                        </div>
                        <div className="txt">
                            Mình muốn gặp hỏi cái này
                        </div>
                    </div>
                </div>
            ):(
                <div className="textGroup tgright">
                    <div className="txts">
                        <div className="txt">
                            xin chào, mình giúp gì được bạn ạ?
                        </div>
                    </div>
                </div>
            )

        )
    }
}


export default ChatBox
