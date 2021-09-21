import React, { Component } from 'react'
import './BaiTapOanTuTi.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'
import { connect } from 'react-redux'

class BaiTapOanTuTi extends Component {
    render() {
        return (
            <div className="bgGame">
                <div className="row text-center mt-5">
                    <div className="col-4">
                        <Player/>
                    </div>
                    <div className="col-4">
                        <KetQuaTroChoi/>
                        <button className="btn btn-success p-2 display-3 mt-3" 
                        onClick ={()=> {
                            this.props.playGame()
                        }}>
                            Play Game
                        </button>
                    </div>
                    <div className="col-4">
                        <Computer/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            
            let count = 0;
            // Khai báo hàm lặp 
            let randomComputer = setInterval(() => {
                dispatch({
                    type: 'RANDOM'
                })
                count ++;
                if (count > 10) {
                    // Dừng hàm setInterval
                    clearInterval(randomComputer)

                    dispatch({
                        type: 'END_GAME',

                    })
                }
            }, 100)
        }
    }
}

export default connect(null, mapDispatchToProps)(BaiTapOanTuTi)
