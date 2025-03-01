import './CardMovies.css';

function CardMovies(props) {
  return (
    <div className="container-card">
        <img src={props.img} alt={props.alt} />
        <div className='alignTitleCard'>
            <h2>{props.link}</h2>
        </div>
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

export default CardMovies;
