import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const ContainerPage: FC<ContainerProps> = ({ children, className }) => {
  return (
    <section className='flex items-center justify-center'>
      <div className={cn(' xl:max-w-[1312px]', className)}></div>
      {children}
    </section>
  );
};

export default ContainerPage;
