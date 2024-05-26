import { type AppType } from "next/app";
import { SessionProvider } from "next-auth/react"
import { type Session } from 'next-auth';

import "~/styles/globals.css";

interface MyAppProps {
  session: Session | null;
}

const MyApp: AppType<MyAppProps> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <main>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};

export default MyApp;
