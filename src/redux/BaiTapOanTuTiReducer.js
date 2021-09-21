const stateDefault = {
    mangDatCuoc: [
        {ma:'keo', hinhAnh:'./img/Oantuti/keo.png', datCuoc: false},
        {ma:'bua', hinhAnh:'./img/Oantuti/bua.png', datCuoc: false},
        {ma:'bao', hinhAnh:'./img/Oantuti/bao.png', datCuoc: true},
    ],
    ketQua: 'You winnn!!!',
    soBanThang: 0,
    soBanChoi:0,
    computer: {ma:'bao', hinhAnh:'./img/Oantuti/bao.png', datCuoc: false}
}

const BaiTapOanTuTiReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'CHON_KEO_BUA_BAO': {
            // Reset mảng cược
            let mangCuocUpdate = [...state.mangDatCuoc];
            // Tạo ra mảng cược mới từ mảng cũ và action. maCuoc do user truyền vào
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                if(item.ma === action.maCuoc) {
                    return {...item, datCuoc:true}
                }
                return {...item, datCuoc:false}
            })
            state.mangDatCuoc = mangCuocUpdate;
            return {...state}
        }

        case 'RANDOM': {
            let random = Math.floor(Math.random() * 3);
            let itemRandom = state.mangDatCuoc[random];
            state.computer = {...itemRandom};
            return{...state};
        }
        case 'END_GAME': {
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;

            switch(player.ma) {
                case 'keo':
                    if(computer.ma === 'keo') {
                        state.ketQua = 'You draw !!!';
                    }
                    else if (computer.ma === 'bua') {
                        state.ketQua = 'You lose !!!';
                    }
                    else {
                        state.soBanThang += 1;
                        state.ketQua ='You winnn!!!';
                    };
                break;

                case 'bao':
                    if(computer.ma === 'keo') {
                        state.ketQua = 'You lose !!!';
                    }
                    else if (computer.ma === 'bao') {
                        state.ketQua = 'You draw !!!';
                    }
                    else {
                        state.soBanThang += 1;
                        state.ketQua ='You winnn!!!';
                    }
                break;

                case 'bua': 
                    if (computer.ma === 'bao') {
                        state.ketQua = 'You lose !!!';
                    }
                    else if (computer.ma === 'bua') {
                        state.ketQua = 'You draw !!!';
                    }
                    else {
                        state.soBanThang += 1;
                        state.ketQua ='You winnn!!!';
                    }
                    break;
                default: 
                state.soBanThang += 1;
                state.ketQua ='You winnn!!!';
            }
            state.soBanChoi += 1;
            return {...state}
        }
        default: return {...state}
    }
}

export default BaiTapOanTuTiReducer;