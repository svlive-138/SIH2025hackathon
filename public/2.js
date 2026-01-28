

// Content Management System for Digital Learning Platform
// Hamburger menu logic for responsive nav
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('navHamburger');
    const navActions = document.getElementById('navActions');
    if (hamburger && navActions) {
        hamburger.addEventListener('click', function() {
            navActions.classList.toggle('active');
        });
        // Optional: close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navActions.contains(e.target)) {
                navActions.classList.remove('active');
            }
        });
    }
});

class ContentManagementSystem {
    constructor() {
        this.currentUser = null;
        this.currentLanguage = 'en';
        this.currentPage = 'landingPage';
        this.currentTab = 'overview';
        this.isOnline = navigator.onLine;
        this.selectedRole = null;
        this.uploadFiles = [];
        this.contentLibrary = [];
        // Application data from JSON
        this.appData = {
            "uploadSystem": {
                "supportedFormats": {
                    "video": ["mp4", "avi", "mov", "wmv", "webm"],
                    "audio": ["mp3", "wav", "ogg", "m4a"],
                    "document": ["pdf", "doc", "docx", "ppt", "pptx"],
                    "image": ["jpg", "jpeg", "png", "gif", "webp", "svg"]
                },
                "qualityOptions": {
                    "video": [
                        {"quality": "240p", "bitrate": "300k", "recommended": "2G/3G networks"},
                        {"quality": "480p", "bitrate": "800k", "recommended": "3G/4G networks"}, 
                        {"quality": "720p", "bitrate": "1500k", "recommended": "4G/WiFi networks"}
                    ]
                },
                "storageQuota": {
                    "total": 10000000000,
                    "used": 3500000000,
                    "available": 6500000000
                }
            },
            "contentLibrary": [
                {
                    "id": "video_001",
                    "type": "video",
                    "title": {
                        "en": "Basic Addition Tutorial",
                        "hi": "बुनियादी जोड़ ट्यूटोरियल",
                        "pa": "ਬੁਨਿਆਦੀ ਜੋੜ ਟਿਊਟੋਰਿਅਲ"
                    },
                    "description": {
                        "en": "Learn basic addition with visual examples",
                        "hi": "दृश्य उदाहरणों के साथ बुनियादी जोड़ सीखें",
                        "pa": "ਦ੍ਰਿਸ਼ ਉਦਾਹਰਣਾਂ ਨਾਲ ਬੁਨਿਆਦੀ ਜੋੜ ਸਿੱਖੋ"
                    },
                    "subject": "mathematics",
                    "grade": "6",
                    "duration": "15:30",
                    "fileSize": "125MB",
                    "uploadedBy": "Mrs. Kamalpreet Kaur",
                    "uploadDate": "2024-08-15",
                    "views": 234,
                    "downloads": 45,
                    "status": "published",
                    "thumbnail": "🎥",
                    "qualities": ["240p", "480p", "720p"],
                    "subtitles": ["en", "hi", "pa"]
                },
                {
                    "id": "video_002", 
                    "type": "video",
                    "title": {
                        "en": "States of Matter",
                        "hi": "पदार्थ की अवस्थाएं",
                        "pa": "ਪਦਾਰਥ ਦੀਆਂ ਅਵਸਥਾਵਾਂ"
                    },
                    "description": {
                        "en": "Understanding solid, liquid, and gas states",
                        "hi": "ठोस, तरल और गैस की अवस्थाओं को समझना",
                        "pa": "ਠੋਸ, ਤਰਲ ਅਤੇ ਗੈਸ ਦੀਆਂ ਅਵਸਥਾਵਾਂ ਨੂੰ ਸਮਝਣਾ"
                    },
                    "subject": "science",
                    "grade": "6",
                    "duration": "18:45",
                    "fileSize": "189MB", 
                    "uploadedBy": "Mr. Rajesh Kumar",
                    "uploadDate": "2024-08-10",
                    "views": 178,
                    "downloads": 32,
                    "status": "published",
                    "thumbnail": "🔬",
                    "qualities": ["240p", "480p", "720p"],
                    "subtitles": ["en", "hi", "pa"]
                },
                {
                    "id": "video_003",
                    "type": "video", 
                    "title": {
                        "en": "Gurmukhi Alphabet",
                        "hi": "गुरमुखी वर्णमाला",
                        "pa": "ਗੁਰਮੁਖੀ ਵਰਣਮਾਲਾ"
                    },
                    "description": {
                        "en": "Learn the Gurmukhi script step by step",
                        "hi": "गुरमुखी लिपि को कदम दर कदम सीखें",
                        "pa": "ਗੁਰਮੁਖੀ ਲਿਪੀ ਨੂੰ ਕਦਮ ਦਰ ਕਦਮ ਸਿੱਖੋ"
                    },
                    "subject": "punjabi",
                    "grade": "6", 
                    "duration": "25:20",
                    "fileSize": "198MB",
                    "uploadedBy": "Mrs. Simran Kaur",
                    "uploadDate": "2024-08-20",
                    "views": 312,
                    "downloads": 67,
                    "status": "published",
                    "thumbnail": "📜",
                    "qualities": ["240p", "480p", "720p"],
                    "subtitles": ["en", "hi", "pa"]
                },
                {
                    "id": "doc_001",
                    "type": "document",
                    "title": {
                        "en": "Mathematics Worksheet - Grade 6",
                        "hi": "गणित वर्कशीट - कक्षा 6",
                        "pa": "ਗਣਿਤ ਵਰਕਸ਼ੀਟ - ਕਲਾਸ 6"
                    },
                    "description": {
                        "en": "Practice problems for basic arithmetic",
                        "hi": "बुनियादी अंकगणित के लिए अभ्यास समस्याएं",
                        "pa": "ਬੁਨਿਆਦੀ ਗਣਿਤ ਲਈ ਅਭਿਆਸ ਸਮੱਸਿਆਵਾਂ"
                    },
                    "subject": "mathematics",
                    "grade": "6",
                    "fileSize": "2.5MB",
                    "uploadedBy": "Mrs. Kamalpreet Kaur", 
                    "uploadDate": "2024-08-12",
                    "downloads": 89,
                    "status": "published",
                    "thumbnail": "📄",
                    "fileType": "PDF"
                },
                {
                    "id": "audio_001",
                    "type": "audio",
                    "title": {
                        "en": "English Pronunciation Guide",
                        "hi": "अंग्रेजी उच्चारण गाइड",
                        "pa": "ਅੰਗਰੇਜ਼ੀ ਉਚਾਰਨ ਗਾਈਡ"
                    },
                    "description": {
                        "en": "Correct pronunciation of common English words",
                        "hi": "सामान्य अंग्रेजी शब्दों का सही उच्चारण",
                        "pa": "ਆਮ ਅੰਗਰੇਜ਼ੀ ਸ਼ਬਦਾਂ ਦਾ ਸਹੀ ਉਚਾਰਨ"
                    },
                    "subject": "english",
                    "grade": "7",
                    "duration": "12:15",
                    "fileSize": "8.7MB",
                    "uploadedBy": "Ms. Priya Singh",
                    "uploadDate": "2024-08-18",
                    "downloads": 56,
                    "status": "published",
                    "thumbnail": "🎵",
                    "fileType": "MP3"
                }
            ],
            "users": {
                "teachers": [
                    {
                        "id": "t1",
                        "username": "kamalpreet_kaur", 
                        "name": {
                            "en": "Mrs. Kamalpreet Kaur",
                            "hi": "श्रीमती कमलप्रीत कौर",
                            "pa": "ਸ਼ਰੀਮਤੀ ਕਮਲਪ੍ਰੀਤ ਕੌਰ"
                        },
                        "subject": "Mathematics",
                        "uploadCount": 34,
                        "storageUsed": "1.2GB"
                    }
                ],
                "students": [
                    {"id": "s1", "name": "Arjun Singh", "class": "6A", "points": 450, "progress": 78},
                    {"id": "s2", "name": "Priya Sharma", "class": "7B", "points": 380, "progress": 65},
                    {"id": "s3", "name": "Karan Patel", "class": "8C", "points": 520, "progress": 92}
                ]
            },
            "analytics": {
                "totalUploads": 127,
                "thisMonth": 23,
                "avgViews": 198,
                "mostPopular": "mathematics",
                "engagementData": [
                    {"week": "Week 1", "views": 245, "downloads": 67},
                    {"week": "Week 2", "views": 312, "downloads": 89},
                    {"week": "Week 3", "views": 278, "downloads": 76},
                    {"week": "Week 4", "views": 356, "downloads": 98}
                ],
                "performanceData": [
                    {"week": "Week 1", "score": 75, "lessons": 5},
                    {"week": "Week 2", "score": 82, "lessons": 7},
                    {"week": "Week 3", "score": 78, "lessons": 6},
                    {"week": "Week 4", "score": 88, "lessons": 8}
                ]
            }
        };

    this.contentLibrary = [];
    this.init();
    }

