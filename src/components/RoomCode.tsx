import copyImg from '../assets/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
    code: string;
}


export function RoomCode(props: RoomCodeProps){
    
    function copyRoomCodeToClipboard(){
        navigator.clipboard.writeText(props.code)
    }


    return(
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #-MhB3U3uNZ4UsIxCwi1o</span>
        </button>
    );
}