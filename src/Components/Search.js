import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userObj: {}
        }
    }

    getUserEditInfo = (info) => {
        this.setState({
            userObj: info
        });   
        this.props.getUserEditInfoApp(info);
    }

    isShowEditForm = () => {
        if(this.props.editUserStatus){
            return <EditUser 
                changeEditUserStatus={() => this.props.changeEditUserStatus()}
                userEditObject={this.props.userEditObject}
                getUserEditInfo={(info) => this.getUserEditInfo(info)}
                />;
        }
    }
    
    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue);
    }

    hienThiNut = () => {
        if(this.props.hienThiForm){
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()}>Đóng lại</div>;
        } else {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()}>Thêm mới</div>;
        }
    }

    render() {
        return (
            <div className="col-12">
                <div className="row">
                    {this.isShowEditForm()}
                </div>
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" onChange={(event) => this.isChange(event)} placeholder="Nhập tên cần tìm"/>
                        <div className="btn btn-info" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}>Tìm</div>
                    </div>
                </div>
                <div>
                    {this.hienThiNut()}
                </div>
                <hr/>
            </div>

        );
    }
}

export default Search;