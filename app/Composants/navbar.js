import Link from 'next/link';

function Navbar() {
  return (
    <nav className="px-4 py-4 flex items-center max-w-full mx-auto border-b border-gray-700">
      <h1 className="text-green-500">La Timeline</h1>
      <div className="ml-auto links">
        <Link legacyBehavior href="/">
          <a className="text-gray-200 hover:text-green-500 mr-4">Home</a>
        </Link>
        <Link legacyBehavior href="/CreerEvent">
          <a className="text-gray-200 hover:text-green-500 mr-4">Nouvel Evénement</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;