// js/storage.js - Manejo de almacenamiento local y datos
const STORAGE_KEYS = {
    CONTACT_FORM: 'contact_submissions',
    USER_PREFERENCES: 'user_prefs',
    ANALYTICS: 'site_analytics'
};

// Contact form submissions
export function saveContactForm(data) {
    try {
        const submissions = getContactSubmissions();
        const newSubmission = {
            ...data,
            id: Date.now(),
            timestamp: new Date().toISOString(),
            read: false
        };
        
        submissions.unshift(newSubmission);
        localStorage.setItem(STORAGE_KEYS.CONTACT_FORM, JSON.stringify(submissions));
        
        // Limitar a 50 submissions
        if (submissions.length > 50) {
            localStorage.setItem(STORAGE_KEYS.CONTACT_FORM, JSON.stringify(submissions.slice(0, 50)));
        }
        
        return true;
    } catch (error) {
        console.error('Error saving contact form:', error);
        return false;
    }
}

export function getContactSubmissions() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.CONTACT_FORM)) || [];
    } catch {
        return [];
    }
}

export function markSubmissionAsRead(id) {
    const submissions = getContactSubmissions();
    const updated = submissions.map(sub => 
        sub.id === id ? { ...sub, read: true } : sub
    );
    localStorage.setItem(STORAGE_KEYS.CONTACT_FORM, JSON.stringify(updated));
}

// User preferences
export function saveUserPreference(key, value) {
    try {
        const prefs = getUserPreferences();
        prefs[key] = value;
        localStorage.setItem(STORAGE_KEYS.USER_PREFERENCES, JSON.stringify(prefs));
        return true;
    } catch {
        return false;
    }
}

export function getUserPreferences() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_PREFERENCES)) || {};
    } catch {
        return {};
    }
}

export function getPreference(key, defaultValue = null) {
    const prefs = getUserPreferences();
    return prefs[key] !== undefined ? prefs[key] : defaultValue;
}

// Analytics (básico)
export function trackEvent(category, action, label = '') {
    try {
        const analytics = getAnalyticsData();
        const event = {
            category,
            action,
            label,
            timestamp: new Date().toISOString(),
            url: window.location.href,
            userAgent: navigator.userAgent
        };
        
        analytics.events.push(event);
        
        // Limitar eventos a 100
        if (analytics.events.length > 100) {
            analytics.events = analytics.events.slice(-100);
        }
        
        localStorage.setItem(STORAGE_KEYS.ANALYTICS, JSON.stringify(analytics));
    } catch (error) {
        console.error('Error tracking event:', error);
    }
}

export function getAnalyticsData() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.ANALYTICS)) || {
            events: [],
            pageViews: 0,
            firstVisit: new Date().toISOString()
        };
    } catch {
        return {
            events: [],
            pageViews: 0,
            firstVisit: new Date().toISOString()
        };
    }
}

export function incrementPageView() {
    try {
        const analytics = getAnalyticsData();
        analytics.pageViews++;
        localStorage.setItem(STORAGE_KEYS.ANALYTICS, JSON.stringify(analytics));
    } catch (error) {
        console.error('Error incrementing page view:', error);
    }
}

// Utility functions
export function clearStorage() {
    Object.values(STORAGE_KEYS).forEach(key => {
        localStorage.removeItem(key);
    });
}

export function getStorageSize() {
    let total = 0;
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            total += localStorage[key].length;
        }
    }
    return total;
}

// Exportar constantes
export { STORAGE_KEYS };