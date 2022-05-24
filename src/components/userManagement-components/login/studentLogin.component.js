import React, { Component } from 'react';
import axios from 'axios';
import styles from "./styles.module.css";

export default class StudentLogin extends Component {

  constructor(props) {
    super(props);


    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentPassword = this.onChangeStudentPassword.bind(this);
    this.onChangeRegistrationToLogin = this.onChangeRegistrationToLogin.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      students: [],
      email: '',
      password: ''
    }

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

  onChangeRegistrationToLogin() {
    this.props.history.push("/student-registration");
  }

  onSubmit(e) {
    e.preventDefault();


    const studentDetails = {
      email: this.state.email,
      password: this.state.password
    }

    console.log(studentDetails);

    axios.post('http://localhost:5000/student/login/', studentDetails)
      .then((res) => {
        window.sessionStorage.setItem(
          "loggeduser",
          JSON.stringify(res.data.user)
        );

        this.setState({
          email: "",
          password: "",
        });

        if (res.data.status === 200) {
          // navigate to the home page
          alert("Login Success");
          this.props.history.push("/home");
        } else {
          alert("Login Failed. Please re-check your credentials.");
        }
      });
  }


  render() {
    return (
      //   <div>
      //   <h3>Student Login form</h3>
      //   <br/>
      //   <form onSubmit={this.onSubmit}>

      //     <div className="form-group"> 
      //       <label>Student Email: </label>
      //       <input  type="email"
      //           required
      //           className="form-control"
      //           value={this.state.email}
      //           onChange={this.onChangeStudentEmail}
      //           />
      //     </div>

      //     <div className="form-group"> 
      //       <label>Password: </label>
      //       <input  type="password"
      //           required
      //           className="form-control"
      //           value={this.state.password}
      //           onChange={this.onChangeStudentPassword}
      //           />
      //     </div>

      //     <div className="form-group">
      //       <input type="submit" value="Login" className="btn btn-primary" />
      //     </div> 
      //   </form>
      // </div>

      <div className={styles.login_container}>
        <div className={styles.login_form_container}>
          <div className={styles.left}>
            <form className={styles.form_container} onSubmit={this.onSubmit}>
              <h1>Login to Your Account</h1>

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
                Sign in
              </button>
            </form>
          </div>

          <div className={styles.right}>
            <h1 style={{ textAlign: "center" }}>Create new Account</h1>

            <button
              type="button"
              onClick={this.onChangeRegistrationToLogin}
              className={styles.w_btn}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    )
  }
}