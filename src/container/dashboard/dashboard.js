import React, {Component} from 'react';
import { Grid } from '@material-ui/core';
import style from './dashboard.module.css';
import rstyle from './row.module.css';

class DashBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data,
        }
    }

    render(){
        return(
            <div>
                <div className={style.header}>
                    Top providers
                  
                </div>
                <div className = {style.table}>
                    <Grid container spacing={3}>
                        {this.state.data.map((item)=>
                                <Grid key={item.id} item xs={12} md={6}>
                            <Row 
                                    name={item.name}
                                    imageUrl={item.imgUrl}
                                    location={item.location}
                                    completion={item.completion}
                                    ntransactions={item.total_transaction}
                                    id={item.id}
                                />
                        </Grid> 
                            )
                        }
                    </Grid>
                   
                </div>
            </div>
        );
    }
}

class Row extends Component {
    render(){
        return(
            <div className={rstyle.root}>
                <div className={rstyle.image}>
                    <img src={this.props.imageUrl} alt="brand" />  
                </div>

                <div className={rstyle.content}>
                    <div className={rstyle.name}>
                        <div>{this.props.id}</div>
                        <span>
                            {this.props.name}
                        </span>
                        
                    </div>
                    <div className={rstyle.location}>
                        <div className="icon">
                            <img src="https://image.similarpng.com/very-thumbnail/2021/01/Location-icon-design-on-transparent-background-PNG.png" alt="locationicon" />
                        </div>
                        <div>
                            {this.props.location}
                        </div>
                    </div>
                    <div className={rstyle.infos}>
                        <span>{this.props.ntransactions} transactions</span>
                        &emsp;
                        <span>{this.props.completion}% completion</span>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default DashBoard
