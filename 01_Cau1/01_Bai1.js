function solveProblem(a,b) {
    let result;
    if (a == 0) {
        if (b == 0) {
            result = "Phương trình vô số nghiệm";
        } else {
            result = "Phương trình vô nghiêm";
        }
    } else {
        result = (-b)/a;
    }
    return result;
}