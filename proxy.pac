var domains = {
    "*.ipw.cn": 1,
    "*.hfut1609.top": 1
};

var proxy = "SOCKS5 192.168.123.1:7891;PROXY 192.168.123.1:7890;";

var direct = 'DIRECT;';

function FindProxyForURL(url, host) {
    var lastPos;
    do {
        if (domains.hasOwnProperty(host)) {
            return direct;
        }
        lastPos = host.indexOf('.') + 1;
        host = host.slice(lastPos);
    } while (lastPos >= 1);
    return proxy;
}
