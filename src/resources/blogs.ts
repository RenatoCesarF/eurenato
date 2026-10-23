
export interface Blog {
  id: string
  title: string
  description: string
  tags: string[]
}

export interface BlogContent {
  title: string
  description: string
  content: string
  tags: string[]
}

export function getBlogList() { }

export function getBlogContent(id: string): BlogContent {
  // abrir /blogs/id
  // separar informações e devolver separado
  return {
    title: "",
    content: "",
    description: "",
    tags: [],
  }
}
