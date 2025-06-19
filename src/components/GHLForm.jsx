import { useEffect } from 'react';

const GHLForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '666px' }}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/dCE4nuTtdFETlwxbzmWK"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '14px'
        }}
        id="inline-dCE4nuTtdFETlwxbzmWK"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Discover new Marketing Strategies"
        data-height="666"
        data-layout-iframe-id="inline-dCE4nuTtdFETlwxbzmWK"
        data-form-id="dCE4nuTtdFETlwxbzmWK"
        title="Discover new Marketing Strategies"
      />
    </div>
  );
};

export default GHLForm;
