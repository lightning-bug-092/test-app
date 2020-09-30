import React,{useState,useEffect, useContext} from 'react';
import { Button, Form, FormGroup, Label, Input, Container} from 'reactstrap';
import {Link} from "react-router-dom";
import axios from 'axios';
import {Step1Context} from '../contexts/Step1ConText'
export default function(){
    const [res,setRes] = useState([]);
    const [restaurantName,setRestaurantName] = useState("");
    useEffect(() => {
       async function getData(){
           let a = await axios.get('https://i51dt.sse.codesandbox.io/dishes')
            let data = await a.data;
            setRes(data);
       }
       getData();
      },[]);
        const {meal,setRestaurant,setRestaurantChoose} = useContext(Step1Context);
        const listRestaurant =  res.filter((restaurant) => {
               return restaurant.availableMeals.indexOf(meal)!==-1;  
           })
        let b = listRestaurant.map((item) => item.restaurant);
        b = [...new Set(b)];
        const getRestaurant = () =>{  if(restaurantName===""){
            alert("Hãy chọn trường dữ liệu")
            return [];
        }
            let restaurantChoose =  listRestaurant.filter(item =>{
            return item.restaurant.indexOf(restaurantName)!==-1
            })
        return restaurantChoose;
    }
    const url = (resName) =>{
        if(resName==="")
            {
                return "/step2";
            }
            return "/step3";
       
    }
    return(
        <Container>
            <div>
            <Form>
                
                <FormGroup>
                    <Label for="exampleSelect">Please select a restaurant</Label>
                    <Input type="select" value={restaurantName} onChange={(e)=>{setRestaurantName(e.target.value)}}>
                        <option></option>
                        {b.map((res,index) =><option key={index}>{res}</option>)}
                    </Input>
                </FormGroup>
                <Link to="/" className="mr-4"><Button> Previous </Button></Link>
                <Link to={()=>url(restaurantName)}>
                    <Button onClick={()=> { 
                    let resChoose = getRestaurant()
                    if(resChoose.length!==0){
                        setRestaurant(resChoose)
                    setRestaurantChoose(resChoose[0])
                    }
                    }}> Next 
                    </Button>
                </Link>
            </Form>
            </div>
        </Container>
    )
}