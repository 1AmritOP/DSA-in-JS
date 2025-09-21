/**
 * Checks if two strings are anagrams of each other.
 * 
 * @param {string} s1 - first string
 * @param {string} s2 - second string
 * @returns {boolean} true if strings are anagrams, false otherwise
 */


function areAnagrams(s1, s2) {
  if (s1.length != s2.length) return false;
  else if (s1.split("").sort().join("") == s2.split("").sort().join(""))
    return true;
  else return false;
}

function areAnagrams(s1, s2) {
  if (s1.length !== s2.length) return 0;

  let count = new Array(256).fill(0);

  for (let i = 0; i < s1.length; i++) {
    count[s1.charCodeAt(i)]++;
    count[s2.charCodeAt(i)]--;
  }

  for (let i = 0; i < count.length; i++) {
    if (count[i] !== 0) return false;
  }
  return true;
}



console.log(areAnagram("siem", "sile"));
