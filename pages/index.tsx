import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleConnect = () => {
    window.location.href = '/api/auth/google';
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Google Video Backup</h1>
      <p className="mb-6 text-center max-w-md">Connect your Google account to back up your largest Google Photos videos to YouTube.</p>
      <button
        onClick={handleConnect}
        className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Connect Google Account
      </button>
    </div>
  );
}
