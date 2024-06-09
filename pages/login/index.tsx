// pages/login.tsx или app/login/page.tsx в зависимости от структуры проекта
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useAuth } from '@/context/AuthContext';
import { Button } from "@/components/ui/Button";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
        expiresInMins: 30,
      });

      const { token, firstName, lastName, image } = response.data;
      login(token, { firstName, lastName, image });
      router.push('/posts');
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h2 className="text-black text-4xl font-bold font-serif tracking-tight">Medium</h2>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md border">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && <p className="text-red-500">{error}</p>}
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Type your username here"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-gray-500 focus:ring-gray-500"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
              </div>
              <input
                id="password"
                type="password"
                placeholder="Type your password here"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-gray-500 focus:ring-gray-500"
              />
            </div>
            <Button type="submit">
                Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
