export default function uuid() {
    var guid = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        guid[i] = hexDigits.substr(Math.random() * 0x10, 1);
    }
    guid[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    guid[19] = hexDigits.substr((parseInt(guid[19]) & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    guid[8] = guid[13] = guid[18] = guid[23] = "-";
    return guid.join("");
}
