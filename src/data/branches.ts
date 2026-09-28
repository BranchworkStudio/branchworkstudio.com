// A "branch" is the part of life a project grows out of, not its tech.
// Add an entry when a project starts somewhere new (woodwork, music, food…).
export const branches = {
  fitness: 'Fitness',
  outdoors: 'Outdoors',
  games: 'Games',
  tools: 'Tools',
} as const;

export type BranchKey = keyof typeof branches;

export const statuses = {
  prototype: 'Prototype',
  building: 'In development',
  live: 'Live',
  paused: 'Paused',
} as const;

export type StatusKey = keyof typeof statuses;
