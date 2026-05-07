import fs from 'fs';
import path from 'path';

export function getSequenceFrames() {
  const sequenceDir = path.join(process.cwd(), 'public', 'sequence');
  try {
    const files = fs.readdirSync(sequenceDir);
    // Sort realistically (e.g. frame_000, frame_001)
    const sortedFiles = files
      .filter((f) => f.match(/\.(webp|png|jpe?g)$/i))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    return sortedFiles.map((f) => `/sequence/${f}`);
  } catch (error) {
    console.error('Failed to read sequence directory', error);
    return [];
  }
}
