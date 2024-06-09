import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';
import { PostsProvider } from '@/context/PostsContext';
import { AuthProvider } from '@/context/AuthContext';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const isLoginPage = router.pathname === '/login';

  return (
    <div className={inter.className}>
        <div id="modal-root"></div>
        <ThemeProvider>
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
        </ThemeProvider>
    </div>
  );
}
