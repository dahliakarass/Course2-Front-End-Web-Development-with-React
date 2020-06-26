import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderDish({dish}) {
        if (dish != null){
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments}) {
        const commentlist = comments.map((c) => {
        
            // const date = new Date(c.date);
            // var y = date.toLocaleString('default',{year : 'numeric'}); 
            // var m = date.toLocaleString('default',{month : 'short'});
            // var d = date.toLocaleString('default',{day : '2-digit'});
    
            return(
            //<p><li>{c.comment}<br />-- {c.author}, {{m} {d}, {y}}</li></p>
            <div key={c.id}>
                <p><li>{c.comment}<br />-- {c.author}, 
                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))} </li></p>
            </div>
              
            );
    
          });
          if(comments!=null)
          {
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentlist}
                    </ul>
                </div>
            );
          }

        else {
            return(
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {
        if(props.dish!=null)
        {
            return (
                <div className="container">
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
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} />
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(
              <div></div>
            );
          }
    }

export default DishDetail;