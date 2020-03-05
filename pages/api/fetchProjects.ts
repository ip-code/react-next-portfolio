import { Project } from '../../interfaces';
import fetch from 'isomorphic-unfetch';

const baseRoot = 'https://api.github.com/users/ip-code/repos?sort=created';

export const fetchProjects = async (): Promise<Project[]> => {
  const res = await fetch(baseRoot)
  const data = await res.json();
  const filtered = data.filter((i: { fork: any; description: null; }) => !i.fork && i.description != null);
  return filtered.map(
    ({ id, name, description, html_url, homepage, }) => ({ id, name, description, html_url, homepage, } as Project)
  );
}