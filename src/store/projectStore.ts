import { create } from 'zustand';
import { Project } from '../pages/Projects';

interface ProjectState {
  projects: Project[];
  favoriteProjects: number[];
  searchQuery: string;
  setProjects: (projects: Project[]) => void;
  toggleFavorite: (projectId: number) => void;
  setSearchQuery: (query: string) => void;
  filteredProjects: Project[];
}

export const useProjectStore = create<ProjectState>((set, get) => ({
  projects: [],
  favoriteProjects: [],
  searchQuery: '',
  
  setProjects: (projectsData) => {
    set({ 
      projects: projectsData,
      filteredProjects: projectsData
    });
  }

  ,
  
  toggleFavorite: (projectId) => set((state) => ({
    favoriteProjects: state.favoriteProjects.includes(projectId)
      ? state.favoriteProjects.filter(id => id !== projectId)
      : [...state.favoriteProjects, projectId]
  })),
  
get filteredProject() {
    const { projects, searchQuery } = get();
    if (!searchQuery) return projects;
    return projects.filter(project =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  },
  
  filteredProjects: [],
  
  setSearchQuery: (query) => set((state) => ({
    searchQuery: query,
    filteredProjects: state.projects.filter(project => 
      project.title.toLowerCase().includes(query.toLowerCase()) ||
      project.description.toLowerCase().includes(query.toLowerCase())
    )
  }))
}));