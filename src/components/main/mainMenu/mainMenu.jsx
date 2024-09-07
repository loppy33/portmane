import './MainMenu.sass';
import useSound from 'use-sound';
import React from 'react';

import pomaralsya from './assets/pomaralsya.mp3';
import shonado from './assets/shonado.mp3';
import nelsya from './assets/nelsya.mp3';

import bred from './assets/bred.mp3';
import pohuy from './assets/pohuy.mp3';
import pidr from './assets/pidr.mp3';
import neponyal from './assets/neponyal.mp3';

function MainMenu(props) {
    const [playPomaralsya] = useSound(pomaralsya);
    const [playShoNado] = useSound(shonado);
    const [playNelsya] = useSound(nelsya);

    const [playPidr] = useSound(pidr);
    const [playNePonyal] = useSound(neponyal);
    const [playBred] = useSound(bred);
    const [playPohuy] = useSound(pohuy);

    const audioTracks = [
        { label: 'Я бы помарался', play: playPomaralsya },
        { label: 'Мне просто щяс нельзя', play: playNelsya },
        { label: 'Шо надо я тут', play: playShoNado },

        { label: 'како пидр блять', play: playPidr },
        { label: 'так, а я что то не понял', play: playNePonyal },
        { label: 'мне похуй кто создал', play: playPohuy },
        { label: 'чо чо чо за бр…роисходит', play: playBred },
    ];

    return (
        <div className="MainMenu">

            <h1>Кто здесь должник?</h1>
            <div className="first">
                <a href="#/" onClick={() => props.setPage('game')}>Начать игру</a>
                {/* <a href="#/">Купить персонажа</a> */}
            </div>
            {/* <div className="second">
                <a href="#/">Настройки</a>
                <a href="#/">Об игре</a>
            </div> */}
            <div className="audios">
                {audioTracks.map((audio, index) => (
                    <a key={index} href="#/" onClick={() => audio.play()}>
                        {audio.label}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default MainMenu;
