// Утилита для показа уведомлений
function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// Закрытие карточек (языки и преподаватели)
document.addEventListener('DOMContentLoaded', () => {
    const closeButtons = document.querySelectorAll('.close-card-btn');
    
    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = btn.closest('.lang-card, .teacher-card');
            if (card) {
                const name = card.querySelector('.lang-name, h4')?.innerText || 'карточка';
                card.style.transition = 'opacity 0.25s ease, transform 0.2s';
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.remove();
                    showToast(`✓ Карточка "${name}" закрыта`);
                    
                    // Если сетка опустела, покажем сообщение
                    const grid = card.parentElement;
                    if (grid && grid.children.length === 0) {
                        const emptyMsg = document.createElement('div');
                        emptyMsg.className = 'small-note';
                        emptyMsg.style.textAlign = 'center';
                        emptyMsg.style.padding = '40px';
                        emptyMsg.innerHTML = '✨ Все карточки скрыты. <a href="#" onclick="location.reload()">Обновить страницу</a> ✨';
                        grid.appendChild(emptyMsg);
                    }
                }, 200);
            }
        });
    });
    
    // Кнопка "Смотреть больше" на главной
    const watchBtn = document.getElementById('watchMoreBtn');
    if (watchBtn) {
        watchBtn.addEventListener('click', () => {
            showToast('📚 6 языков, гибкие условия, международные сертификаты');
            setTimeout(() => {
                window.location.href = 'languages.html';
            }, 1000);
        });
    }
    
    // Форма пробного урока
    const trialForm = document.getElementById('trialForm');
    if (trialForm) {
        trialForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('✅ Заявка отправлена! Менеджер свяжется с вами.');
            setTimeout(() => {
                trialForm.reset();
            }, 500);
        });
    }
});

// Плавная анимация при загрузке страницы
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 50);
});