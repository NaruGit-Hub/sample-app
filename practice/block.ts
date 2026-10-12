setTimeout(() => console.log("タイマー（100ms後のはず）"), 100);
console.log("A");
const start = Date.now();
while (Date.now() - start < 3000) {
    // 作業員をここに縛り付けるための空ループ（第5章の実験）
    } // 3秒間、作業員をここに縛り付ける
console.log("B");
