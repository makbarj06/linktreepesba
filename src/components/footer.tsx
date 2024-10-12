export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto flex justify-center space-x-6">
        <a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.5 2 2 6.5 2 12c0 5.5 4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm4.5 15.5h-3v-3h3v3zm-1.5-4.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm2-7.5h-3v3h3V6z" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22 12.1c0-5.5-4.5-10-10-10S2 6.6 2 12.1c0 4.7 3.1 8.6 7.2 9.8v-6.9H7v-2.9h2.2V9.5c0-2.1 1.2-3.3 3.1-3.3.9 0 1.9.1 1.9.1v2.1h-1.1c-1.1 0-1.5.7-1.5 1.4v1.6H13l-.4 2.9h-2.5v6.9C18.9 20.7 22 16.8 22 12.1z" />
          </svg>
        </a>
        <a
          href="https://www.twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.3 4.9c-.8.4-1.6.7-2.5.8a4.5 4.5 0 001.9-2.5 9 9 0 01-2.9 1.1A4.5 4.5 0 0016 3c-2.5 0-4.5 2-4.5 4.5 0 .3 0 .6.1.9-3.8-.2-7.1-2-9.3-4.7a4.5 4.5 0 00-.6 2.3c0 1.6.8 3 2 3.9a4.5 4.5 0 01-2-.5v.1c0 2.3 1.6 4.2 3.7 4.7a4.5 4.5 0 01-2 .1 4.5 4.5 0 004.2 3.1A9 9 0 011 19.1a9 9 0 004.8 1.4c5.7 0 8.8-4.7 8.8-8.8 0-.1 0-.3-.1-.4A6.3 6.3 0 0023 5c-.9.4-1.9.7-2.7.8a3.6 3.6 0 001.6-2c-.7.4-1.5.6-2.3.7z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
