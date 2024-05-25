import { ArrowRightIcon } from '@radix-ui/react-icons';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import Button from '~/components/button';
import RepoCard from '~/components/repo-card';

interface GithubRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

const DashboardHome = () => {
  const { data: session, status } = useSession();
  const [repos, setRepos] = useState<GithubRepository[]>([]);
  const [selectedRepoId, setSelectedRepoId] = useState<number>();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false); // Add a state for loading status
  const perPage = 100; // Number of repositories per page    

  const fetchRepos = async (page: number) => {
    try {
      const response = await fetch(`/api/github/repos?page=${page}&per_page=${perPage}`);
      const data = await response.json() as GithubRepository[];
      setRepos(data);
      setTotalPages(Math.ceil(100 / perPage)); // Example for a max of 100 repos
      setIsLoaded(true); // Set the loading status to true once data is fetched
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  };

  useEffect(() => {
    if (session) {
      void fetchRepos(currentPage);
    }
  }, [session, currentPage]);

  const handleSelect = (repoId: number) => {
    setSelectedRepoId(repoId);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={`flex flex-col justify-between bg-lightBlue px-6 py-8 rounded-xl w-6/12 space-y-8 ${
          isLoaded ? 'min-h-[300px] max-h-[600px]' : 'min-h-[300px] max-h-[350px]'
        } transition-all duration-500 ease-in-out`}
      >
        <div className="space-y-2">
          <h5 className="text-xl font-default font-medium text-heading">Your Repos</h5>
          <p className="text-xl font-medium font-default">
          Select a repository below to generate usage analytics events for it
          </p>
        </div>
        <div className="space-y-4 overflow-auto min-h-[100px] max-h-[400px]">
          {!isLoaded && <p className='text-default text-base font-inter'>Loading...</p>}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 rounded-xl transition-all duration-300 ease-in-out">
            {repos.map((repo) => (
              <RepoCard
                key={repo.id}
                name={repo.name}
                description={repo.description}
                html_url={repo.html_url}
                language={repo.language}
                stargazers_count={repo.stargazers_count}
                forks_count={repo.forks_count}
                isSelected={selectedRepoId === repo.id}
                onSelect={() => handleSelect(repo.id)}
              />
            ))}
          </div>
        </div>
        <div>
          <Button variant="default" disabled={!selectedRepoId}>
            <div className="flex space-x-2 items-center">
              <span className="text-base">Continue</span>
              <ArrowRightIcon className="size-5" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
