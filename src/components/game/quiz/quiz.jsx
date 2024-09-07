import Lose from './lose/lose';
import './quiz.sass';
import React, { useState } from 'react';
import Win from './win/win';

import haha from './assets/win.mp3';
import useSound from 'use-sound';

function Quiz(props) {
    const [duty, setDuty] = useState(400);
    const [lvl, setLvl] = useState(1);
    const [mode, setMode] = useState('')
    const [playHaha] = useSound(haha)
    // Вопрос, правильный ответ, варианты a, b, c, d
    const questions = {

        lvl1: [
            'Сколько я взял с собой денег?',
            '200 евро',

            '200 евро',
            '500 евро',
            '201 евро',
            '501 евро',
        ],

        lvl2: [
            'Понимаешь,Я бы конечно поморался за такое,честно...',
            'мне просто сейчас нельзя',

            'просто за мною следят',
            'но тут много людей не сейчас',
            'мне просто сейчас нельзя',
            'но не могу',
        ],


        lvl3: [
            'Что со мной сделали сегодня?',
            'меня разьебали по полной',

            'меня по серьезному обокрали',
            'меня буд то обосали',
            'меня реально взбесили',
            'меня разьебали по полной',
        ],

        lvl4: [
            'Какой пидр создал...',
            'эту группу,с фотографией моего лица ',

            'эту группу,с фотографией моего лица ',
            'эту группу, с моей аватаркой',
            'эту группу, с моим именем',
            'эту группу, с моими данными',
        ],
        lvl5: [
            'Спасибо не надо,Я уже обратился к...',
            'своему человеку',

            'своему другу',
            'своему знакомому',
            'своему человеку',
            'моему товарищу',
        ],
        lvl6: [
            'Я чет смотрю, у кого-то..',
            'крыша вообще совсем поехала',

            'голова конкретно едет',
            'мозги сказали до свидания',
            'голова перестала работать',
            'крыша вообще совсем поехала',
        ],
        lvl7: [
            'Так,а я что то не понял...',
            'а чё здесь вообще за хуйня происходит',

            'а чё здесь вообще за хуйня происходит',
            'что тут блять произошло вообще',
            'тут творится просто какой-то дурдом',
            'вы тут вообще что ли подурели или как',
        ],
        lvl8: [
            'У меня сорвалась встреча с...',
            'адвокатом',

            'программистом',
            'адвокатом',
            'другом',
            'моим человеком',
        ],

    }
    const handleAnswerClick = (index, choice) => {

        if (choice === questions[`lvl${lvl}`][1]) {
            setLvl((prevLvl) => prevLvl + 1);
            setDuty((duty) => duty - 50);
        } else {
            setMode('lose')
        }


    };

    return (
        <div className="Quiz">
            {mode === 'lose' ? <>
                {playHaha()}

                <Lose duty={duty} setDuty={setDuty} setLvl={setLvl} setMode={setMode}></Lose></> : ''}
            {duty === 0 ? (
                <>
                    {playHaha()}

                    <Win duty={duty} setDuty={setDuty} setLvl={setLvl} setMode={setMode} />
                </>
            ) : null}
            <a className='back' href="#/" onClick={() => props.setPage('main')}>Назад</a>
            <h1>Викторина с кошельком</h1>
            <p>Долги: {duty}€</p>
            {duty !== 0 && (
                <div>
                    <h2>{questions[`lvl${lvl}`][0]}</h2>
                    <img src={`assets/lvl${lvl}.png`} alt="" />
                    <div className="response">
                        {questions[`lvl${lvl}`].slice(2).map((choice, index) => (
                            <p key={index} className={`lvl${index}`} onClick={() => handleAnswerClick(index, choice)}>
                                {String.fromCharCode(97 + index)}) {choice}
                            </p>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
}


export default Quiz;
