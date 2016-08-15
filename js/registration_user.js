function register_button() { // заносит данные из полей регистрации в хранилище	
	function User() {
		this.name = '';
		this.password = '';
		this.email = '';
		this.role = '';
	}

	User.prototype.save = function() {
		localStorage.setItem('user1', JSON.stringify(user));
	}

	User.prototype.fetch = function() {
		console.log(localStorage.getItem('user1'));	
	}

	var user = new User();

	user.name = document.getElementById('name_user').value;	// .querySelector('#name_user' || 'div' || '.class') работает медленнее
	user.password = document.getElementById('password_user').value;
	user.email = document.getElementById('email_user').value;
	user.role = document.getElementById('role_user').value;

	user.save();
	user.fetch();
}
