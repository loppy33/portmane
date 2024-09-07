import './win.sass';
import Image1 from './assets/win.png';

function Win(props) {
  return (
    <div className="Win">
      <div className='modal'>
        <h3>Вы выиграли</h3>
        <p>Вы раздали все долги</p>
        <img src={Image1} alt="" srcset="" />
        <a href="#/" onClick={() => {
          props.setLvl(1)
          props.setDuty(400)
          props.setMode('')
        }}>Вернуться назад</a>

      </div>
    </div>
  );
}

export default Win;            