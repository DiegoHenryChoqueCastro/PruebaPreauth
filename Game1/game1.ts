function encontrar(M, N){
	for(let i = 0; i < M.length - 1; i++){
		if(M[i] <= N){
			for(let j = i+1; j < M.length; j++){
				if(M[j] <= N){
					if(M[i] + M[j] == N){
						let subconjunto: number[] = [ M[i] , M[j] ];
						return subconjunto;
					}
				}
			}
		}
	}
}
let M: Array<number> = [2, 5, 8, 14, 0];
let N = 10;
console.log( encontrar(M, N) );