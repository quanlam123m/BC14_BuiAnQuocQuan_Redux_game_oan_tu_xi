import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-warning">
                    {this.props.ketQua}
                </div>
                <div className="display-4 text-success">
                    Win: 
                    <span className="text-warning">{this.props.soBanThang}</span>
                </div>
                <div className="display-4 text-success">
                    Total Game: 
                    <span className="text-warning">{this.props.soBanChoi}</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ketQua: state.BaiTapOanTuTiReducer.ketQua,
        soBanThang: state.BaiTapOanTuTiReducer.soBanThang,
        soBanChoi: state.BaiTapOanTuTiReducer.soBanChoi,
    }
}

export default connect(mapStateToProps)(KetQuaTroChoi)
