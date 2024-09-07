import './lose.sass';

function Lose(props) {
  return (
    <div className="Lose">
      <div className='modal'>
        <h3>Вы проиграли</h3>
        <p>Осталось раздать <br /> долгов: {props.duty}</p>
        <a href="#/" onClick={() => {
          props.setLvl(1)
          props.setDuty(400)
          props.setMode('')
        }}>Вернуться назад</a>

      </div>
    </div>
  );
}

export default Lose;            