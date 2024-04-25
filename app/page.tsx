import ClickCounter from './components/ClickCounter'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="font-mono">
      <div className="w-full min-h-screen flex flex-col">
        <h1 className="flex items-center justify-center pt-4 uppercase">Election Simulator</h1>
        <Link className="cursor-pointer hover:text-purple-700 text-center py-2" href="https://github.com/jonathanwmendez/election-simulator-website">GitHub</Link>
        <div className="bg-[#1e293b] flex flex-grow text-white">
          <div className="w-1/2 flex flex-col items-center justify-center">
            <Image
              src="/images/DemocrateLogo.png"
              width={150}
              height={150}
              alt="Democrate Logo"
              className="pb-4 rounded-lg"
            />
            <ClickCounter />
          </div>

          <div className="w-1/2 flex flex-col items-center justify-center">
            <Image
              src="/images/RepublicanLogo.png"
              width={150}
              height={150}
              alt="Republican Logo"
              className="pb-4 rounded-lg"
            />
            <ClickCounter />
          </div>
        </div>
        <footer className="flex items-center justify-center py-4 px-4 text-center">Copyright &copy; Jonathan W. Mendez. All Rights Reserved.</footer>
      </div>
    </main>
  );
}

