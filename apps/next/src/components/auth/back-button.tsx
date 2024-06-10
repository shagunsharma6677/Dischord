'usse client';
import { Button } from '@repo/ui';
import Link from 'next/link';
import { cn } from '../../../../../packages/ui/src/lib/utils';

interface BackButtonProps {
  href: string;
  label: string;
  className: string;
}

export const BackButton = ({ href, label, className }: BackButtonProps) => {
  return (
    <Button
      variant="link"
      className={cn('font-normal w-full ', className)}
      size="sm"
      asChild
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
