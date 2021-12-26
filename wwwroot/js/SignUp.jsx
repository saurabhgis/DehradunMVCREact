

class SignUp extends React.Component {
	render() {

		function CaptchGen() {
			var a = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
			console.log(a.length);
			var max = 62;
			var str = "";
			for (var i = 0; i < 5; i++) {
				var num = Math.floor(Math.random() * max);
				str += a[num];
			}
			console.log(str);
			var temp = str;
			document.getElementById("Captch").value = str;
		}


		function CheckCaptch() {
			if (document.getElementById("EnterCaptch").value != document.getElementById("Captch").value) {
				alert("Invalid Captch");
				return false;
			} else {
				return true;
			}
		}
		return (
			<div>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
				<div className="container my-5" style={{ width: "50%" }}>
					<h5>ALL FIELDS ARE REQUIRED</h5>
					<h3>CREATE YOUR ACCOUNT</h3><br />
					<h2 className="card-title" style={{ color: "green" }}>Register</h2>
					<form method="POST" action="SignUp" >
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlfor="">First Name</label>
								<input type="text" className="form-control" id="Fname" name="Fname" placeholder="First Name" />
							</div>
							<div className="form-group col-md-6">
								<label htmlfor="">Last Name</label>
								<input type="text" className="form-control" id="Lname" name="Lname" placeholder="Last Name" />
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlfor="">User Name</label>
								<input type="text" className="form-control" id="username" name="username" placeholder="User Name" />
							</div>
							<div className="form-group col-md-6">
								<label htmlfor="">Mobile Number</label>
								<input type="text" className="form-control" id="Mobno" name="Mobno" placeholder="Mobile Number" />
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlfor="">Email</label>
								<input type="email" className="form-control" id="Email" name="Email" placeholder="Email" />
							</div>
							<div className="form-group col-md-6">
								<label htmlfor="">Password</label>
								<input type="password" className="form-control" id="Password" name="Password" placeholder="Password" />
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlfor="captcha">Captcha</label>
								<i className="fas fa-sync" style={{ fontSize: "15px" }} onClick={CaptchGen} ></i>
								<input type="text" className="form-control" id="Captch" style={{ width: "30%" }} name="Captch" readOnly />
								<input type="text" className="form-control" id="EnterCaptch" style={{ width: "70%" }} name="EnterCaptch" placeholder="Captcha" />
							</div>
						</div>

						<div className="form-group">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" id="gridCheck" />
								<label className="form-check-label" htmlfor="gridCheck">
									I agree to the Terms and Conditions
							</label>
							</div>
						</div>
						<input type="submit" className="btn btn1 text-light" style={{ backgroundColor: "green", width: "100%" }} value="Sign UP" />
					</form> <br />
					<div style={{ float: "right" }}>Already Registered ? <a href="SignIn">Sign In</a></div>
				</div>
			</div >
		);
	}
}


ReactDOM.render(
	<div>

		<SignUp />
	</div>,
	document.getElementById('content')
);  