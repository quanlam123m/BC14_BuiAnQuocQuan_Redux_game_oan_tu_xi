import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    render() {
        return (
            <div className="text-center player">
                <div className="think">

                    <img style={{transform:'rotate(120deg)'}} 
                    className="mt-2" width={75} height={75} 
                    src={this.props.mangDatCuoc.find(item=>item.datCuoc === true).hinhAnh} 
                    alt="./img/Oantuti/bua.png"/>
                </div>
                <div className="speech-bubble"></div>
                    <img style={{width:180, height:180}} src="./img/Oantuti/player.png" 
                    alt="./img/Oantuti/player.png"/>

                <div className="row">
                    {this.props.mangDatCuoc.map((item, index) => {

                        // Xét giả trị đặt cược thêm viền cho item chọn
                        
                        let border = {};
                        if(item.datCuoc) {
                            border = {border:'3px solid orange'};
                        }

                        return <div className="col-4">
                        <button onClick={()=> {
                            this.props.datCuoc(item.ma)
                        }} style={border} className="btnItem">
                            <img width={35} height={35} 
                            src={item.hinhAnh} 
                            alt={item.hinhAnh}/>
                        </button> 
                    </div>
                    })}
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOanTuTiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)
