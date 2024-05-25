import React, { ComponentType, useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>): React.FC<P> => {
  const ComponentWithAuth: React.FC<P> = (props) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === 'loading') return; // Do nothing while loading
      if (!session) {
        void router.push('/'); // Redirect to the login page
      }
    }, [session, status, router]);

    if (status === 'loading' || !session) {
      return <p>Loading...</p>; // Show loading state or any other loading component
    }

    return <WrappedComponent {...(props)} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
