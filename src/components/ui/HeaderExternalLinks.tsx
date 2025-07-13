'use client';

import GitHubIcon from '@/components/icons/IconGitHub';
import Tooltip from '@/components/ui/Tooltip';
import { useTheme } from '@/store/theme';

export default function HeaderExternalLinks() {
  const { effectiveTheme } = useTheme();
  const fill =
    effectiveTheme === 'dark' ? 'var(--color-light)' : 'var(--color-dark)';

  const handleClick = () => {
    window.open(
      'https://github.com/amirardalan/amirardalan.com',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="mr-4 mt-1">
      <Tooltip text="⭐ Star on GitHub" pos="b">
        <button onClick={handleClick}>
          <GitHubIcon fill={fill} />
        </button>
      </Tooltip>
    </div>
  );
}
