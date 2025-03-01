import './InfoMovies.css';

function InfoMovies(props) {
  return (
    <div className="container-infoMovies">
        <img src={props.img} alt={props.alt} />
        <h2>{props.title}</h2>
    </div>
  );
}

export default InfoMovies;