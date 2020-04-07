<template>
    <div class="user">
        <div class="user-info">
            <div class="portrait">
                <img id="headPic" :src="imgAvator" alt="">
                <input class="avatar-input" @change="addImg($event)" ref="inputer" type="file" accept="image/*" multiple="" />
            </div>
            <div class="username">
                <div class="text">{{ user.nickName }}</div>
                <img v-if="user.hasUpdateName === -1" @click="handleShowPopup" src="@/assets/wap/images/personal_ic_modify@3x.png" alt="">
            </div>
            <div class="platform">平台号：{{ user.uid }}</div>
        </div>
        <div class="user-line" />
        <div class="user-set">
            <div @click="handlePassword" class="set set-password border">
                <div class="left">
                    <img src="@/assets/wap/images/personal_ic_password@3x.png" alt="">
                    <div class="txt">修改密码</div>
                </div>
                <div class="right">
                    <img src="@/assets/wap/images/personal_ic_more_b9@3x.png" alt="">
                </div>
            </div>
            <div @click="handleBanding" class="set set-banding border">
                <div class="left">
                    <img src="@/assets/wap/images/personal_ic_phone@3x.png" alt="">
                    <div class="txt">绑定手机</div>
                </div>
                <div class="right">
                    <img src="@/assets/wap/images/personal_ic_more_b9@3x.png" alt="">
                </div>
            </div>
            <div @click="handleIdentity" class="set set-identity border">
                <div class="left">
                    <img src="@/assets/wap/images/personal_ic_status@3x.png" alt="">
                    <div class="txt">身份认证</div>
                </div>
                <div class="right">
                    <img src="@/assets/wap/images/personal_ic_more_b9@3x.png" alt="">
                </div>
            </div>
        </div>
        <div class="popup" v-if="popupShow">
            <div class="popup-bg" />
            <div class="dialog">
                <div class="log-title">昵称</div>
                <div class="input">
                    <input class="name" maxlength="7" type="text" v-model="nickName">
                    <img v-show="nickName" @click="handleDelete" src="@/assets/wap/images/search_ic_close@3x.png" alt="">
                </div>
                <div class="btn">
                    <div class="btn-left" @click="handleShow">取消</div>
                    <div class="btn-right" @click="setUserName">完成</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
