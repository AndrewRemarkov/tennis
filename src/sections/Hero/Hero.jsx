import './Hero.scss'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import Card from '@/components/Card'

export default () => {
  const titleId = 'hero-title'

  const cards = [
    {
      category: 'Услуги',
      label: 'Аренда корта',
    },
    {
      category: 'Услуги',
      label: 'Детский теннис',
    },
    {
      category: 'Услуги',
      label: 'Сборы команд',
    },
    {
      category: 'Турниры',
      label: 'Расписание',
    },
  ]

  return (
    <section
      className="hero"
      aria-labelledby={titleId}
    >
      <div className="hero__pano">
        <div className="hero__pano-inner container">
          <h1 className="hero__title h1">
            Петербургский <br /> теннисный клуб <br /> имени М.А. Пасечникова
          </h1>
          <a
            className="hero__play"
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              className="hero__play-button"
              label="Начать просмотр"
            >
              <Icon
                name="play"
                hasFill
              />
            </Button>
            <span className="hero__play-text">
              Посмотрите видео о нашем клубе
            </span>
          </a>
          <ul className="hero__card-box-list">
            {cards.map(({ category, label }, index) => (
              <li
                className="card-box-item"
                key={index}
              >
                <Card
                  category={category}
                  label={label}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
