/** @jsxImportSource theme-ui */
import { css } from "@emotion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons"

type Star = {
  value: number
  half: boolean
  name?: string
  checked?: boolean
  isStatic?: boolean
  setRating?: (rating: number) => void
}

const Star: React.FC<Star> = ({
  value,
  half,
  name,
  checked,
  isStatic,
  setRating,
}) => {
  return (
    <>
      <label
        aria-label={`${value} stars`}
        className={`rating__label ${half && `rating__label--half`} ${
          checked && `rating__label--checked`
        }`}
        htmlFor={`rating-${name}-${value.toString().replace(".", "")}`}
      >
        <FontAwesomeIcon
          className={`rating__icon rating__icon--star fa fa-star${
            half && `-half`
          }`}
          icon={half ? faStarHalf : faStar}
        />
      </label>
      {!isStatic && (
        <input
          className="rating__input"
          name={name}
          id={`rating-${name}-${value.toString().replace(".", "")}`}
          value={`${value}`}
          type="radio"
          onChange={e => setRating(e.target.value)}
        />
      )}
    </>
  )
}

type StarRating = {
  name?: string
  updateRating?: (rating: number) => void
}

const StarRating: React.FC<StarRating> = ({ name, updateRating }) => {
  let stars = []
  let half = false
  for (let i = 0.5; i <= 5; i = i + 0.5) {
    stars.push(
      <Star
        key={name + "-" + i}
        value={i}
        half={(half = !half)}
        isStatic={false}
        setRating={updateRating}
        name={name}
      />
    )
  }
  return (
    <div css={[styles, stylesInput]}>
      <div className="rating-group">{stars}</div>
    </div>
  )
}

type StarRatingStatic = {
  name?: string
  rating?: number
}

const StarRatingStatic: React.FC<StarRatingStatic> = ({ name, rating }) => {
  rating = Math.round(rating / 0.5) * 0.5

  let stars = []
  let half = false
  for (let i = 0.5; i <= 5; i = i + 0.5) {
    stars.push(
      <Star
        key={name + "-" + i}
        value={i}
        half={(half = !half)}
        isStatic={true}
        checked={rating === i}
      />
    )
  }
  return (
    <div css={styles}>
      <div className="rating-group">{stars}</div>
    </div>
  )
}

const styles = css`
  .rating-group {
    display: inline-flex;
  }

  .rating__icon {
    pointer-events: none;
  }

  /* hide radio inputs */
  .rating__input {
    position: absolute !important;
    left: -9999px !important;
  }

  .rating__label {
    padding: 0 2px;
    font-size: 1.6rem;
  }

  .rating__label--half {
    padding-right: 0;
    margin-right: -20px;
    z-index: 2;
    width: 20px;
  }

  .rating__icon--star {
    color: orange;
  }

  /* if any input is checked, make its following siblings grey */
  .rating__input:checked ~ .rating__label .rating__icon--star,
  .rating__label--checked ~ .rating__label .rating__icon--star {
    color: #ddd;
  }
`

const stylesInput = css`
  .rating__label {
    cursor: pointer;
  }

  /* make all stars orange on rating group hover */
  .rating-group:hover .rating__label .rating__icon--star,
  .rating-group:hover .rating__label--half .rating__icon--star {
    color: orange;
  }

  /* make hovered input's following siblings grey on hover */
  .rating__input:hover ~ .rating__label .rating__icon--star,
  .rating__input:hover ~ .rating__label--half .rating__icon--star {
    color: #ddd;
  }
`

export { StarRating as default, StarRatingStatic }
