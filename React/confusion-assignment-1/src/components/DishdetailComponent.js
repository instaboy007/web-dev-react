import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    renderDish(dish) {
        if (dish != null){
            return(
                <Card key={dish.id}>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(dish){
        if(dish==null){
            return(
                <div></div>
            )
        }
        else{
            const dishComments=dish.comments.map((comment)=>{
                console.log(comment);
                var date = new Date(comment.date);
                var day = date.getDate();
                const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
                var month = date.getMonth();
                var year = date.getFullYear();
                return(
                    <li>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {monthNames[month].slice(0,3)} {day}, {year}</p>
                    </li>
                )     
            });
            return(
                <div>
                    <header>
                        <strong><h4>Comments</h4></strong>
                    </header>
                    
                    <ul className="list-unstyled">{dishComments}</ul>
                </div>
                
            )
        }
    }

    render(){
        const dish=this.props.selectedDish;
        return(
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    {this.renderDish(dish)}
                </div>
                <div className='col-12 col-md-5 m-1'>
                    {this.renderComments(dish)}
                </div>
            </div>
        )
    }
}

export default DishDetail;