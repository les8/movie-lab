import { readFile } from 'fs/promises';
import { resolve } from 'path';

export default defineEventHandler(async (event) => {
  const filePath = resolve('data/data.json');
  const data = await readFile(filePath, 'utf-8');
  
  return JSON.parse(data);
});