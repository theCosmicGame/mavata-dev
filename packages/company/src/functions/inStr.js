export default function inStr(first, second) {
  
    if (first.length == 0 && second.length == 0)
        return true;

    if (first.length > 1 && first[0] == '*' &&
        second.length == 0)
        return false;

    if ((first.length > 1 && first[0] == '?') ||
        (first.length != 0 && second.length != 0 &&
        first[0] == second[0]))
        return inStr(first.substring(1),
                    second.substring(1));

    if (first.length > 0 && first[0] == '*')
        return inStr(first.substring(1), second) ||
            inStr(first, second.substring(1));

    return false;
}