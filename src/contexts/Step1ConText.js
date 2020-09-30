import React,{Component} from 'react';

export const Step1Context = React.createContext();
export class Step1Provider extends Component{
    constructor(props){
        super(props);
        this.state = {
            meal:"",
            people:0,
            restaurant:[],
            cart:[],
            restaurantChoose:""
        }
        this.set = this.set.bind(this);
        this.setRestaurant = this.setRestaurant.bind(this);
        this.setCart = this.setCart.bind(this);
        this.setRestaurantChoose = this.setRestaurantChoose.bind(this);
    } 

    set(m,p){
        this.setState({
            meal:m,
            people:p
        })
    }
    setRestaurant(r){
        this.setState({
            restaurant:r
        })
    }
    setCart(item){
        let index = -1;
        let items = [...this.state.cart];
        items.map((it,i)=>{
            if(it.dish===item.dish){
                index =i;
            }
        })
        if(index===-1){
            this.setState({
                cart: this.state.cart.concat(item)
            })
        }else
       {
           items[index].count += item.count;
           this.setState({
               cart:items
           })
       }
    }
    setRestaurantChoose(restaurant){
        this.setState({restaurantChoose:restaurant.restaurant})
    }
    render(){
        return(
            <Step1Context.Provider value = {
                {data:this.state.data,
                meal:this.state.meal,
                people:this.state.people,
                restaurant:this.state.restaurant,
                cart:this.state.cart,
                restaurantChoose:this.state.restaurantChoose,
                set:this.set,
                setRestaurant:this.setRestaurant,
                setCart:this.setCart,
                setRestaurantChoose:this.setRestaurantChoose
                }}>
                {this.props.children}
            </Step1Context.Provider>
        )
    }
}