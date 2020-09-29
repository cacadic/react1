import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            Permission: ""
        }
    }
    

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });

        //package to item
        var item = {};
        item.id = this.state.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.Permission = this.state.Permission;


    }

    kiemTraTrangThai = () => {
        if(this.props.hienThiForm){
            return (
                <div className="col">
                    <form>
                        <div className="card border-primary mb-3 mt-2">
                            <div className="card-header">Thêm mới user vào hệ thống</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)} type="text" name="name" className="form-control" placeholder="Tên user" aria-describedby="helpId" />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)} type="text" name="tel" className="form-control" placeholder="Điện thoại" aria-describedby="helpId" />
                                </div>
                                <div className="form-group">
                                    <select onChange={(event) => this.isChange(event)} className="custom-select" name="Permission" required>
                                        <option value>Chọn quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-primary" onClick={(name, tel, Permission) => this.props.add(this.state.name, this.state.tel, this.state.Permission)} value="Thêm mới"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        } else {
            return;
        }
    }
    render() {
        return (
            <div>
                {this.kiemTraTrangThai()}
            </div>
        );
    }
}

export default AddUser;