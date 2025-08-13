export interface Art {
    id: number;
    title: string;
    art: string;
}

export interface Project {
    id: number;
    name: string;
    slug: string;
    thumbnail: string;
    description: string;
    arts: Art[]
}