interface Es6PromiseLoader {
  (id: string): () => Promise<any>;
}

type AsyncRoutes = { [component: string]: Es6PromiseLoader };
