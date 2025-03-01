import * as L from '@/components/ui/label';
import { LabelProps } from './LabelProps';

export function Label({ label, observacao, campoObrigatorio, ...rest }: LabelProps) {
  return (
    <L.Root className='pb-1' {...rest}>
      {label}
      {campoObrigatorio && (
        <L.Asterisk className='text-[#008B62]' />
      )}
      <L.Sub className='text-neutral-400 pl-1'>{observacao}</L.Sub>
    </L.Root>
  );
}
