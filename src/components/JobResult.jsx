import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Star, StarFill } from 'react-bootstrap-icons';
import { addToFav, removeFromFav } from '../store/actions';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// const mapStateToProps = (s) => s;

// const mapDispatchToProps = (dispatch) => ({
//   addToFavourites: (company) => dispatch(addToFav(company)),
//   removeFromFavourites: (company) => dispatch(removeFromFav(company)),
// });

function JobResult({
  data,
  favourites,

  // addToFavourites,
  // removeFromFavourites,
}) {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const isFav = state.favourites.elements.includes(data.company_name);
  console.log('isFav,favourites', isFav, favourites);
  const toggleFavourite = () => {
    // isFav
    //   ? dispatch(addToFav(data.company_name))
    //   : dispatch(removeFromFav(data.company_name));
    if (!data.company_name === true) {
      dispatch(addToFav(data.company_name));
    } else {
      dispatch(removeFromFav(data.company_name));
    }
  };
  console.log('this is state in JobResult', state);
  console.log('this is data in JobResult', data.company_name);

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3} className="d-flex">
        {isFav ? (
          <StarFill
            color="gold"
            size={16}
            className="me-4 my-auto"
            onClick={toggleFavourite}
          />
        ) : (
          <Star
            color="gold"
            size={16}
            className="me-4 my-auto"
            onClick={toggleFavourite}
          />
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <Link to={{ pathname: data.url }} target="_blank">
          {data.title}
        </Link>
      </Col>
    </Row>
  );
}

// export default connect(mapStateToProps, mapDispatchToProps)(JobResult);
export default JobResult;
