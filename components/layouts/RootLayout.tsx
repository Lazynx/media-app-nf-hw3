import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';
import { PostsProvider } from '@/context/PostsContext';
import { AuthProvider } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  // Проверка текущего маршрута
  const isLoginPage = router.pathname === '/login';

  return (
    <div className={inter.className}>
      <AuthProvider>
        <PostsProvider>
          <div className={`${inter.className} flex flex-col min-h-screen`}>
            {!isLoginPage && <Header />}
            <ProtectedRoute>
              {children}
            </ProtectedRoute>
            {!isLoginPage && <Footer />}
          </div>
        </PostsProvider>
      </AuthProvider>
    </div>
  );
}
