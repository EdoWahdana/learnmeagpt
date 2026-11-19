export function dot(a: readonly number[], b: readonly number[]): number {
  if (a.length !== b.length) {
    throw new Error("dot needs two vectors of the same length");
  }
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}

export function softmax(logits: readonly number[]): number[] {
  if (logits.length === 0) {
    return [];
  }
  const max = Math.max(...logits);
  const exps = logits.map((value) => Math.exp(value - max));
  const total = exps.reduce((sum, value) => sum + value, 0);
  return exps.map((value) => value / total);
}

export function softmaxWithTemperature(logits: readonly number[], temperature: number): number[] {
  if (!(temperature > 0)) {
    throw new Error("temperature must be positive");
  }
  return softmax(logits.map((value) => value / temperature));
}

export function sampleIndex(probabilities: readonly number[], random: () => number = Math.random): number {
  const target = random();
  let cumulative = 0;
  for (let i = 0; i < probabilities.length; i++) {
    cumulative += probabilities[i];
    if (target < cumulative) {
      return i;
    }
  }
  return probabilities.length - 1;
}

export function round(value: number, places = 4): string {
  return value.toFixed(places);
}
