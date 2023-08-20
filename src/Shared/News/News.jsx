import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import EditorInsight from '../../Pages/EditorInsight/EditorInsight';
const News = () => {
    const singleNews = useLoaderData()
    const {_id,image_url, title, details} = singleNews
    
    return (
        <div>
           <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {details}
        </Card.Text>
        <Link to='/' variant="primary"><FaRegArrowAltCircleLeft></FaRegArrowAltCircleLeft> All news in this category</Link>
      </Card.Body>
    </Card>
    <EditorInsight></EditorInsight>
        </div>
    );
};

export default News;