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
import { MapPin, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const areas = [
  { value: 'Manhattan, NY', label: 'Manhattan, NY' },
  { value: 'Brooklyn, NY', label: 'Brooklyn, NY' },
  { value: 'Queens, NY', label: 'Queens, NY' },
  { value: 'Bronx, NY', label: 'Bronx, NY' },
  { value: 'Staten Island, NY', label: 'Staten Island, NY' },
];

export function Area() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Manhattan, NY');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1.5">
          <MapPin className="size-3" />
          <span>{value || 'Where'}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-52 p-0" align="center">
        <Command>
          <CommandList>
            <CommandEmpty>No boroughs found.</CommandEmpty>
            <CommandGroup>
              {areas.map((item) => (
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
