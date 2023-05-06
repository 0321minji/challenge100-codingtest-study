class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(start, end, value) {
    const node = { start, end, value };
    this.upheap(node);
  }

  upheap(node) {
    this.heap.push(node);
    let idx = this.heap.length - 1;

    while (idx > 0) {
      let parentIdx = (idx - 1) >> 1;
      if (this.heap[parentIdx].value <= node.value) break;

      this.heap[idx] = this.heap[parentIdx];
      idx = parentIdx;
    }
    this.heap[idx] = node;
  }

  remove() {
    if (this.heap.length == 0) return undefined;
    if (this.heap.length == 1) return this.heap.pop();
    const res = this.heap[0];
    const node = this.heap.pop();
    this.downheap(node);

    return res;
  }

  downheap(node) {
    let len = this.heap.length >> 1;
    let idx = 0;

    while (idx < len) {
      let left = (idx << 1) + 1;
      let right = left + 1;
      let small = left;

      if (
        right < this.heap.length &&
        this.heap[left].value > this.heap[right].value
      )
        small = right;

      if (this.heap[small].value >= node.value) break;
      this.heap[idx] = this.heap[small];
      idx = small;
    }

    this.heap[idx] = node;
  }
}

const fs = require("fs");

BOJkey = true;

const input = fs
  .readFileSync(BOJkey ? "./ehddud1006/BOJ/1197/input.txt" : "./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number))
  .reverse();

const [V, E] = input.pop();
const adj = Array.from({ length: V + 1 }, () => []);
const chk = Array.from({ length: V + 1 }, () => false);
const pq = new MinHeap();
let [cnt, ans] = [0, 0];

for (let i = 0; i < E; i++) {
  const [a, b, dist] = input.pop();

  adj[a].push([dist, b]);
  adj[b].push([dist, a]);
}

chk[1] = true;
for (let [dist, end] of adj[1]) {
  pq.insert(1, end, dist);
}

while (cnt < V - 1) {
  const { start, end, value: dist } = pq.remove();
  if (chk[end]) continue;
  ans += dist;
  chk[end] = true;
  cnt++;
  for (let [nextDist, nextEnd] of adj[end]) {
    if (!chk[nextEnd]) {
      pq.insert(end, nextEnd, nextDist);
    }
  }
}

console.log(ans);
