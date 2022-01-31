import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';

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
        const dishComments=dish.map((comment)=>{
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
                <CommentForm dishId={dish.id} />
            </div>
            
        )
    }
}

const DishDetail=(props)=>{
    return(
        <div className='container'>
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    <RenderDish dish={props.dish} />
                </div>
                <div className='col-12 col-md-5 m-1'>
                    <RenderComments dish={props.comments} />
                </div>
            </div>
        </div>
        
    )
}

export default DishDetail;