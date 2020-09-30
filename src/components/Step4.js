import React, { useContext } from 'react';
import {Container,Button} from 'reactstrap';
import {Link} from "react-router-dom";
import {Step1Context} from '../contexts/Step1ConText'
export default function(){
    const {restaurantChoose,cart,meal,people} = useContext(Step1Context);
    return(
        <Container>
            <div className="row mt-4">
                <div className="col-md-4">
                    Meal
                </div>
                <div className="col-md-8">{meal}</div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4">
                    No of People
                </div>
                <div className="col-md-8">{people}</div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4">
                    Restaurant
                </div>
                <div className="col-md-8">{restaurantChoose}</div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4">
                    Dishes
                </div>
                <div className="col-md-8">{cart.map(item => (<p>{item.dish}&emsp;{item.count}</p>))}</div>
            </div>
            <div className="mt-4">    
                <Link to="/step3" className="mr-4"><Button> Previous </Button></Link>
                <Link to="/Sub"><Button> Submit </Button></Link>
            </div>
        </Container>
       
    )
}