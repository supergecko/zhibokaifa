const util = {
    isLogin(){
        if (!uni.getStorageSync('user')) {
            return false;
        } else {
            return true;
        }
    },
    getNow(format = 'y-m-d h:i:s', time = 0){
        if (time === 0) {
            var myDate = new Date();
        } else {
            time = time + '';
            time = time.length == 10 ? time * 1000 : time;
            var myDate = new Date(time);
        }
        var year = myDate.getFullYear();
        var month = myDate.getMonth() + 1;
        if (day < 10) day = '0' + day;
        var day = myDate.getDate();
        if (day < 10) day = '0' + day;
        var hour = myDate.getHours();
        var minutes = myDate.getMinutes();
        var seconds = myDate.getSeconds();
        var now = myDate.toLocaleString();
        var str = '';
        switch (format) {
            case 'y-m-d h:i:s':
                str = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
            break;
            case 'y-m-d':
                str = year + '-' + month + '-' + day;
            break;
            case 'h:i:s':
                str = hour + ':' + minutes + ':' + seconds;
            break;
            case 'h:i':
                str = hour + ':' + minutes;
            break;
            default:
                str = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
        }
        return str;
    }
}

export default util;