import Nav from '@/app/ui/nav';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <div className="m-auto text-center">
          <div className="font-mono text-gray-400 text-center text-3xl">
            Startup()
          </div>
          <div className="text-gray-600">subtitle</div>
        </div>
      </main>
    </>
  );
}
