import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            Permission: this.props.userEditObject.Permission
        }
    }

    saveButton = () => {
        var info = {}
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.Permission = this.state.Permission;

        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
    }
    

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="col-12">
                <form>
                    <div className="card text-white bg-secondary mb-3 mt-2">
                        <div className="card-header text-center">Sửa thông tin User</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input onChange={(event) => this.isChange(event)} type="text" name="name" className="form-control" placeholder="Tên user" aria-describedby="helpId" defaultValue={this.props.userEditObject.name}/>
                            </div>
                            <div className="form-group">
                                <input onChange={(event) => this.isChange(event)}  type="text" name="tel" className="form-control" placeholder="Điện thoại" aria-describedby="helpId" defaultValue={this.props.userEditObject.tel}/>
                            </div>
                            <div className="form-group">
                                <select onChange={(event) => this.isChange(event)}  className="custom-select" name="Permission" required defaultValue={this.props.userEditObject.Permission}>
                                    <option value>Chọn quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="reset" className="btn btn-block btn-danger" value="Lưu"
                                onClick={() => this.saveButton()}/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;