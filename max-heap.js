class MaxHeap {
  constructor(size, key) {
    this.size = size;
    this.count = 0;
    this.data = [];
    this.key = key;
    this.insert = this.insert.bind(this);
    this.getMax = this.getMax.bind(this);
    this.deleteMax = this.deleteMax.bind(this);
    this.heapify = this.heapify.bind(this);
  }

  insert(data) {
    if (this.count === this.size) throw Error('MaxHeap is full');
    this.data[this.count] = data;
    this.count = this.count + 1;
    if (this.count === 1) {
      this.heapify(1)
    } else {
      for (let i = Math.floor(this.count / 2); i > 0; i--) {
        this.heapify(i);
      }
    }
  }

  getMax() {
    return this.data[0];
  }

  deleteMax() {
    if (this.count === 0) throw Error('MaxHeap is empty');
    this.data[0] = this.data[this.count - 1];
    this.data[this.count - 1] = null;
    this.count = this.count - 1;
    this.heapify(1);
  }

  heapify(i) {
    let l = 2 * i;
    let r = (2 * i) + 1;
    let largest;
    let largestData;
    let lData = this.key ? this.data[l - 1] && this.data[l - 1][this.key] : this.data[l - 1];
    let rData = this.key ? this.data[r - 1] && this.data[r - 1][this.key] : this.data[r - 1];
    if (l <= this.count && lData > rData) {
      largest = l;
    } else {
      largest = i;
    }
    largestData = this.key ? this.data[largest - 1] && this.data[largest - 1][this.key] : this.data[largest - 1];
    if (r <= this.count && rData > largestData) {
      largest = r;
    }
    if (largest !== i) {
      let temp = this.data[i - 1];
      this.data[i - 1] = this.data[largest - 1];
      this.data[largest - 1] = temp;
      this.heapify(largest);
    }
  }
}

// TESTS

const testHeap = new MaxHeap(5);
testHeap.insert(1);
testHeap.insert(10);
testHeap.insert(5);
testHeap.insert(500);
testHeap.insert(1000);
console.log(...testHeap.data);
testHeap.deleteMax();
console.log(...testHeap.data);
testHeap.deleteMax();
console.log(...testHeap.data);
testHeap.deleteMax();
console.log(...testHeap.data);
testHeap.deleteMax();
console.log(...testHeap.data);
testHeap.deleteMax();
console.log(...testHeap.data);
testHeap.deleteMax();

// BONUS TEST (k POINTS CLOSEST TO ORIGIN)

const k = 3;

const points = [[1,5], [3,4], [9,7], [4,1], [8,2], [5,5], [7,0], [1,6], [2,5], [2,3]];

const pointsWithDistance = points.map(point => ({
  point,
  distance: Math.sqrt((point[0] * point[0]) + (point[1] * point[1]))
}));

const mh = new MaxHeap(k, 'distance');

for (let i = 0; i < k; i++) {
  mh.insert(pointsWithDistance[i]);
}
for (let j = k; j < pointsWithDistance.length; j++) {
  const currentMax = mh.getMax().distance;
  const thisPoint = pointsWithDistance[j];
  if (thisPoint.distance < currentMax) {
    mh.deleteMax();
    mh.insert(pointsWithDistance[j]);
  }
}

console.log(...mh.data.map(d => d.point));
