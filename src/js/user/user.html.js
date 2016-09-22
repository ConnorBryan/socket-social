module.exports = {
    createUserPanelHtml: () => {
        return `
            <section id="create_user_flasher" class="alert alert-success panel-alert"></section>
            <div class="panel panel-primary">
                <header class="panel-heading">
                    <h3>
                        <i class="fa fa-user"></i><i class="fa fa-plus"></i> &nbsp;Create User
                    </h3>
                </header>
                <div class="panel-body">
                    <form id="create_user_form" class="col-md-12">
                        <section class="row">
                            <fieldset class="form-group">
                                <label>Email</label>
                                <input id="create_user_email" type="email" class="form-control" required />
                            </fieldset>
                            <fieldset class="form-group">
                                <label>Password</label>
                                <input id="create_user_password" type="password" class="form-control" required />
                            </fieldset>
                        </section>
                    </form>
                </div>
                <footer class="panel-footer">
                    <button id="create_user_clear" class="btn btn-default"><i class="fa fa-trash"></i>
                        Clear
                    </button>
                    <button id="create_user_submit" class="btn btn-default"><i class="fa fa-arrow-right"></i>
                        Submit
                    </button>
                </footer>
            </div>
        `;
    },
    createUserListHtml: () => {
        return `
            <section class="panel panel-primary">
                <header class="panel-heading">
                    <h3><i class="fa fa-users"></i> User List</h3>
                </header>
                <div class="panel-body user_list_panel">
                    <table class="table">
                        <thead>
                            <tr>
                                <td></td>
                                <td>User</td>
                                <td>ID</td>
                            </tr>
                        </thead>
                        <tbody class="user_list_rows"></tbody>
                    </table>
                </div>
                <footer class="panel-footer">
                    <section class="row">
                        <form class="col-md-12">
                            <fieldset class="form-group">
                                <input class="user_list_filter form-control" type="text" placeholder="Filter" />
                            </fieldset>
                        </form>
                    </section>
                </footer>
            </section>
        `;
    }
};