let headPic = require('@/assets/wap/images/personal_head@3x.png')
export default {
    data () {
        return {
            user: {
                username: '',
                uid: '',
                avatar: '',
                firstUpdateName: '',
                mobile: ''
            },
            imgAvator: '',
            userName: '',
            nickName: '',
            popupShow: false,
            uploadFile: ''
        }
    },
    created () {
        this.getInit()
    },
    methods: {
        // 前往修改密码
        handlePassword () {
            this.$router.push('/user/changePassword')
        },
        // 前往绑定手机
        handleBanding () {
            if (this.user.mobile) {
                this.$router.push({
                    name: 'untyingBanding',
                    params: {
                        mobile: this.user.mobile
                    }
                })
            } else {
                this.$router.push('/user/banding')
            }
        },
        // 前往身份认证
        handleIdentity () {
            if (this.user.hasVerifyRealName === 1) {
                this.$router.push({
                    name: 'identityInfo',
                    params: {
                        idCard: this.user.idCard,
                        realname: this.user.realname
                    }
                })
            } else {
                this.$router.push('/user/identity')
            }
        },
        // 删除输入框内容
        handleDelete () {
            this.nickName = ''
        },
        // popup是否展示
        handleShowPopup () {
            this.popupShow = true
        },
        handleShow () {
            this.popupShow = false
        },
        // 完成修改用户名
        setUserName () {
            if (this.nickName === '') {
                this.$Toast('用户名不能为空')
                return
            }
            if (this.user.hasUpdateName === 1) {
                return false
            } else {
                let data = {
                    nickname: this.nickName
                }
                if (this.user.nickName === this.nickName) {
                    this.$Toast('用户名一致')
                } else {
                    this.$apis.editUserInfo(data).then((res) => {
                        if (res.code === '2000') {
                            this.popupShow = false
                            this.$Toast('修改成功')
                            this.getUserInfo()
                        } else {
                            this.$Toast(res.message)
                        }
                    })
                }
            }
        },
        getInit () {
            if (localStorage.getItem('isLogin') === 'true') {
                this.$apis.getUserInfo().then(res => {
                    if (res.code === '2000') {
                        this.user = res.data
                        if (res.data.avatar === '' || res.data.avatar.indexOf('http') === -1) {
                            this.imgAvator = headPic
                        } else {
                            this.imgAvator = res.data.avatar
                        }
                        if (res.data.nickName === '') {
                            this.user.hasUpdateName = -1
                            this.user.nickName = '未设置昵称'
                        }
                    } else {
                        this.$Toast(res.message)
                        this.$apis.logout().then((res) => {
                            if (res.code === '2000') {
                                // this.$Toast('')
                                this.langShow = -1
                                this.flag = 1
                                localStorage.setItem('isLogin', false)
                                this.$router.push('/home')
                            }
                        })
                    }
                })
            } else {
                this.$router.push('/home')
            }
        },
        // 头像图片信息
        addImg (e) {
            let inputDOM = this.$refs.inputer
            let file = inputDOM.files
            let eventEle = e.target.files[0] || window.event.target.files[0]
            if (!eventEle) {
                return false
            }
            this.uploadFile = eventEle
            let data = {
                fileName: file[0].name,
                fileType: 1
            }
            let fileName = file[0].name
            let suffixIndex = fileName.lastIndexOf('.')
            let suffix = fileName.substring(suffixIndex + 1).toUpperCase()
            /* eslint-disable */
            if (suffix != 'JPG' && suffix != 'JPEG' && suffix != 'PNG' && suffix != 'GIF') {
                this.$Toast('请上传正确的图片格式')
                return
            }
            /* eslint-enable */

            if (file[0].size > 10240000) {
                this.$Toast('图片过大，请重新上传')
                return
            }
            this.$apis.getUploadInfo(data).then((res) => {
                this.uploadAliyun(res, this.uploadFile)
            })
        },
        // 上传阿里云并通知后端
        uploadAliyun (res, file) {
            if (res.code === '2000') {
                let objectName = res.data.key
                let OSS = require('ali-oss')
                let client = new OSS({
                    region: res.data.regionId,
                    accessKeyId: res.data.accessKeyId,
                    accessKeySecret: res.data.accessKeySecret,
                    stsToken: res.data.securityToken,
                    bucket: res.data.bucket
                })
                this.imgAvator = res.data.downloadPath
                let data = {
                    username: '',
                    avatar: res.data.downloadPath
                }

                const put = async () => {
                    try {
                        let result = await client.put(objectName, file)
                        if (result.res.statusCode === 200) {
                            // 通知后端
                            this.$apis.editUserInfo(data).then((res) => {
                                if (res.code === '2000') {
                                    this.$emit('isLogFn', 'log')
                                    this.$Toast('修改成功')
                                    this.isImg(data)
                                } else {
                                    this.$Toast(res.message)
                                }
                            })
                        } else {
                            // this.$message.error('上传阿里云失败')
                            // this.$Toast('上传失败')
                        }
                    } catch (e) {
                        // this.$message.error(e)
                        // this.$Toast('上传失败')
                    }
                }
                put()
            } else {
                this.$Toast(res.message)
            }
        },
        // 图片是否存在
        isImg (data) {
            let el = document.getElementById('headPic')
            let timer = setInterval(() => {
                if (el.width === 0) {
                    this.user.headPic = data.avatar + '?' + Date.parse(new Date())
                } else {
                    clearTimeout(timer)
                }
            }, 200)
        },
        // 获取oss凭证
        getUserInfo () {
            if (localStorage.getItem('isLogin') === 'true') {
                this.$apis.getUserInfo().then(res => {
                    if (res.code === '2000') {
                        this.user = res.data
                        this.imgAvator = res.data.avatar
                    } else {
                        this.$Toast(res.message)
                    }
                })
            } else {
                // this.$router.push('/user/login')
            }
        }
    }
}
</script>

<style lang="less" scope>
@import "./user.less";
</style>
