import { ButtonCard } from '../../ui/components/ButtonCard'
import { Link } from 'react-router-dom'


type superhero ={
  id: string,
  superhero: string,
  publisher: string,
  alter_ego: string,
  first_appearance: string,
  characters: string,
}

type props = {
  hero: superhero;
}

export const HeroCard = ({hero: hero}: props) => {

  return (
    <>
      <div className="card">
          <img src={`/assets/heroes/${hero.id}.jpg`} alt="batman" className='border-2 border-transparent rounded-lg'/>
          <h2 className='mt-2 text-3xl'>
            {hero.superhero}
          </h2>
          <hr className='my-4'/>
          <p className='text-lg'>
            {hero.alter_ego}
          </p>
          <p className='text-lg text-slate-400'>
            {hero.first_appearance}
          </p>
          <hr className='my-4'/>
          <div className='text-center'>
            <Link to={`/hero/${hero.id}`}>
              <ButtonCard>
                More...
              </ButtonCard>
            </Link>
          </div>
      </div>
    </>
  )
}
