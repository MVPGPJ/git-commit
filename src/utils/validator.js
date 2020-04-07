/* eslint-disable */
/*****************************************************************
                  表单校验工具类  (TeeMo)       
*****************************************************************/
export default {
    /**
    * 匹配Email地址
    */
    isEmail (str) {
        if (str == null || str == "") return false;
        var result = str.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
        if (result == null) return false;
        return true;
    },

    /**
    * 判断数值类型，包括整数和浮点数
    */
    isNumber (str) {
        if (isDouble(str) || isInteger(str)) return true;
        return false;
    },

    /**
    * 只能输入数字[0-9]
    */
    isDigits (str) {
        if (str == null || str == "") return false;
        var result = str.match(/^\d+$/);
        if (result == null) return false;
        return true;
    },

    /**
      * 是否存在空格
      */
    isSpace (str) {
        if (str == null || str == "") return false;
        var result = str.match(/\s+/g);
        if (result == null) return false;
        return true;
    },


    /**
    * 匹配mobile
    */
    isMobile (str) {
        if (str == null || str == "") return false;
        var result = str.match(/^((\(\d{2,3}\))|(\d{3}\-))?((13\d{9})|(15\d{9})|(18\d{9}))$/);
        if (result == null) return false;
        return true;
    },

    /**
    * 联系电话(手机/电话皆可)验证   
    */
    isTel (text) {
        if (isMobile(text) || isPhone(text)) return true;
        return false;
    },


    /**
    * 匹配integer
    */
    isInteger (str) {
        if (str == null || str == "") return false;
        var result = str.match(/^[-\+]?\d+$/);
        if (result == null) return false;
        return true;
    },


    /**
    * 匹配URL
    */
    isUrl (str) {
        if (str == null || str == "") return false;
        var result = str.match(/^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\’:+!]*([^<>\"])*$/);
        if (result == null) return false;
        return true;
    },

    /**
    * 匹配密码，长度在6-18之间，包含字符、数字，特殊字符
    */
    isPwd (str) {
        if (str == null || str == "") return false;
        var result = str.match(/^[^\u4E00-\u9FA5\uF900-\uFA2D\u0020]{6,18}$/);
        if (result == null) return false;
        return true;
    },
    /**
    * 匹配账号，长度在6-18之间，只能包含字符
    */
    isAccount (str) {
        if (str == null || str == "") return false;
        var result = str.match(/^(?![0-9]+$)[0-9A-Za-z]{6,18}$/);
        if (result == null) return false;
        return true;
    },


    /**
    * 匹配身份证
    */
    isIdentity (str) {
        if (str == null || str == "") return false;
        var result = str.match(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/);
        if (result == null) return false;
        return true;
    },

    /**
   * 匹配手机号
   */
    isPhone (str) {
        if (str == null || str == "") return false;
        var result = str.match(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/);
        if (result == null) return false;
        return true;
    },

    /**
    * 判断是否为合法字符(a-zA-Z0-9-_)
    */
    isRightfulString (str) {
        if (str == null || str == "") return false;
        var result = str.match(/^[A-Za-z0-9_-]+$/);
        if (result == null) return false;
        return true;
    },

    /**
    * 匹配身份证号码
    */
    isIdCardNo (num) {
        //　 if (isNaN(num)) {alert("输入的不是数字！"); return false;} 
        var len = num.length, re;
        if (len == 15)
            re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{2})(\w)$/);
        else if (len == 18)
            re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/);
        else { alert("输入的数字位数不对。"); return false; }
        var a = num.match(re);
        if (a != null) {
            if (len == 15) {
                var D = new Date("19" + a[3] + "/" + a[4] + "/" + a[5]);
                var B = D.getYear() == a[3] && (D.getMonth() + 1) == a[4] && D.getDate() == a[5];
            }
            else {
                var D = new Date(a[3] + "/" + a[4] + "/" + a[5]);
                var B = D.getFullYear() == a[3] && (D.getMonth() + 1) == a[4] && D.getDate() == a[5];
            }
            if (!B) { alert("输入的身份证号 " + a[0] + " 里出生日期不对。"); return false; }
        }
        if (!re.test(num)) { alert("身份证最后一位只能是数字和字母。"); return false; }

        return true;
    },

    /**
    * 匹配汉字
    */
    isChinese (str) {
        if (str == null || str == "") return false;
        var result = str.match(/^[\u4e00-\u9fa5]+$/);
        if (result == null) return false;
        return true;
    },

    /**
    * 匹配中文(包括汉字和字符)
    */
    isChineseChar (str) {
        if (str == null || str == "") return false;
        var result = str.match(/^[\u0391-\uFFE5]+$/);
        if (result == null) return false;
        return true;
    },

    /**
    * 字符验证，只能包含中文、英文、数字、下划线等字符。
    */
    stringCheck (str) {
        if (str == null || str == "") return false;
        var result = str.match(/^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/);
        if (result == null) return false;
        return true;
    },
    /**
    * 过滤中英文特殊字符，除英文"-_"字符外
    */
    stringFilter (str) {
        var pattern = new RegExp("[`~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]");
        var rs = "";
        for (var i = 0; i < str.length; i++) {
            rs = rs + str.substr(i, 1).replace(pattern, '');
        }
        return rs;
    },
    /**
    * 判断是否包含中英文特殊字符，除英文"-_"字符外
    */
    isContainsSpecialChar (str) {
        if (str == null || str == "") return false;
        var reg = RegExp(/[(\ )(\`)(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\+)(\=)(\|)(\{)(\})(\')(\:)(\;)(\')(',)(\[)(\])(\.)(\<)(\>)(\/)(\?)(\~)(\！)(\@)(\#)(\￥)(\%)(\…)(\&)(\*)(\（)(\）)(\—)(\+)(\|)(\{)(\})(\【)(\】)(\‘)(\；)(\：)(\”)(\“)(\’)(\。)(\，)(\、)(\？)]+/);
        return reg.test(str);
    },
    // 数字英文
    isNum (str) {
        if (str == null || str == "") return false;
        var result = str.match(/^[a-zA-Z0-9]+$/);
        if (result == null) return false;
        return true;
    },
}
