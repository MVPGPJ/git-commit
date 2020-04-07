import { createAPI } from './setup'
import hostConfig from './config'

// let hostConfig = {
//     apiHost: 'http://bt-jlwweb-dev.y8511.cn'
// }
/**
 *  公用ajax请求方法
 */
const apis = {
    // 热词推荐
    listHotWords: (data) => createAPI(`${hostConfig.apiHost}/web/game/listHotWords`, 'post', data),
    // 游戏搜索
    searchGame: (data) => createAPI(`${hostConfig.apiHost}/web/game/searchGame`, 'post', data),
    // 游戏详情
    getGameDetails: (data) => createAPI(`${hostConfig.apiHost}/web/game/getGameDetails`, 'post', data),
    // 分类搜索资讯
    listPost: (data) => createAPI(`${hostConfig.apiHost}/web/post/listPost`, 'post', data),
    // 开服信息
    listOpenServer: (data) => createAPI(`${hostConfig.apiHost}/server/listOpenServer`, 'post', data),
    // 登陆状态下的游戏礼包
    listGameGift: (data) => createAPI(`${hostConfig.apiHost}/web/gift/listGameGift`, 'post', data),
    // 未登录状态下的游戏礼包
    listGameGiftNoLogin: (data) => createAPI(`${hostConfig.apiHost}/web/gift/listGameGiftNoLogin`, 'post', data),
    // 礼包详情
    getGift: (data) => createAPI(`${hostConfig.apiHost}/web/gift/getGift`, 'post', data),
    // 资讯详情
    getPost: (data) => createAPI(`${hostConfig.apiHost}/web/post/getPost`, 'post', data),
    // 热榜
    listWapHotGames: (data) => createAPI(`${hostConfig.apiHost}/web/game/listWapHotGames`, 'post', data),
    // 轮播图
    getBanners: (data) => createAPI(`${hostConfig.apiHost}/web/slide/listSlide`, 'post', data),
    // 最新咨询
    listNewPost: (data) => createAPI(`${hostConfig.apiHost}/web/post/listNewPost`, 'post', data),
    // 新游速递
    listNewGameRecommend: (data) => createAPI(`${hostConfig.apiHost}/web/game/listNewGameRecommend`, 'post', data),
    // 编辑推荐
    queryAuthorRecommend: (data) => createAPI(`${hostConfig.apiHost}/web/game/queryAuthorRecommend`, 'post', data),
    // 个人中心模块
    // 登录
    loginByPwd: (data) => createAPI(`${hostConfig.apiHost}/web/session/loginByPwd`, 'post', data),
    // 登出
    logout: (data) => createAPI(`${hostConfig.apiHost}/web/session/logout`, 'post', data),
    // 自定义注册
    customRegister: (data) => createAPI(`${hostConfig.apiHost}/web/session/customRegister`, 'post', data),
    // 手机号注册
    mobileRegister: (data) => createAPI(`${hostConfig.apiHost}/web/session/mobileRegister`, 'post', data),
    // 发送验证码
    getVcode: (data) => createAPI(`${hostConfig.apiHost}/web/session/getVcode`, 'post', data),
    // 手机号绑定
    bindPhone: (data) => createAPI(`${hostConfig.apiHost}/web/jlw/user/bindPhone`, 'post', data),
    // 解绑手机号
    unbindPhone: (data) => createAPI(`${hostConfig.apiHost}/web/jlw/user/unbindPhone`, 'post', data),
    // 修改密码
    updatePassword: (data) => createAPI(`${hostConfig.apiHost}/web/jlw/user/updatePassword`, 'post', data),
    // 编辑用户信息
    editUserInfo: (data) => createAPI(`${hostConfig.apiHost}/web/jlw/user/editUserInfo`, 'post', data),
    // 获取用户信息
    getUserInfo: (data) => createAPI(`${hostConfig.apiHost}/web/jlw/user/getUserInfo`, 'post', data),
    // 忘记密码
    forgetPassword: (data) => createAPI(`${hostConfig.apiHost}/web/jlw/user/forgetPassword`, 'post', data),
    // 获取OSS上传凭证信息
    getUploadInfo: (data) => createAPI(`${hostConfig.apiHost}/web/common/upload/getUploadInfo`, 'post', data),
    // 身份认证
    getIdCardInfo: (data) => createAPI(`${hostConfig.apiHost}/web/jlw/user/getIdCardInfo`, 'post', data),
    verifyIdCard: (data) => createAPI(`${hostConfig.apiHost}/web/jlw/user/verifyIdCard`, 'post', data),
    // 下载游戏
    getDownloadUrl: (data) => createAPI(`${hostConfig.apiHost}/web/game/getDownloadUrl`, 'post', data)
}
export default apis
