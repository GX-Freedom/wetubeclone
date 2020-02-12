import routers from "../routers";

export const getJoin = (req, res) => {
    res.render("join", {
        pageTitle: "Jo in"
    })
}
export const postJoin = (req, res) => {

    const {

        body: { name, email, password, password2 } } = req;
    if (password !== password2) {
        res.satus(400);
        res.render("join", {
            pageTitle: "Join"
        });
    }
    else {
        //To Do: Register User
        //To Do: Log user in
        res.redirect(routers.home);
    }

    res.render("join", {
        pageTitle: "Join"
    });
}


export const getLogin = (req, res) =>
    res.render("login", { pageTitle: "LogIn" });
export const postLogin = (req, res) => {

    res.redirect(routers.home);
}



export const editProfile = (req, res) => {
    res.render("editProfile", { pageTitle: "Edit Profile" })

}

export const logout = (req, res) => {
    //To Do : process Log Out
    res.render(routers.home);

}



export const changePassword = (req, res) =>
    res.render("changePassword", { pageTitle: "Change Password" });

export const userDetail = (req, res) =>
    res.render("userDetail", { pageTitle: "user Detail" });

export const users = (req, res) =>
    res.render("users", { pageTitle: "users" });

