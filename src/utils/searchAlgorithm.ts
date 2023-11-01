// Following program is a Javascript implementation 
// of Rabin Karp Algorithm given in the CLRS book 

// d is the number of characters in
// the input alphabet 
let d = 256; 

/* pat -> pattern 
	txt -> text 
	q -> A prime number 
*/
export default function search(startingPattern : string, startingTxt : string, q : number = 101) 

{ 
    pat = startingPattern.toLocaleLowerCase();
    txt = startingTxt.toLocaleLowerCase();
    
	let M = pat.length; 
	let N = txt.length; 
	let i, j; 
	
	// Hash value for pattern 
	let p = 0; 
	
	// Hash value for txt 
	let t = 0; 
	let h = 1; 

	// The value of h would be "pow(d, M-1)%q" 
	for(i = 0; i < M - 1; i++) 
		h = (h * d) % q; 

	// Calculate the hash value of pattern and 
	// first window of text 
	for(i = 0; i < M; i++) 
	{ 
		p = (d * p + pat.charCodeAt(i)) % q; 
		t = (d * t + txt.charCodeAt(i)) % q; 
	} 

	// Slide the pattern over text one by one 
	for(i = 0; i <= N - M; i++) 
	{ 

		// Check the hash values of current
		// window of text and pattern. If the
		// hash values match then only 
		// check for characters one by one 
		if (p == t) 
		{ 
			
			/* Check for characters one by one */
			for(j = 0; j < M; j++) 
			{ 
				if (txt[i+j] != pat[j]) 
					break; 
			} 

			// if p == t and pat[0...M-1] = 
			// txt[i, i+1, ...i+M-1] 
			if (j == M) 
				return true;
		} 

		// Calculate hash value for next window 
		// of text: Remove leading digit, add 
		// trailing digit 
		if (i < N - M) 
		{ 
			t = (d * (t - txt.charCodeAt(i) * h) + 
					txt.charCodeAt(i + M)) % q; 

			// We might get negative value of t, 
			// converting it to positive 
			if (t < 0) 
				t = (t + q); 
		} 
	} 
    return false;
} 

// Driver code
let txt = "GEEKS FOR GEEKS";
let pat = "GEEK";

// A prime number
let q = 101; 

// Function Call
search(pat, txt, q);

// This code is contributed by target_2

