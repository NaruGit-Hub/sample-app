setTimeout(() => console.log("タイマー（100ms後のはず）"), 100);
console.log("A");
const start = Date.now();
while (Date.now() - start < 3000) {} // 3秒間、作業員をここに縛り付ける
console.log("B");
