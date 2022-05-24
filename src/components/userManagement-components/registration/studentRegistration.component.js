import React, { Component } from 'react';
import axios from 'axios';
import styles from "./styles.module.css";


export default class StudentRegistration extends Component {

    constructor(props) {
        super(props);

        this.onChangeStudentID = this.onChangeStudentID.bind(this);
        this.onChangeStudentfirstName = this.onChangeStudentfirstName.bind(this);
        this.onChangeStudentlastName = this.onChangeStudentlastName.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentPassword = this.onChangeStudentPassword.bind(this);
        this.onChangeToLogin = this.onChangeToLogin.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            students: [],
            stdID: '',
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }

    }

    onChangeStudentID(e) {
        this.setState({
            stdID: e.target.value
        })
    }

    onChangeStudentfirstName(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeStudentlastName(e) {
        this.setState({
            lastName: e.target.value
        })
    }

    onChangeStudentEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangeStudentPassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onChangeToLogin() {
        this.props.history.push('/student-login');
    }

    onSubmit(e) {
        e.preventDefault();


        const studentDetails = {
            stdID: this.state.stdID,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }

        console.log(studentDetails);

        axios.post('http://localhost:5000/student/registration/', studentDetails)
            .then(res => alert(res.data));

        this.setState({
            stdID: '',
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })

        //after registration success navigate to the login
        this.props.history.push('/student-login');

        // axios.post('http://localhost:5000/student/registration/', studentDetails)
        //     .then((res) => {
        //         window.sessionStorage.setItem(
        //             "loggeduser",
        //             JSON.stringify(res.data.user)
        //         );

        //         this.setState({
        //             stdID: '',
        //             firstName: '',
        //             lastName: '',
        //             email: '',
        //             password: ''
        //         })

        //         if (res.data.status === 400) {
        //             // navigate to the login page
        //             alert("'Invalid password! (Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters)'");
        //             this.props.history.push("/student-login");
        //         }else if(res.data.status === 401){
        //             alert("User with given email already Exist!");
        //         } else {
        //             alert("Ragistration success");
        //         }
        //     });

    }



    render() {
        return (

            <div className={styles.signup_container}>
                <div className={styles.signup_form_container}>
                    <div className={styles.left}>

                        <h1>Welcome</h1>

                        <button type="button" className={styles.w_btn} onClick={this.onChangeToLogin}>
                            Sign in
                        </button>
                    </div>
                    <div className={styles.right}>
                        <form className={styles.form_container} onSubmit={this.onSubmit}>

                            <h1>Create Account</h1>

                            <div className="form-group">
                                <label>Student ID: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.stdID}
                                    onChange={this.onChangeStudentID}
                                />
                            </div>

                            <div className="form-group">
                                <label>Student first Name: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.firstName}
                                    onChange={this.onChangeStudentfirstName}
                                />
                            </div>

                            <div className="form-group">
                                <label>Student last Name: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.lastName}
                                    onChange={this.onChangeStudentlastName}
                                />
                            </div>

                            <div className="form-group">
                                <label>Student Email: </label>
                                <input type="email"
                                    required
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={this.onChangeStudentEmail}
                                />
                            </div>

                            <div className="form-group">
                                <label>Password: </label>
                                <input type="password"
                                    required
                                    className="form-control"
                                    value={this.state.password}
                                    onChange={this.onChangeStudentPassword}
                                />
                            </div>


                            <button type="submit" className={styles.g_btn}>
                                Sign up
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
