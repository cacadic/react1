import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        if(this.props.data.Permission === 1) {return "Admin";}
        else if(this.props.data.Permission === 2) {return "Moderator";}
        else {return "Normal User";}
    }

    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }

    deleteButtonClick = (idUser) => {
        this.props.deleteButtonClick(idUser);
    }

    render() {
        return (
            <tr>
                <td>{this.props.stt + 1}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.tel}</td>
                <td>{
                    this.permissionShow()
                }</td>
                <td>
                <div className="btn-group">
                    <div className="btn btn-warning sua"><i className="fa fa-edit" onClick={() => this.editClick()}> Sửa</i></div>
                    <div className="btn btn-danger sua"><i className="fa fa-pencil" onClick={(idUser) => this.deleteButtonClick(this.props.data.id)}> Xóa</i></div>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;