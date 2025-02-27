import './CardMovies.css';

function CardMovies(props) {
  return (
    <div className="container-card">
        <img src={props.img} alt={props.alt} />
        <div className='alignTitleCard'>
            <div className='titleCardAvalible'>
                <h2>{props.title}</h2>
                <h3>Classificação: {props.avalible.toFixed(1)}</h3>
            </div>
            {props.link}
        </div>
    </div>
  );
}

export default CardMovies;
