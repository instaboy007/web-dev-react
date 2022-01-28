import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';

function RenderDish({dish}){
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

function RenderComments({dish}){
    if(dish==null){
        return(
            <div></div>
        )
    }
    else{
        const dishComments=dish.comments.map((comment)=>{
            var date = new Date(comment.date);
            var day = date.getDate();
            const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
            var month = date.getMonth();
            var year = date.getFullYear();
            return(
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {monthNames[month].slice(0,3)} {day}, {year}</p>
                </li>
            )     
        });
        return(
            <div key={dish.id}>
                <header>
                    <strong><h4>Comments</h4></strong>
                </header>
                <ul className="list-unstyled">{dishComments}</ul>
            </div>
            
        )
    }
}



const DishDetail=(props)=>{
    const dish=props.dish;
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    <RenderDish dish={dish} />
                </div>
                <div className='col-12 col-md-5 m-1'>
                    <RenderComments dish={dish} />
                </div>
            </div>
        </div>
        
    )
}

export default DishDetail;