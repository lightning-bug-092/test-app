import React,{useState, useContext} from 'react';
import { Button, Form, FormGroup, Label, Input, Container,Table } from 'reactstrap';
import {Link} from "react-router-dom";
import {Step1Context} from '../contexts/Step1ConText'
export default function(){
    const [dish,setDish] = useState("");
    const [count,setCount] = useState(1);
    
    const {restaurant,cart,setCart,people} = useContext(Step1Context);
    const url = (dish,count) =>{
        if(dish===""||count<0||count<people||count>10||cart.length===0)
            {
                return "/step3";
            }
            return "/step4";
    }
    const vali = (dish,count) =>{
        if(dish===""||count<0||count<people||count>10){
            alert("Hãy chọn trường,số lượng phải nhỏ hơn 10 và lớn hơn số người ăn")
        }
        else{
            setCart({dish,count})
        }
    }
    return(
        <Container>
            <div>
            <Form>
                <FormGroup>
                    <Label for="exampleSelect">Please select a dish</Label>
                    <Input type="select"  onChange={(e)=> setDish(e.target.value)}>
                        <option></option>
                        {restaurant.map(res=> (<option>{res.name}</option>))}
                    </Input>
                    <Label for="exampleSelect">Please enter no. of serving</Label>
                    <Input type="number" defaultValue={count}  onChange={(e)=> setCount(parseInt(e.target.value))}>
                    </Input>
                    
                </FormGroup>
                <Button onClick={() => vali(dish,count)}>Add</Button>
            </Form>
            <Table dark className="mt-3">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Tên món</th>
                    <th>Số lượng</th>
                    </tr>
                </thead><tbody></tbody>
                <tfoot>
                  {cart.map((item,index)=>(<tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.dish}</td>
                      <td>{item.count}</td>
                  </tr>))}
                </tfoot>
            </Table>
            <Link to="/step2" className="mr-4"><Button> Previous </Button></Link>
            <Link to={()=>url(dish,count)}><Button> Next </Button></Link>
            </div>
        </Container>
    )
}