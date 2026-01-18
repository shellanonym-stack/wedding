import React, { useState } from 'react';
import { CreditCard, Copy, Check } from 'lucide-react';
import '../styles/Gift.css';

const Gift = () => {
    const [copiedId, setCopiedId] = useState(null);

    const accounts = [
        {
            id: 1,
            bank: "BCA",
            logo: "bca.png",
            number: "7295289902",
            name: "Edo Irawan"
        },
        {
            id: 2,
            bank: "BNI",
            logo: "bni.png",
            number: "1401489191", // Placeholder
            name: "S Qhori Rafni Rivani"
        }
    ];

    const handleCopy = (id, text) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <section className="gift-section" id="gift">
            <div className="gift-container">
                <h2 className="gift-title">Amplop digital</h2>
                <p className="gift-text">
                    Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.
                    Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
                </p>

                <div className="cards-wrapper">
                    {accounts.map((account) => (
                        <div className="bank-card" key={account.id}>
                            <div className="bank-logo">
                                <img
                                    src={`src/assets/gambar/${account.logo}`}
                                    alt={`${account.bank} Logo`}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'block';
                                    }}
                                />
                                <span className="bank-logo-text" style={{ display: 'none' }}>{account.bank}</span>
                            </div>

                            <div className="account-info">
                                <p className="account-number">{account.number}</p>
                                <p className="account-name">{account.name}</p>
                            </div>

                            <button className="copy-btn" onClick={() => handleCopy(account.id, account.number)}>
                                {copiedId === account.id ? <Check size={18} /> : <Copy size={18} />}
                                {copiedId === account.id ? "Tersalin" : "Salin No. Rekening"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gift;
