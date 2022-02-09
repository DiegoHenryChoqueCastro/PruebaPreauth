function encontrar(M, N) {
    for (var i = 0; i < M.length - 1; i++) {
        if (M[i] <= N) {
            for (var j = i + 1; j < M.length; j++) {
                if (M[j] <= N) {
                    if (M[i] + M[j] == N) {
                        var subconjunto = [M[i], M[j]];
                        return subconjunto;
                    }
                }
            }
        }
    }
}
var M = [2, 5, 8, 14, 0];
var N = 10;
console.log(encontrar(M, N));
