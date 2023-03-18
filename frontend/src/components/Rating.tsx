import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Rating as RatingType } from '../types/Rating';

type Props = RatingType;

const Rating = (props: Props) => {
  return (
    <div className='rating'>
      <span>
        {props.value >= 1 ? (
          <FontAwesomeIcon icon={faStar} style={{ color: props.color }} />
        ) : props.value >= 0.5 ? (
          <FontAwesomeIcon
            icon={faStarHalfAlt}
            style={{ color: props.color }}
          />
        ) : (
          <FontAwesomeIcon icon={faStarEmpty} style={{ color: props.color }} />
        )}
      </span>
      <span>
        {props.value >= 2 ? (
          <FontAwesomeIcon icon={faStar} style={{ color: props.color }} />
        ) : props.value >= 1.5 ? (
          <FontAwesomeIcon
            icon={faStarHalfAlt}
            style={{ color: props.color }}
          />
        ) : (
          <FontAwesomeIcon icon={faStarEmpty} style={{ color: props.color }} />
        )}
      </span>
      <span>
        {props.value >= 3 ? (
          <FontAwesomeIcon icon={faStar} style={{ color: props.color }} />
        ) : props.value >= 2.5 ? (
          <FontAwesomeIcon
            icon={faStarHalfAlt}
            style={{ color: props.color }}
          />
        ) : (
          <FontAwesomeIcon icon={faStarEmpty} style={{ color: props.color }} />
        )}
      </span>
      <span>
        {props.value >= 4 ? (
          <FontAwesomeIcon icon={faStar} style={{ color: props.color }} />
        ) : props.value >= 3.5 ? (
          <FontAwesomeIcon
            icon={faStarHalfAlt}
            style={{ color: props.color }}
          />
        ) : (
          <FontAwesomeIcon icon={faStarEmpty} style={{ color: props.color }} />
        )}
      </span>
      <span>
        {props.value >= 5 ? (
          <FontAwesomeIcon icon={faStar} style={{ color: props.color }} />
        ) : props.value >= 4.5 ? (
          <FontAwesomeIcon
            icon={faStarHalfAlt}
            style={{ color: props.color }}
          />
        ) : (
          <FontAwesomeIcon icon={faStarEmpty} style={{ color: props.color }} />
        )}
      </span>
      <span>{props.text && props.text}</span>
    </div>
  );
};
Rating.defaultProps = {
  color: '#f8e825',
};
export default Rating;
