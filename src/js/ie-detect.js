const ua = window.navigator.userAgent.toLowerCase();
const is_ie = (/trident/gi).test(ua) || (/msie/gi).test(ua);

export { is_ie };