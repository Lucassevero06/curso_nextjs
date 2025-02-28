import Link from "next/link";

export default function Home() {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Hello Wold Nextjs</h1>
        <Link href="/sobre">Sobre</Link>   

        <Link href="/posts">Posts</Link>

        <Link href='/exemplo?parametro=valor'>Página com parametro</Link>

        <Link href='/categoria/roupas'>Ir para a categoria de Roupas</Link>
      </main>
  );
}
