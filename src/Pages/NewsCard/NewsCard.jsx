import moment from "moment/moment";
import React from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaBookmark, FaShareAlt ,FaRegEye,FaStar, FaRegStar} from "react-icons/fa";
import Rating from "react-rating";
const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author,total_view, rating } = news;
  return (
    <div>
      <Card className=" mb-4">
        <Card.Header className="d-flex align-items-center">
          <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
          <div className="p-2 flex-grow-1">
            <p className="mb-0">{author?.name}</p>
            <p>
              <small>{moment(author?.published_date).format("L")}</small>
            </p>
          </div>
          <div>
            <FaBookmark></FaBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...
                <Link to={`/news/${_id}`} className="text-decoration-none">
                  Read More
                </Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex align-items-center">
          <div className="d-flex flex-grow-1 align-items-center">
            <Rating
              placeholderRating={rating.number}
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar className="text-orange"></FaStar>}
            ></Rating>
            <p className="m-0 ps-2">{rating?.number}</p>
          </div>
          <div className="d-flex align-items-center">
            <FaRegEye></FaRegEye>
            <p className="m-0 ps-2">{total_view}</p>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
