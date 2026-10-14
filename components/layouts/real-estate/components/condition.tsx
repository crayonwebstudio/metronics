'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Sparkles, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const conditions = [
  { value: 'New', label: 'New Construction' },
  { value: 'Good', label: 'Good' },
  { value: 'Renovated', label: 'Recently Renovated' },
  { value: 'Foreclosure', label: 'Foreclosure' },
  { value: 'Short Sale', label: 'Short Sale' },
];

export function Condition() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('New');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1.5">
          <Sparkles className="size-3" />
          <span>{value || 'Condition'}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-52 p-0" align="center">
        <Command>
          <CommandList>
            <CommandEmpty>No conditions found.</CommandEmpty>
            <CommandGroup>
              {conditions.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  <span className="truncate">{item.label}</span>
                  <Check
                    className={cn(
                      'ms-auto size-4',
                      value === item.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
