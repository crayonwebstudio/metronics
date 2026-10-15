import {
  LayoutGrid,
  MessageCircleMore,
  MessageSquareDot,
  Search,
} from 'lucide-react';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeaderTopbar() {
  return (
    <div className="flex items-center gap-2 lg:gap-3.5">
      <Button asChild className="hidden md:inline-flex">
        <Link href="#">Get Started</Link>
      </Button>
      <Button
        variant="ghost"
        className="hover:[&_svg]:text-primary size-9 p-0 rounded-full"
      >
        <Search className="size-4.5" />
      </Button>
      <Button
        variant="ghost"
        className="hover:[&_svg]:text-primary size-9 p-0 rounded-full"
      >
        <MessageCircleMore className="size-4.5" />
      </Button>
      <Button
        variant="ghost"
        className="hover:[&_svg]:text-primary size-9 p-0 rounded-full"
      >
        <LayoutGrid className="size-4.5" />
      </Button>
      <Button
        variant="ghost"
        className="hover:[&_svg]:text-primary size-9 p-0 rounded-full"
      >
        <MessageSquareDot className="size-4.5" />
      </Button>
      <img
        className="size-9 rounded-full border-2 border-input shrink-0 cursor-pointer"
        src={toAbsoluteUrl('/media/avatars/gray/5.png')}
        alt="User Avatar"
      />
    </div>
  );
}