    // Initialize the CMS after DOM is ready
    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupApplication());
        } else {
            this.setupApplication();
        }
    }

    // Setup event listeners and initialize UI for CMS
    setupApplication() {
        this.setupEventListeners();
        this.updateOnlineStatus();
        this.updateLanguage();
        this.showPage('landingPage');
    }

    // Setup all event listeners for CMS UI
    setupEventListeners() {
        // Language toggle
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleLanguage();
            });
        }
        // Role selection
        this.setupRoleSelection();
        // Login form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin(e);
            });
        }
        const backToLanding = document.getElementById('backToLanding');
        if (backToLanding) {
            backToLanding.addEventListener('click', (e) => {
                e.preventDefault();
                this.showPage('landingPage');
            });
        }
        // Teacher logout
        const teacherLogout = document.getElementById('teacherLogout');
        if (teacherLogout) {
            teacherLogout.addEventListener('click', (e) => {
                e.preventDefault();
                this.logout();
            });
        }
        // Tab navigation
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchTab(tab.dataset.tab);
            });
        });
        // Upload functionality
        this.setupUploadListeners();
        // Content library
        this.setupContentLibraryListeners();
        // Online/offline events
        window.addEventListener('online', () => this.setOnlineStatus(true));
        window.addEventListener('offline', () => this.setOnlineStatus(false));
    }

    setupRoleSelection() {
        console.log('Setting up role selection...');
        
        // Use event delegation for more reliable handling
        document.addEventListener('click', (e) => {
            const roleCard = e.target.closest('.role-card');
            if (roleCard && roleCard.dataset.role) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Role card clicked:', roleCard.dataset.role);
                this.selectRole(roleCard.dataset.role);
            }
        });
        
        // Also set up direct listeners as backup
        const roleCards = document.querySelectorAll('.role-card');
        roleCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Direct role card click:', card.dataset.role);
                this.selectRole(card.dataset.role);
            });
        });
        
        console.log('Role selection setup complete, found', roleCards.length, 'role cards');
    }

    setupUploadListeners() {
        // Show upload modal
        const showUploadForm = document.getElementById('showUploadForm');
        if (showUploadForm) {
            showUploadForm.addEventListener('click', (e) => {
                e.preventDefault();
                this.showUploadModal();
            });
        }

        // Close upload modal
        const closeUploadModal = document.getElementById('closeUploadModal');
        if (closeUploadModal) {
            closeUploadModal.addEventListener('click', (e) => {
                e.preventDefault();
                this.hideUploadModal();
            });
        }

        // File input and drag-drop
        const uploadArea = document.getElementById('uploadArea');
        const fileInput = document.getElementById('fileInput');
        
        if (uploadArea && fileInput) {
            uploadArea.addEventListener('click', () => fileInput.click());
            uploadArea.addEventListener('dragover', (e) => this.handleDragOver(e));
            uploadArea.addEventListener('dragleave', (e) => this.handleDragLeave(e));
            uploadArea.addEventListener('drop', (e) => this.handleDrop(e));
            fileInput.addEventListener('change', (e) => this.handleFileSelect(e));
        }

        // Content type selection
        const contentType = document.getElementById('contentType');
        if (contentType) {
            contentType.addEventListener('change', (e) => {
                this.toggleVideoOptions(e.target.value === 'video');
            });
        }

        // Language tabs in upload form
        document.querySelectorAll('.lang-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchLanguageTab(tab.dataset.lang);
            });
        });

        // Upload form submission
        const uploadForm = document.getElementById('uploadForm');
        if (uploadForm) {
            uploadForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.startUpload();
            });
        }

        // Cancel upload
        const cancelUpload = document.getElementById('cancelUpload');
        if (cancelUpload) {
            cancelUpload.addEventListener('click', (e) => {
                e.preventDefault();
                this.hideUploadModal();
            });
        }
    }

    setupContentLibraryListeners() {
        // Search functionality
        const searchContent = document.getElementById('searchContent');
        if (searchContent) {
            searchContent.addEventListener('input', (e) => {
                this.filterContent();
            });
        }

        // View controls
        const gridView = document.getElementById('gridView');
        const listView = document.getElementById('listView');
        
        if (gridView) {
            gridView.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchView('grid');
            });
        }
        
        if (listView) {
            listView.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchView('list');
            });
        }

        // Filter controls
        ['filterType', 'filterSubject', 'filterGrade'].forEach(id => {
            const filter = document.getElementById(id);
            if (filter) {
                filter.addEventListener('change', () => this.filterContent());
            }
        });

        // Preview modal
        const closePreviewModal = document.getElementById('closePreviewModal');
        if (closePreviewModal) {
            closePreviewModal.addEventListener('click', (e) => {
                e.preventDefault();
                this.hidePreviewModal();
            });
        }
    }

    toggleLanguage() {
        const languages = ['en', 'hi', 'pa'];
        const currentIndex = languages.indexOf(this.currentLanguage);
        this.currentLanguage = languages[(currentIndex + 1) % languages.length];
        this.updateLanguage();
    }

    updateLanguage() {
        const langButton = document.getElementById('langToggle');
        if (langButton) {
            const langLabels = {
                'en': '🌐 हिंदी',
                'hi': '🌐 ਪੰਜਾਬੀ', 
                'pa': '🌐 English'
            };
            langButton.textContent = langLabels[this.currentLanguage];
        }
        
        document.querySelectorAll('[data-en][data-hi][data-pa]').forEach(element => {
            const text = element.dataset[this.currentLanguage];
            if (text) {
                element.textContent = text;
            }
        });

        // Update options in select elements
        document.querySelectorAll('option[data-en][data-hi][data-pa]').forEach(option => {
            const text = option.dataset[this.currentLanguage];
            if (text) {
                option.textContent = text;
            }
        });

        // Refresh current content
        this.refreshCurrentContent();
    }

    refreshCurrentContent() {
        if (this.currentPage === 'teacherDashboard') {
            if (this.currentTab === 'content') {
                this.renderContentLibrary();
            } else if (this.currentTab === 'overview') {
                this.renderStudentsTable();
            }
        }
    }

    selectRole(role) {
        console.log('Selecting role:', role);
        this.selectedRole = role;
        
        // Only show login for teacher role in this demo
        // if (role === 'teacher') {
        //     this.showPage('loginPage');
        // } else {
        //     alert(this.getLocalizedText({
        //         en: 'This demo only supports Teacher role. Please select Teacher.',
        //         hi: 'यह डेमो केवल शिक्षक भूमिका का समर्थन करता है। कृपया शिक्षक चुनें।',
        //         pa: 'ਇਹ ਡੈਮੋ ਸਿਰਫ਼ ਅਧਿਆਪਕ ਦੀ ਭੂਮਿਕਾ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਅਧਿਆਪਕ ਚੁਣੋ।'
        //     }));
        // }
    }

    handleLogin(e) {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        console.log('Login attempt:', username);
        fetch('https://sih2025hackathon.onrender.com/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
        .then(res => res.json().then(data => ({ ok: res.ok, data })))
        .then(({ ok, data }) => {
            if (ok && data.token) {
                localStorage.setItem('jwtToken', data.token);
                this.currentUser = data.user;
                if (data.user.role === 'teacher') {
                    this.showTeacherDashboard();
                } else if (data.user.role === 'student') {
                    this.showStudentDashboard();
                }
            } else {
                alert('Login failed: ' + (data.error || 'Unknown error'));
            }
        })
        .catch(err => {
            alert('Network/login error: ' + err.message);
        });
    }

    logout() {
        this.currentUser = null;
        this.selectedRole = null;
        this.showPage('landingPage');
        
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        if (username) username.value = '';
        if (password) password.value = '';
    }

    showPage(pageId) {
        console.log('Showing page:', pageId);
        
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            this.currentPage = pageId;
            console.log('Page switched to:', pageId);
        } else {
            console.error('Page not found:', pageId);
        }
    }

    showTeacherDashboard() {
        console.log('Showing teacher dashboard');
        this.showPage('teacherDashboard');
        this.switchTab('content'); // Open Content Management tab by default
    }

    switchTab(tabId) {
        console.log('Switching to tab:', tabId);
        
        // Update nav tabs
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        const activeTab = document.querySelector(`[data-tab="${tabId}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }

        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        const activeContent = document.getElementById(`${tabId}Tab`);
        if (activeContent) {
            activeContent.classList.add('active');
        }

        this.currentTab = tabId;

        // Load tab-specific content
        if (tabId === 'overview') {
            this.loadOverviewTab();
        } else if (tabId === 'content') {
            this.loadContentTab();
        } else if (tabId === 'analytics') {
            this.loadAnalyticsTab();
        }
    }

    loadOverviewTab() {
        this.renderStudentsTable();
        setTimeout(() => this.renderPerformanceChart(), 100);
    }

    async loadContentTab() {
        await this.fetchContentLibrary();
        this.renderContentLibrary();
    }
    async fetchContentLibrary() {
        try {
            const response = await fetch('https://sih2025hackathon.onrender.com/api/content/list');
            if (!response.ok) throw new Error('Failed to fetch content');
            const data = await response.json();
            // Map backend data to expected frontend format
            this.contentLibrary = data.map(item => ({
                id: item._id,
                type: item.type,
                title: item.title,
                description: item.description,
                subject: item.subject,
                grade: item.grade,
                fileSize: item.fileSize ? (typeof item.fileSize === 'number' ? (item.fileSize / (1024*1024)).toFixed(2) + ' MB' : item.fileSize) : '',
                uploadedBy: item.uploadedBy,
                uploadDate: item.uploadedAt ? item.uploadedAt.split('T')[0] : '',
                views: item.viewCount || 0,
                downloads: item.downloadCount || 0,
                status: item.status,
                fileName: item.fileName, // <-- fix: include fileName from backend
                thumbnail: this.getFileIcon({ name: item.fileName || '' })
            }));
        } catch (err) {
            console.error('Error fetching content:', err);
            this.contentLibrary = [];
        }
    }

    loadAnalyticsTab() {
        setTimeout(() => this.renderEngagementChart(), 100);
    }

    renderStudentsTable() {
        const studentsList = document.getElementById('studentsList');
        if (!studentsList) return;

        const headerLabels = {
            en: ['Student Name', 'Class', 'Points', 'Progress', 'Performance'],
            hi: ['छात्र का नाम', 'कक्षा', 'अंक', 'प्रगति', 'प्रदर्शन'],
            pa: ['ਵਿਦਿਆਰਥੀ ਦਾ ਨਾਮ', 'ਕਲਾਸ', 'ਅਅੰਕ', 'ਪ੍ਰਗਤੀ', 'ਪ੍ਰਦਰਸ਼ਨ']
        };
        
        const labels = headerLabels[this.currentLanguage];
        
        studentsList.innerHTML = `
            <div class="student-row header">
                <div>${labels[0]}</div>
                <div>${labels[1]}</div>
                <div>${labels[2]}</div>
                <div>${labels[3]}</div>
                <div>${labels[4]}</div>
            </div>
            ${this.appData.users.students.map(student => {
                let performanceClass = 'performance-excellent';
                let performanceText = this.getLocalizedText({
                    en:'उत्कृष्ट' , hi: 'ਸ਼ਾਨਦਾਰ' , pa: 'Excellent'
                });
                
                if (student.progress < 70) {
                    performanceClass = 'performance-good';
                    performanceText = this.getLocalizedText({
                        hi: 'Good', pa: 'अच्छा', en: 'ਚੰਗਾ'
                    });
                }
                if (student.progress < 50) {
                    performanceClass = 'performance-needs-improvement';
                    performanceText = this.getLocalizedText({
                        en: 'Needs Improvement', hi: 'सुधार की आवश्यकता', pa: 'ਸੁਧਾਰ ਦੀ ਲੋੜ'
                    });
                }
                
                return `
                    <div class="student-row">
                        <div class="student-name">${student.name}</div>
                        <div class="student-class">${student.class}</div>
                        <div>${student.points}</div>
                        <div>${student.progress}%</div>
                        <div class="performance-indicator ${performanceClass}">${performanceText}</div>
                    </div>
                `;
            }).join('')}
        `;
    }

    renderPerformanceChart() {
        const ctx = document.getElementById('performanceChart');
        if (!ctx) return;

        const data = this.appData.analytics.performanceData;
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.map(d => d.week),
                datasets: [{
                    label: this.getLocalizedText({
                        en: 'Average Score', hi: 'औसत स्कोर', pa: 'ਔਸਤ ਸਕੋਰ'
                    }),
                    data: data.map(d => d.score),
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    fill: true,
                    tension: 0.4
                }, {
                    label: this.getLocalizedText({
                        en: 'Lessons Completed', hi: 'पूरे किए गए पाठ', pa: 'ਪੂਰੇ ਕੀਤੇ ਪਾਠ'
                    }),
                    data: data.map(d => d.lessons),
                    borderColor: '#FFC185',
                    backgroundColor: 'rgba(255, 193, 133, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    renderEngagementChart() {
        const ctx = document.getElementById('engagementChart');
        if (!ctx) return;

        const data = this.appData.analytics.engagementData;
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(d => d.week),
                datasets: [{
                    label: this.getLocalizedText({
                        en: 'Views', hi: 'दृश्य', pa: 'ਦ੍ਰਿਸ਼'
                    }),
                    data: data.map(d => d.views),
                    backgroundColor: '#1FB8CD',
                }, {
                    label: this.getLocalizedText({
                        en: 'Downloads', hi: 'डाउनलोड', pa: 'ਡਾਊਨਲੋਡ'
                    }),
                    data: data.map(d => d.downloads),
                    backgroundColor: '#FFC185',
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    showUploadModal() {
        const modal = document.getElementById('uploadModal');
        if (modal) {
            modal.classList.remove('hidden');
            this.resetUploadForm();
        }
    }

    hideUploadModal() {
        const modal = document.getElementById('uploadModal');
        if (modal) {
            modal.classList.add('hidden');
            this.uploadFiles = [];
            this.resetUploadForm();
        }
    }

    resetUploadForm() {
        const form = document.getElementById('uploadForm');
        if (form) form.reset();
        
        const fileList = document.getElementById('fileList');
        if (fileList) {
            fileList.classList.add('hidden');
            fileList.innerHTML = '';
        }
        
        const uploadProgress = document.getElementById('uploadProgress');
        if (uploadProgress) uploadProgress.classList.add('hidden');
        
        this.toggleVideoOptions(false);
        this.uploadFiles = [];
    }

    handleDragOver(e) {
        e.preventDefault();
        e.currentTarget.classList.add('dragover');
    }

    handleDragLeave(e) {
        e.preventDefault();
        e.currentTarget.classList.remove('dragover');
    }

    handleDrop(e) {
        e.preventDefault();
        e.currentTarget.classList.remove('dragover');
        
        const files = Array.from(e.dataTransfer.files);
        this.processFiles(files);
    }

    handleFileSelect(e) {
        const files = Array.from(e.target.files);
        this.processFiles(files);
    }

    processFiles(files) {
        const validFiles = files.filter(file => this.isValidFile(file));
        this.uploadFiles = [...this.uploadFiles, ...validFiles];
        this.renderFileList();
        
        if (validFiles.length > 0) {
            this.autoDetectContentType(validFiles[0]);
        }
    }

    isValidFile(file) {
        const supportedFormats = this.appData.uploadSystem.supportedFormats;
        const extension = file.name.split('.').pop().toLowerCase();
        
        return Object.values(supportedFormats).some(formats => 
            formats.includes(extension)
        );
    }

    autoDetectContentType(file) {
        const extension = file.name.split('.').pop().toLowerCase();
        const supportedFormats = this.appData.uploadSystem.supportedFormats;
        
        let contentType = '';
        Object.entries(supportedFormats).forEach(([type, formats]) => {
            if (formats.includes(extension)) {
                contentType = type;
            }
        });
        
        const contentTypeSelect = document.getElementById('contentType');
        if (contentTypeSelect && contentType) {
            contentTypeSelect.value = contentType;
            this.toggleVideoOptions(contentType === 'video');
        }
    }

    renderFileList() {
        const fileList = document.getElementById('fileList');
        if (!fileList) return;

        if (this.uploadFiles.length === 0) {
            fileList.classList.add('hidden');
            return;
        }

        fileList.classList.remove('hidden');
        fileList.innerHTML = this.uploadFiles.map((file, index) => {
            const icon = this.getFileIcon(file);
            const size = this.formatFileSize(file.size);
            
            return `
                <div class="file-item">
                    <div class="file-info">
                        <div class="file-icon">${icon}</div>
                        <div class="file-details">
                            <div class="file-name">${file.name}</div>
                            <div class="file-size">${size}</div>
                        </div>
                    </div>
                    <button class="file-remove" onclick="cms.removeFile(${index})">&times;</button>
                </div>
            `;
        }).join('');
    }

    removeFile(index) {
        this.uploadFiles.splice(index, 1);
        this.renderFileList();
    }

    getFileIcon(file) {
        const extension = file.name.split('.').pop().toLowerCase();
        const icons = {
            'mp4': '🎥', 'avi': '🎥', 'mov': '🎥', 'wmv': '🎥', 'webm': '🎥',
            'mp3': '🎵', 'wav': '🎵', 'ogg': '🎵', 'm4a': '🎵',
            'pdf': '📄', 'doc': '📄', 'docx': '📄', 'ppt': '📊', 'pptx': '📊',
            'jpg': '🖼️', 'jpeg': '🖼️', 'png': '🖼️', 'gif': '🖼️', 'webp': '🖼️', 'svg': '🖼️'
        };
        return icons[extension] || '📁';
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    toggleVideoOptions(show) {
        const videoOptions = document.getElementById('videoOptions');
        if (videoOptions) {
            videoOptions.classList.toggle('hidden', !show);
        }
    }

    switchLanguageTab(lang) {
        // Update tab buttons
        document.querySelectorAll('.lang-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`[data-lang="${lang}"]`).classList.add('active');

        // Update content sections
        document.querySelectorAll('.lang-content').forEach(content => {
            content.classList.remove('active');
        });
        document.querySelector(`.lang-content[data-lang="${lang}"]`).classList.add('active');
    }

    async startUpload() {
    // Validate required fields
    const titleEn = document.getElementById('titleEn').value.trim();
    const contentType = document.getElementById('contentType').value;
    const subject = document.getElementById('subjectSelect').value;
    const grade = document.getElementById('gradeSelect').value;

    // Debug: log subject value before upload
    console.log('Uploading with subject:', subject);
        if (this.uploadFiles.length === 0) {
            alert(this.getLocalizedText({
                en: 'Please select files to upload',
                hi: 'कृपया अपलोड करने के लिए फाइलें चुनें',
                pa: 'ਕਿਰਪਾ ਕਰਕੇ ਅੱਪਲੋਡ ਕਰਨ ਲਈ ਫਾਈਲਾਂ ਚੁਣੋ'
            }));
            return;
        }

       

        if (!titleEn || !contentType || !subject || !grade) {
            alert(this.getLocalizedText({
                en: 'Please fill in all required fields',
                hi: 'कृपया सभी आवश्यक फ़ील्ड भरें',
                pa: 'ਕਿਰਪਾ ਕਰਕੇ ਸਾਰੇ ਲੋੜੀਂਦੇ ਖੇਤਰ ਭਰੋ'
            }));
            return;
        }

        // Prepare FormData
        const form = document.getElementById('uploadForm');
        const formData = new FormData(form);
        // Add only one file as 'video' field
        if (this.uploadFiles.length > 0 && !formData.has('video')) {
            formData.set('video', this.uploadFiles[0]);
        }
        // Set title, description, and language as JSON strings
        formData.set('title', JSON.stringify({
            en: document.getElementById('titleEn').value.trim(),
            hi: document.getElementById('titleHi').value.trim(),
            pa: document.getElementById('titlePa').value.trim()
        }));
        formData.set('description', JSON.stringify({
            en: document.getElementById('descriptionEn').value.trim(),
            hi: document.getElementById('descriptionHi').value.trim(),
            pa: document.getElementById('descriptionPa').value.trim()
        }));
        formData.set('language', JSON.stringify(['en', 'hi', 'pa']));
        // Explicitly set subject and grade fields to ensure they are sent
        formData.set('subject', document.getElementById('subjectSelect').value);
        formData.set('grade', document.getElementById('gradeSelect').value);

        const uploadProgress = document.getElementById('uploadProgress');
        if (uploadProgress) uploadProgress.classList.remove('hidden');

        try {
            const token = localStorage.getItem('jwtToken');
            const response = await fetch('https://sih2025hackathon.onrender.com/api/content/upload-video', {
                method: 'POST',
                headers: token ? { 'Authorization': 'Bearer ' + token } : {},
                body: formData
            });
            const result = await response.json();
            if (response.ok) {
                alert('Upload successful!');
                this.hideUploadModal();
                if (this.currentTab === 'content') {
                    this.renderContentLibrary();
                }
            } else {
                alert('Upload failed: ' + (result.error || 'Unknown error'));
            }
        } catch (err) {
            alert('Network error: ' + err.message);
        }
    }

    completeUpload() {
        // Create new content item
        const newContent = this.createContentItem();
        this.contentLibrary.push(newContent);
        
        // Update upload count
        const uploadCount = document.getElementById('uploadCount');
        if (uploadCount) {
            uploadCount.textContent = parseInt(uploadCount.textContent) + 1;
        }
        
        // Show success notification
        this.showNotification({
            en: 'Content uploaded successfully!',
            hi: 'सामग्री सफलतापूर्वक अपलोड की गई!',
            pa: 'ਸਮੱਗਰੀ ਸਫਲਤਾਪੂਰਵਕ ਅੱਪਲੋਡ ਹੋਈ!'
        });
        
        // Hide modal and refresh content library
        setTimeout(() => {
            this.hideUploadModal();
            if (this.currentTab === 'content') {
                this.renderContentLibrary();
            }
        }, 2000);
    }

    createContentItem() {
        const id = `content_${Date.now()}`;
        const titleEn = document.getElementById('titleEn').value.trim();
        const titleHi = document.getElementById('titleHi').value.trim();
        const titlePa = document.getElementById('titlePa').value.trim();
        const descEn = document.getElementById('descriptionEn').value.trim();
        const descHi = document.getElementById('descriptionHi').value.trim();
        const descPa = document.getElementById('descriptionPa').value.trim();
        const contentType = document.getElementById('contentType').value;
        const subject = document.getElementById('subjectSelect').value;
        const grade = document.getElementById('gradeSelect').value;
        
        return {
            id,
            type: contentType,
            title: {
                en: titleEn,
                hi: titleHi || titleEn,
                pa: titlePa || titleEn
            },
            description: {
                en: descEn,
                hi: descHi || descEn,
                pa: descPa || descEn
            },
            subject,
            grade,
            fileSize: this.formatFileSize(this.uploadFiles[0].size),
            uploadedBy: this.currentUser.name.en,
            uploadDate: new Date().toISOString().split('T')[0],
            views: 0,
            downloads: 0,
            status: 'published',
            thumbnail: this.getFileIcon(this.uploadFiles[0])
        };
    }

    renderContentLibrary() {
        const contentGrid = document.getElementById('contentGrid');
        if (!contentGrid) return;

        const filteredContent = this.getFilteredContent();
        
        contentGrid.innerHTML = filteredContent.map(item => `
            <div class="content-card" data-content-id="${item.id}">
                <div class="content-thumbnail">${item.thumbnail}</div>
                <div class="content-info">
                    <h4 class="content-title">${item.title[this.currentLanguage]}</h4>
                    <div class="content-meta">
                        <span class="content-tag">${this.getSubjectName(item.subject)}</span>
                        <span class="content-tag">${this.getLocalizedText({en: 'Grade', hi: 'कक्षा', pa: 'ਕਲਾਸ'})} ${item.grade}</span>
                        <span class="content-tag">${item.fileSize}</span>
                    </div>
                    <div class="content-stats">
                        <span>👁️ ${item.views || 0}</span>
                        <span>⬇️ ${item.downloads || 0}</span>
                    </div>
                    <div class="content-actions">
                        <button class="content-action" data-action="edit" data-content-id="${item.id}">${this.getLocalizedText({en: 'Edit', hi: 'संपादित करें', pa: 'ਸੰਪਾਦਿਤ ਕਰੋ'})}</button>
                        <button class="content-action" data-action="delete" data-content-id="${item.id}">${this.getLocalizedText({en: 'Delete', hi: 'हटाएं', pa: 'ਮਿਟਾਓ'})}</button>
                    </div>
                </div>
            </div>
        `).join('');

        // Attach event listeners for preview, edit, and delete
        contentGrid.querySelectorAll('.content-card').forEach(card => {
            card.addEventListener('click', (e) => {
                // Only trigger preview if not clicking an action button
                if (e.target.closest('.content-action')) return;
                const id = card.getAttribute('data-content-id');
                this.previewContent(id);
            });
        });
        contentGrid.querySelectorAll('button[data-action="edit"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.getAttribute('data-content-id');
                this.editContent(id);
            });
        });
        contentGrid.querySelectorAll('button[data-action="delete"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.getAttribute('data-content-id');
                this.deleteContent(id);
            });
        });
    }

    getFilteredContent() {
        let filtered = [...this.contentLibrary];
        
        // Search filter
        const searchTerm = document.getElementById('searchContent')?.value.toLowerCase() || '';
        if (searchTerm) {
            filtered = filtered.filter(item => 
                item.title[this.currentLanguage].toLowerCase().includes(searchTerm) ||
                item.description[this.currentLanguage].toLowerCase().includes(searchTerm)
            );
        }
        
        // Type filter
        const typeFilter = document.getElementById('filterType')?.value || '';
        if (typeFilter) {
            filtered = filtered.filter(item => item.type === typeFilter);
        }
        
        // Subject filter
        const subjectFilter = document.getElementById('filterSubject')?.value || '';
        if (subjectFilter) {
            filtered = filtered.filter(item => item.subject === subjectFilter);
        }
        
        // Grade filter
        const gradeFilter = document.getElementById('filterGrade')?.value || '';
        if (gradeFilter) {
            filtered = filtered.filter(item => item.grade === gradeFilter);
        }
        
        return filtered;
    }

    getSubjectName(subjectId) {
        const subjects = {
            mathematics: {en: 'Mathematics', hi: 'गणित', pa: 'ਗਣਿਤ'},
            science: {en: 'Science', hi: 'विज्ञान', pa: 'ਵਿਗਿਆਨ'},
            english: {en: 'English', hi: 'अंग्रेजी', pa: 'ਅੰਗਰੇਜ਼ੀ'},
            hindi: {en: 'Hindi', hi: 'हिंदी', pa: 'ਹਿੰਦੀ'},
            punjabi: {en: 'Punjabi', hi: 'पंजाबी', pa: 'ਪੰਜਾਬੀ'},
            social_studies: {en: 'Social Studies', hi: 'सामाजिक अध्ययन', pa: 'ਸਮਾਜਕ ਅਧਿਐਨ'}
        };
        return subjects[subjectId]?.[this.currentLanguage] || subjectId;
    }

    filterContent() {
        this.renderContentLibrary();
    }

    switchView(viewType) {
        const gridView = document.getElementById('gridView');
        const listView = document.getElementById('listView');
        const contentGrid = document.getElementById('contentGrid');
        
        if (viewType === 'grid') {
            gridView?.classList.add('active');
            listView?.classList.remove('active');
            contentGrid?.classList.remove('list-view');
        } else {
            listView?.classList.add('active');
            gridView?.classList.remove('active');
            contentGrid?.classList.add('list-view');
        }
    }

    previewContent(contentId) {
        const content = this.contentLibrary.find(item => item.id === contentId);
        if (!content) return;

        // Debug log for troubleshooting
        console.log('[Preview Modal] Content object:', content);

        const modal = document.getElementById('previewModal');
        const title = document.getElementById('previewTitle');
        const type = document.getElementById('previewType');
        const subject = document.getElementById('previewSubject');
        const grade = document.getElementById('previewGrade');
        const views = document.getElementById('previewViews');
        const previewContent = document.getElementById('previewContent');

        if (title) title.textContent = content.title[this.currentLanguage];
        if (type) type.textContent = content.type;
        if (subject) subject.textContent = this.getSubjectName(content.subject);
        if (grade) grade.textContent = `Grade ${content.grade}`;
        if (views) views.textContent = content.views || 0;

        if (previewContent) {
            if (content.type === 'video' && content.fileName) {
                // Use backend server URL for video source
                const videoSrc = `https://sih2025hackathon.onrender.com/uploads/videos/${content.fileName}`;
                previewContent.innerHTML = `
                    <div style="text-align: center; padding: 20px; background: var(--color-bg-1); border-radius: var(--radius-base);">
                        <video controls style="max-width:100%; max-height:360px; margin-bottom: 16px;">
                            <source src="${videoSrc}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <h3>${content.title[this.currentLanguage]}</h3>
                        <p>${content.description[this.currentLanguage]}</p>
                        <p style="color: var(--color-text-secondary); font-size: 13px;">Video file: <code>${content.fileName}</code></p>
                    </div>
                `;
            } else if (content.type === 'video' && !content.fileName) {
                previewContent.innerHTML = `
                    <div style="text-align: center; padding: 40px; background: var(--color-bg-1); border-radius: var(--radius-base);">
                        <div style="font-size: 64px; margin-bottom: 16px;">⚠️</div>
                        <h3>${content.title[this.currentLanguage]}</h3>
                        <p>${content.description[this.currentLanguage]}</p>
                        <p style="color: red;">Video file not found for this content.</p>
                    </div>
                `;
            } else {
                previewContent.innerHTML = `
                    <div style="text-align: center; padding: 40px; background: var(--color-bg-1); border-radius: var(--radius-base);">
                        <div style="font-size: 64px; margin-bottom: 16px;">${content.thumbnail}</div>
                        <h3>${content.title[this.currentLanguage]}</h3>
                        <p>${content.description[this.currentLanguage]}</p>
                        <p style="color: var(--color-text-secondary);">${this.getLocalizedText({en: 'Preview not available in demo', hi: 'डेमो में पूर्वावलोकन उपलब्ध नहीं', pa: 'ਡੈਮੋ ਵਿੱਚ ਪੂਰਵ-ਦਰਸ਼ਨ ਉਪਲਬਧ ਨਹੀਂ'})}</p>
                    </div>
                `;
            }
        }

        modal?.classList.remove('hidden');
    }

    hidePreviewModal() {
        const modal = document.getElementById('previewModal');
        modal?.classList.add('hidden');
    }

    editContent(contentId) {
        alert(this.getLocalizedText({
            en: 'Edit functionality would be implemented here',
            hi: 'संपादन कार्यक्षमता यहां लागू की जाएगी',
            pa: 'ਸੰਪਾਦਨ ਕਾਰਜਕੁਸ਼਼ਲਤਾ ਇੱਥੇ ਲਾਗੂ ਕੀਤੀ ਜਾਵੇਗੀ'
        }));
    }

    deleteContent(contentId) {
        const confirmed = confirm(this.getLocalizedText({
            en: 'Are you sure you want to delete this content?',
            hi: 'क्या आप वाकई इस सामग्री को हटाना चाहते हैं?',
            pa: 'ਕੀ ਤੁਸੀਂ ਯਕੀਨਨ ਇਸ ਸਮੱਗਰੀ ਨੂੰ ਮਿਟਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ?'
        }));
        if (!confirmed) return;

        // Call backend DELETE endpoint
        const token = localStorage.getItem('jwtToken');
        fetch(`http://localhost:5000/api/content/delete/${contentId}`, {
            method: 'DELETE',
            headers: token ? { 'Authorization': 'Bearer ' + token } : {}
        })
        .then(res => res.json().then(data => ({ ok: res.ok, data })))
        .then(({ ok, data }) => {
            // Always remove from UI, even if backend returns 404 (for demo/static items)
            this.contentLibrary = this.contentLibrary.filter(item => item.id !== contentId);
            this.renderContentLibrary();
            if (ok) {
                this.showNotification({
                    en: 'Content deleted successfully',
                    hi: 'सामग्री सफलतापूर्वक हटा दी गई',
                    pa: 'ਸਮੱਗਰੀ ਸਫਲਤਾਪੂਰਵਕ ਮਿਟਾਈ ਗਈ'
                });
            } else {
                this.showNotification({
                    en: 'Demo/static item removed from view',
                    hi: 'डेमो/स्थैतिक सामग्री दृश्य से हटाई गई',
                    pa: 'ਡੈਮੋ/ਸਥਿਰ ਸਮੱਗਰੀ ਵਿਊ ਤੋਂ ਹਟਾਈ ਗਈ'
                });
            }
        })
        .catch(err => {
            // Still remove from UI on network error
            this.contentLibrary = this.contentLibrary.filter(item => item.id !== contentId);
            this.renderContentLibrary();
            this.showNotification({
                en: 'Content removed from view (network error)',
                hi: 'सामग्री दृश्य से हटाई गई (नेटवर्क त्रुटि)',
                pa: 'ਸਮੱਗਰੀ ਵਿਊ ਤੋਂ ਹਟਾਈ ਗਈ (ਨੈੱਟਵਰਕ ਐਰਰ)' 
            });
        });
    }

    showNotification(message) {
        const notification = document.getElementById('successNotification');
        const messageEl = document.getElementById('successMessage');
        
        if (messageEl) messageEl.textContent = this.getLocalizedText(message);
        if (notification) {
            notification.classList.remove('hidden');
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 3000);
        }
    }

    getLocalizedText(textObj) {
        return textObj[this.currentLanguage] || textObj.en || '';
    }

    updateOnlineStatus() {
        const indicator = document.getElementById('offlineIndicator');
        const status = document.getElementById('offlineStatus');
        
        if (indicator && status) {
            if (this.isOnline) {
                indicator.classList.remove('offline');
                status.textContent = this.getLocalizedText({
                    en: '🌐 Online', hi: '🌐 ऑनलाइन', pa: '🌐 ਔਨਲਾਈਨ'
                });
            } else {
                indicator.classList.add('offline');
                status.textContent = this.getLocalizedText({
                    en: '📱 Offline', hi: '📱 ऑफलाइन', pa: '📱 ਔਫਲਾਈਨ'
                });
            }
        }
    }

    setOnlineStatus(status) {
        this.isOnline = status;
        this.updateOnlineStatus();
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing CMS...');
    window.cms = new ContentManagementSystem();
});

// Fallback initialization
if (document.readyState !== 'loading') {
    console.log('Document already loaded, initializing CMS...');
    window.cms = new ContentManagementSystem();
}

