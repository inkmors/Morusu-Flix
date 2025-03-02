import './InfoMovies.css';

function InfoMovies(props) {
  return (
    <div className="container-infoMovies">
        <img src={props.img} alt={props.alt} />
        <h2>{props.title}</h2>
    </div>
  );
}

// function CardMovies(props) {
//   return (
//     <a href={props.link} className="container-card">
//         <img src={props.img} alt={props.alt} />
//         <div className='alignTitleCard'>
//             <div className='titleCardAvalible'>
//                 <h2>{props.title}</h2>
//                 <h3>Classificação: {props.avalible.toFixed(1)}</h3>
//             </div>
            
//         </div>
//     </a>
//   );
// }

export default InfoMovies;