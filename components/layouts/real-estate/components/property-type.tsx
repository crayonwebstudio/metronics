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
import { Building, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const propertyTypes = [
  { value: 'House', label: 'House' },
  { value: 'Apartment', label: 'Apartment' },
  { value: 'Condo', label: 'Condo' },
  { value: 'Townhouse', label: 'Townhouse' },
  { value: 'Villa', label: 'Villa' },
];

export function PropertyType() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('House');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1.5">
          <Building className="size-3" />
          <span>{value || 'Type'}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-0" align="center">
        <Command>
          <CommandList>
            <CommandEmpty>No property types found.</CommandEmpty>
            <CommandGroup>
              {propertyTypes.map((type) => (
                <CommandItem
                  key={type.value}
                  value={type.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  <span className="truncate">{type.label}</span>
                  <Check
                    className={cn(
                      'ms-auto size-4',
                      value === type.value ? 'opacity-100' : 'opacity-0'
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
