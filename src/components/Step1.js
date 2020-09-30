import React,{useContext, useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Container} from 'reactstrap';
import {Link} from "react-router-dom";
import {Step1Context} from '../contexts/Step1ConText';
export default function(){
            const [meal,setMeal] = useState("");
            const [number,setNumber] = useState("");
            const {set} = useContext(Step1Context);
            const vali = (meal,number) =>{
                if(meal===""||number <1)
                    {
                        alert("Hãy nhập đủ cả 2 trường")
                        return;
                    }
                else if(number>10){
                    alert("số người phải nhỏ hơn 10")
                    return;
                }
                else{
                    set(meal,number);
                }
            }
            const url = (meal,number) =>{
                if(meal===""||number <1||number>10)
                    {
                        
                        return "";
                    }
                    return "/step2";
               
            }
    return(
        <Container>
            <div>
            <Form>
                
                <FormGroup>
                    <Label for="selectMeal">Please select a meal</Label>
                    <Input 
                    type="select"
                    id="selectMeal"
                    onChange={(e)=>{setMeal(e.target.value)}}>
                    <option></option>
                    <option>breakfast</option>
                    <option>lunch</option>
                    <option>dinner</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label >Please enter number of people</Label>
                    <Input type="number" max="10" min="1" onChange={(e)=>{setNumber(parseInt(e.target.value))}}>
                    </Input>
                </FormGroup>
                <Link to={()=>url(meal,number)}><Button onClick={()=> {
                    vali(meal,number)
                    
                }} > Next</Button></Link>
            </Form>
            </div>
        </Container>
        
    )
}