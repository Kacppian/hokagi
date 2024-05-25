import React from 'react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

interface RepoCardProps {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  isSelected: boolean;
  onSelect: () => void;
}

const RepoCard: React.FC<RepoCardProps> = ({ name, html_url, language, isSelected, onSelect }) => {
  return (
    <div
      className={`max-w-sm rounded-xl overflow-hidden p-4 bg-white cursor-pointer border-2 transition-all duration-300 ease-in-out ${
        isSelected ? 'border-primary' : 'border-transparent'
      }`}
      onClick={onSelect}
    >
      <div className="flex items-center mb-4 h-10">
        <GitHubLogoIcon className="w-6 h-6 mr-2 text-gray-800" />
        <h2 className="text-base flex-1 break-all font-bold text-gray-900">{name}</h2>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-600">{language ?? 'N/A'}</span>
      </div>
      <a href={html_url} target="_blank" rel="noopener noreferrer" className="block mt-4 text-blue-500 hover:underline">
        View Repository
      </a>
    </div>
  );
};

export default RepoCard;
