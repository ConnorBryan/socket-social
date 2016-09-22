module.exports = {
    createUser: data => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: '/signup',
                dataType: 'JSON',
                data,
                success: user => resolve(user),
                error: err => reject(err)
            });
        });
    },
    signinUser: data => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: '/signin',
                dataType: 'JSON',
                data,
                success: user => resolve(user),
                error: err => reject(err)
            });
        });
    },
    getUsers: () => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'GET',
                url: '/users',
                dataType: 'JSON',
                success: users => resolve(users),
                error: err => reject(err)
            });
        });
    }
};