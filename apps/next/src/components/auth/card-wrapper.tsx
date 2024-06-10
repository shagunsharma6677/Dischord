'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@repo/ui';
import Header from './header';
import { Social } from './social';
import { BackButton } from './back-button';
import { cn } from '../../../../../packages/ui/src/lib/utils';

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
  className?: string;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  className,
}: CardWrapperProps) => {
  return (
    <Card className={cn('w-[400px]  shadow-md', className)}>
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton
          className={'text-blue-400'}
          label={backButtonLabel}
          href={backButtonHref}
        />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
