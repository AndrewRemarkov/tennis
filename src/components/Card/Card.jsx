import './Card.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'

export default (props) => {
  const { className, category, label } = props

  return (
    <a
      className={clsx('card', className)}
      href="/"
    >
      <span className="card__category">{category}</span>
      <h2 className="card__title h3">
        {label}
        <Icon
          className="card__icon"
          name="external-link"
          hasFill
        />
      </h2>
    </a>
  )
}
