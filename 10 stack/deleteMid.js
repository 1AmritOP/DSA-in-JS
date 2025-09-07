//Given a stack s, delete the middle element of the stack without using any additional data structure.

function deleteMid(s) {
  let mid = Math.floor(s.length / 2);
  for (let i = 0; i < mid; i++) {
    s.push(s.pop());
  }
  s.pop();
}

// 2nd approach
function deleteMid(s) {
  let midFromBottom = Math.floor((s.length + 1) / 2);
  let mid = s.length - midFromBottom + 1;
  const solve = (s, curr) => {
    if (curr === mid) {
      s.pop();
      return;
    }
    let top = s.pop();

    solve(s, curr + 1);

    s.push(top);
  };
  solve(s, 1);
}
