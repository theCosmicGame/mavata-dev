export default function inStr(s, str) {
  
    if (s.length == 0 && str.length == 0) {
        return true;
    } else if (s.length == 0 && str.length != 0) {        
        return true;
    }

    if (s.length > 1 && s[0] == '*' &&
        str.length == 0) {
            return false;
        }

    if ((s.length > 1 && s[0] == '?') ||
        (s.length != 0 && str.length != 0 &&
        s[0] == str[0])) {
            return inStr(s.substring(1),
                        str.substring(1));
        }

    if (s.length > 0 && s[0] == '*') {
        return inStr(s.substring(1), str) ||
            inStr(s, str.substring(1));
    }

    return false;
}