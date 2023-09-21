import React from 'react';
import QRCode from 'qrcode.react';

const Qr = ({ qrData }: any) => {
  return (
    <div className='m-10'>
      <h2>QR Code</h2>
      <QRCode value={qrData} size={177} level="M" /> {/* Use error correction level "M" */}
    </div>
  );
};

export default Qr;