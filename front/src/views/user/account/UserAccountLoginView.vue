<template>
    <ContentField v-if="!$store.state.user.pulling_info">
        <div class="row justify-content-center">
            <div class="col-3">
                <!-- 提交以后不刷新 -->
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label for="username" class="form-label">用户名</label>
                        <input v-model="username" type="text" class="form-control" id="username" placeholder="用户名">
                      </div>
                      <div class="mb-3">
                        <label for="password" class="form-label">密码</label>
                        <input v-model="password" type="password" class="form-control" id="password" placeholder="密码">
                      </div>
                      <div class="error-message">{{ error_message }}</div>
                      <button type="submit" class="btn btn-primary">提交</button>
                </form>
                
            </div>
        </div>
    </ContentField>
</template>

<script>
    import ContentField from '@/components/ContentField.vue'
    import { useStore } from 'vuex';
    import { ref } from 'vue';
    import router from '@/router/index';
    
    export default {
        components: {
            ContentField,
        },
        setup() {
            const store = useStore();
            // ref创建一个响应式数据，一般来说用于创建简单类型的响应式对象，
            // 比如String、Number、boolean类型；
            let username = ref('');
            let password = ref('');
            let error_message = ref('');    

            const jwt_token = localStorage.getItem("jwt_token");
            if (jwt_token) {
                store.commit("updateToken", jwt_token);
                store.dispatch("getinfo", {
                    success() {
                        router.push({name: "home"});
                        store.commit("updatePullingInfo", false);
                    },
                    error() {
                        store.commit("updatePullingInfo", false);
                    },
                });
            } else {
                store.commit("updatePullingInfo", false);
            }

            const login = () => {
                store.dispatch("login", {
                    // ref 取值 .value
                    username: username.value,
                    password: password.value,
                    success(resp) {
                        store.dispatch("getinfo", {
                            success() {
                                router.push({name: 'home'});
                            },
                        });
                        
                        console.log(resp);
                    },
                    error() {
                        error_message.value = "用户名或密码错误";
                    }
                });
            }
            return  {
                username,
                password,
                error_message,
                login,
            }
        }
    }
</script>

<style scoped>
    button {
        width: 100%;
    }
    div.error-message {
        color: red;
    }
</style>