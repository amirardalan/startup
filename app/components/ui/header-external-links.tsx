'use client';

import GitHubIcon from '@/components/icons/github';
import Tooltip from '@/components/util/tooltip';

export default function HeaderExternalLinks() {
  const handleClick = () => {
    window.open(
      'https://github.com/amirardalan/startup',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="mr-4 mt-1">
      <Tooltip text="⭐ Star on GitHub" pos="b">
        <button onClick={handleClick}>
          <GitHubIcon />
        </button>
      </Tooltip>
    </div>
  );
}
