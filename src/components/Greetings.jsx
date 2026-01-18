import React, { useState } from 'react';
import { Send, User } from 'lucide-react';
import '../styles/Greetings.css';

const Greetings = () => {
    const [comments, setComments] = useState([
        {
            id: 1,
            name: "Agung & Asti",
            message: "Selamat menempuh hidup baru! Semoga menjadi keluarga sakinah mawaddah warahmah.",
            date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
        },
        {
            id: 2,
            name: "Abang Ales",
            message: "Happy Wedding! Langgeng terus sampai kakek nenek ya.",
            date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
        }
    ]);

    const [formData, setFormData] = useState({
        name: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name.trim() || !formData.message.trim()) return;

        const newComment = {
            id: Date.now(),
            name: formData.name,
            message: formData.message,
            date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
        };

        setComments([newComment, ...comments]);
        setFormData({ name: '', message: '' });
    };

    return (
        <section className="greetings-section" id="greetings">
            <div className="greetings-container">
                <h2 className="greetings-title">Kirim Ucapan</h2>
                <p className="greetings-subtitle">Tuliskan ucapan & doa restu untuk kami</p>

                <form className="greetings-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Nama Anda"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            placeholder="Ucapan & Doa"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="form-textarea"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                        <Send size={18} />
                        Kirim Ucapan
                    </button>
                </form>

                <div className="comments-list">
                    {comments.map((comment) => (
                        <div key={comment.id} className="comment-card">
                            <div className="comment-header">
                                <div className="comment-avatar">
                                    <User size={20} color="#fff" />
                                </div>
                                <div className="comment-info">
                                    <h4 className="comment-name">{comment.name}</h4>
                                    <span className="comment-date">{comment.date}</span>
                                </div>
                            </div>
                            <p className="comment-message">{comment.message}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Greetings;
