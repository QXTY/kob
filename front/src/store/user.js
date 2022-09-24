import $ from 'jquery'

export default {
    state: {
        id: "",
        username: "",
        photo: "",
        token: "",
        is_login: false,
    },
    getters: {
    },
    mutations: {
        updateUser(state, user) {
            state.id = user.id;
            state.username = user.username;
            state.photo = user.photo;
            state.is_login = user.is_login;
        },
        updateToken(state, token) {
            state.token = token;
        },
        logout(state) {
            state.id = "";
            state.username = "";
            state.photo = "";
            state.token = "";
            state.is_login = false;
        },
    },
    //Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
    //因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 
    //和 context.getters 来获取 state 和 getters。
    actions: {
      login(context, data) {
        $.ajax({
            url: "http://localhost:3000/user/account/token",
            type: "post",
            data: {
                username: data.username,
                password: data.password,
            },
            success(resp) {
                if (resp.error_message === "success") {
                    context.commit("updateToken", resp.token);
                    data.success(resp);
                } else {
                    data.error(resp);
                }
            },
            error(resp) {
                data.error(resp);
            }
        });
      },
      getinfo(context, data) {
        $.ajax({
            url: "http://localhost:3000/user/account/info",
            type: "get",
            headers: {
                Authorization: "Bearer " + context.state.token,
            },
            success(resp) {
                if (resp.error_message === "success") {
                    context.commit("updateUser", {
                        ...resp,
                        is_login: true,
                    });
                    data.success(resp);
                } else {
                    data.error(resp);
                }     
            },
            error(resp) {
                data.error(resp);
            }
        })
      },
      logout(context) {
            context.commit("logout")
      }
    },
    modules: {
        
    }
}