'use client';
import * as T from '@/components/ui/textarea';
import { TexteareaProps } from './TexteareaProps';

export function Textarea({ placeholder, value, onChange, ...rest }: TexteareaProps) {
  return (
    <div className='w-full'>
      <T.Root
        {...rest}
        placeholder={placeholder}
        value={value}
        onChange={onChange}>

        <T.CharCounter
          current={value.length}
          max={500} />
      </T.Root>
    </div>
  );
}
