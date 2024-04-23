import { useEffect, useRef, useState } from 'react';

import * as S from './styles';

export function RdStation() {
  const [aparecer, setAparecer] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!aparecer) {
      const loadScript = () => {
        const script = document.createElement('script');
        script.src =
          'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
        script.async = true;
        script.onload = () => {
          new (window as any).RDStationForms(
            'form-contato-grupo-i9-8a3f5b6ffb0f85cb6da6',
            'YOUR_ANALYTICS_TRACKING_CODE',
          ).createForm();
        };
        document.body.appendChild(script);
        const div = document.createElement('div');
        div.id = 'form-contato-grupo-i9-8a3f5b6ffb0f85cb6da6';
        formRef.current?.appendChild(div);
      };
      if (typeof window !== 'undefined' && formRef.current) {
        loadScript();
      }
      setAparecer(true);
    }
  }, []);
  return (
    <S.RdForm
      role="main"
      id="form-contato-grupo-i9-8a3f5b6ffb0f85cb6da6"
      ref={formRef}
    ></S.RdForm>
  );
}
