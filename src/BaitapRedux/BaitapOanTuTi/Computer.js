import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
    render() {
        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -50px;}
            25% {top: 100px;} 
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0;}
          }`
        return (
            <div className="text-center player">
                <style>
                    {keyframe}
                </style>
                <div className="think">
                    <img 
                    style={{position: 'absolute', 
                    left: '30%',
                    animation: `randomItem${Date.now()} 0.8s`,
                    transform:'rotate(120deg)'}} className="mt-2" width={75} height={75} 
                    src={this.props.computer.hinhAnh} alt={this.props.computer.hinhAnh}/>
                </div>
                <div className="speech-bubble"></div>
                <img style={{width:180, height:180}} src="./img/Oantuti/playerComputer.png" 
                alt="./img/Oantuti/player.png"/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        computer: state.BaiTapOanTuTiReducer.computer
    }
}

export default connect(mapStateToProps)(Computer)