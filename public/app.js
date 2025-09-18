// MERN Stack Digital Learning Platform with Trilingual Support (EN/HI/PA)
// Complete Punjabi Language Integration for Rural Punjab Students

class TrilingualLearningPlatform {
    constructor() {
        this.currentUser = null;
        this.currentLanguage = 'en';
        this.currentPage = 'landingPage';
        this.isOnline = navigator.onLine;
        this.selectedRole = null;
        this.quizState = {
            currentQuiz: null,
            currentQuestion: 0,
            answers: [],
            score: 0,
            startTime: null,
            timer: null
        };
        
        // Complete trilingual application data
        this.appData = this.initializeAppData();
        this.translations = this.initializeTranslations();
        
        this.init();
    }

    initializeAppData() {
        return {
            users: {
                students: [
                    {
                        id: "s1",
                        username: "arjun_singh",
                        email: "arjun@example.com",
                        password: "demo123",
                        name: {
                            en: "Arjun Singh",
                            hi: "अर्जुन सिंह",
                            pa: "ਅਰਜੁਨ ਸਿੰਘ"
                        },
                        class: "6A",
                        points: 450,
                        level: 3,
                        badges: ["quiz_master", "perfect_attendance"],
                        streak: 7,
                        totalLessons: 24,
                        completedLessons: 18,
                        preferredLanguage: "pa"
                    },
                    {
                        id: "s2",
                        username: "priya_sharma",
                        email: "priya@example.com", 
                        password: "demo123",
                        name: {
                            en: "Priya Sharma",
                            hi: "प्रिया शर्मा",
                            pa: "ਪ੍ਰਿਆ ਸ਼ਰਮਾ"
                        },
                        class: "7B",
                        points: 380,
                        level: 2,
                        badges: ["speed_learner"],
                        streak: 5,
                        totalLessons: 28,
                        completedLessons: 22,
                        preferredLanguage: "hi"
                    },
                    {
                        id: "s3",
                        username: "karan_patel",
                        email: "karan@example.com",
                        password: "demo123", 
                        name: {
                            en: "Karan Patel",
                            hi: "करण पटेल",
                            pa: "ਕਰਨ ਪਟੇਲ"
                        },
                        class: "8C",
                        points: 520,
                        level: 4,
                        badges: ["quiz_master", "speed_learner", "star_student"],
                        streak: 12,
                        totalLessons: 32,
                        completedLessons: 30,
                        preferredLanguage: "en"
                    }
                ],
                teachers: [
                    {
                        id: "t1",
                        username: "kamalpreet_kaur",
                        email: "kamalpreet@example.com",
                        password: "demo123",
                        name: {
                            en: "Mrs. Kamalpreet Kaur",
                            hi: "श्रीमती कमलप्रीत कौर",
                            pa: "ਸ਼ਰੀਮਤੀ ਕਮਲਪ੍ਰੀਤ ਕੌਰ"
                        },
                        subject: {
                            en: "Mathematics",
                            hi: "गणित",
                            pa: "ਗਣਿਤ"
                        },
                        classes: ["6A", "7A"],
                        students: 45,
                        preferredLanguage: "pa"
                    },
                    {
                        id: "t2",
                        username: "rajesh_kumar",
                        email: "rajesh@example.com",
                        password: "demo123",
                        name: {
                            en: "Mr. Rajesh Kumar",
                            hi: "श्री राजेश कुमार",
                            pa: "ਸ਼ਰੀ ਰਾਜੇਸ਼ ਕੁਮਾਰ"
                        },
                        subject: {
                            en: "Science",
                            hi: "विज्ञान",
                            pa: "ਵਿਗਿਆਨ"
                        },
                        classes: ["7B", "8C"],
                        students: 38,
                        preferredLanguage: "hi"
                    }
                ],
                parents: [
                    {
                        id: "p1",
                        username: "gurmeet_singh",
                        email: "gurmeet@example.com",
                        password: "demo123",
                        name: {
                            en: "Gurmeet Singh",
                            hi: "गुरमीत सिंह",
                            pa: "ਗੁਰਮੀਤ ਸਿੰਘ"
                        },
                        children: ["s1"],
                        preferredLanguage: "pa"
                    }
                ]
            },
            courses: [
                {
                    id: "math6",
                    title: {
                        en: "Mathematics Grade 6",
                        hi: "गणित कक्षा 6",
                        pa: "ਗਣਿਤ ਕਲਾਸ 6"
                    },
                    description: {
                        en: "Learn fundamental mathematics concepts",
                        hi: "बुनियादी गणित की अवधारणाओं को सीखें",
                        pa: "ਬੁਨਿਆਦੀ ਗਣਿਤ ਦੀਆਂ ਧਾਰਨਾਵਾਂ ਸਿੱਖੋ"
                    },
                    lessons: [
                        {
                            id: "m1",
                            title: {
                                en: "Basic Addition",
                                hi: "मूल जोड़",
                                pa: "ਬੁਨਿਆਦੀ ਜੋੜ"
                            },
                            description: {
                                en: "Learn addition of numbers",
                                hi: "संख्याओं का जोड़ सीखें",
                                pa: "ਨੰਬਰਾਂ ਦਾ ਜੋੜ ਸਿੱਖੋ"
                            },
                            duration: "15 min",
                            completed: true
                        },
                        {
                            id: "m2",
                            title: {
                                en: "Subtraction",
                                hi: "घटाना",
                                pa: "ਘਟਾਉਣਾ"
                            },
                            description: {
                                en: "Learn subtraction of numbers",
                                hi: "संख्याओं का घटाना सीखें",
                                pa: "ਨੰਬਰਾਂ ਦਾ ਘਟਾਉਣਾ ਸਿੱਖੋ"
                            },
                            duration: "12 min",
                            completed: true
                        },
                        {
                            id: "m3",
                            title: {
                                en: "Multiplication",
                                hi: "गुणा",
                                pa: "ਗੁਣਾ"
                            },
                            description: {
                                en: "Learn multiplication tables",
                                hi: "गुणा की तालिका सीखें",
                                pa: "ਗੁਣਾ ਦੀ ਸਾਰਣੀ ਸਿੱਖੋ"
                            },
                            duration: "18 min",
                            completed: false
                        }
                    ],
                    totalLessons: 12,
                    completedLessons: 8
                },
                {
                    id: "science6",
                    title: {
                        en: "Science Grade 6",
                        hi: "विज्ञान कक्षा 6",
                        pa: "ਵਿਗਿਆਨ ਕਲਾਸ 6"
                    },
                    description: {
                        en: "Explore the world of science",
                        hi: "विज्ञान की दुनिया का अन्वेषण करें",
                        pa: "ਵਿਗਿਆਨ ਦੀ ਦੁਨੀਆਂ ਦੀ ਖੋਜ ਕਰੋ"
                    },
                    lessons: [
                        {
                            id: "s1",
                            title: {
                                en: "States of Matter",
                                hi: "पदार्थ की अवस्थाएं",
                                pa: "ਪਦਾਰਥ ਦੀਆਂ ਅਵਸਥਾਵਾਂ"
                            },
                            description: {
                                en: "Learn about solid, liquid and gas",
                                hi: "ठोस, तरल और गैस के बारे में जानें",
                                pa: "ਠੋਸ, ਤਰਲ ਅਤੇ ਗੈਸ ਬਾਰੇ ਜਾਣੋ"
                            },
                            duration: "20 min",
                            completed: true
                        },
                        {
                            id: "s2",
                            title: {
                                en: "Water Cycle",
                                hi: "जल चक्र",
                                pa: "ਪਾਣੀ ਚੱਕਰ"
                            },
                            description: {
                                en: "Understand the water cycle process",
                                hi: "जल चक्र प्रक्रिया को समझें",
                                pa: "ਪਾਣੀ ਚੱਕਰ ਪ੍ਰਕਿਰਿਆ ਸਮਝੋ"
                            },
                            duration: "16 min",
                            completed: false
                        }
                    ],
                    totalLessons: 10,
                    completedLessons: 6
                },
                {
                    id: "punjabi6",
                    title: {
                        en: "Punjabi Language Grade 6",
                        hi: "पंजाबी भाषा कक्षा 6",
                        pa: "ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਕਲਾਸ 6"
                    },
                    description: {
                        en: "Learn Punjabi language and literature",
                        hi: "पंजाबी भाषा और साहित्य सीखें",
                        pa: "ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਅਤੇ ਸਾਹਿਤ ਸਿੱਖੋ"
                    },
                    lessons: [
                        {
                            id: "p1",
                            title: {
                                en: "Gurmukhi Alphabet",
                                hi: "गुरमुखी वर्णमाला",
                                pa: "ਗੁਰਮੁਖੀ ਵਰਣਮਾਲਾ"
                            },
                            description: {
                                en: "Learn Gurmukhi script basics",
                                hi: "गुरमुखी लिपि की मूल बातें सीखें",
                                pa: "ਗੁਰਮੁਖੀ ਲਿਪੀ ਦੀਆਂ ਮੂਲ ਗੱਲਾਂ ਸਿੱਖੋ"
                            },
                            duration: "25 min",
                            completed: false
                        },
                        {
                            id: "p2",
                            title: {
                                en: "Punjabi Poetry",
                                hi: "पंजाबी कविता",
                                pa: "ਪੰਜਾਬੀ ਕਵਿਤਾ"
                            },
                            description: {
                                en: "Explore Punjabi poetry and culture",
                                hi: "पंजाबी कविता और संस्कृति का अन्वेषण करें",
                                pa: "ਪੰਜਾਬੀ ਕਵਿਤਾ ਅਤੇ ਸੱਭਿਆਚਾਰ ਦੀ ਖੋਜ ਕਰੋ"
                            },
                            duration: "22 min",
                            completed: true
                        }
                    ],
                    totalLessons: 8,
                    completedLessons: 5
                }
            ],
            quizzes: [
                {
                    id: "q1",
                    courseId: "math6",
                    title: {
                        en: "Basic Math Quiz",
                        hi: "बुनियादी गणित प्रश्नोत्तरी",
                        pa: "ਬੁਨਿਆਦੀ ਗਣਿਤ ਪ੍ਰਸ਼ਨ-ਉੱਤਰ"
                    },
                    questions: [
                        {
                            id: "q1_1",
                            question: {
                                en: "What is 15 + 27?",
                                hi: "15 + 27 कितना होता है?",
                                pa: "15 + 27 ਕਿੰਨਾ ਹੁੰਦਾ ਹੈ?"
                            },
                            options: {
                                en: ["42", "41", "43", "40"],
                                hi: ["42", "41", "43", "40"],
                                pa: ["42", "41", "43", "40"]
                            },
                            correct: 0,
                            explanation: {
                                en: "15 + 27 equals 42",
                                hi: "15 + 27 बराबर 42 होता है",
                                pa: "15 + 27 ਬਰਾਬਰ 42 ਹੁੰਦਾ ਹੈ"
                            }
                        },
                        {
                            id: "q1_2",
                            question: {
                                en: "What is 56 - 23?",
                                hi: "56 - 23 कितना होता है?",
                                pa: "56 - 23 ਕਿੰਨਾ ਹੁੰਦਾ ਹੈ?"
                            },
                            options: {
                                en: ["33", "32", "34", "31"],
                                hi: ["33", "32", "34", "31"],
                                pa: ["33", "32", "34", "31"]
                            },
                            correct: 0,
                            explanation: {
                                en: "56 - 23 equals 33",
                                hi: "56 - 23 बराबर 33 होता है",
                                pa: "56 - 23 ਬਰਾਬਰ 33 ਹੁੰਦਾ ਹੈ"
                            }
                        }
                    ]
                },
                {
                    id: "q2",
                    courseId: "science6",
                    title: {
                        en: "Science Quiz",
                        hi: "विज्ञान प्रश्नोत्तरी",
                        pa: "ਵਿਗਿਆਨ ਪ੍ਰਸ਼ਨ-ਉੱਤਰ"
                    },
                    questions: [
                        {
                            id: "q2_1",
                            question: {
                                en: "What are the three states of matter?",
                                hi: "पदार्थ की तीन अवस्थाएं क्या हैं?",
                                pa: "ਪਦਾਰਥ ਦੀਆਂ ਤਿੰਨ ਅਵਸਥਾਵਾਂ ਕੀ ਹਨ?"
                            },
                            options: {
                                en: ["Solid, Liquid, Gas", "Hot, Cold, Warm", "Big, Small, Medium", "Fast, Slow, Still"],
                                hi: ["ठोस, तरल, गैस", "गर्म, ठंडा, गुनगुना", "बड़ा, छोटा, मध्यम", "तेज़, धीमा, स्थिर"],
                                pa: ["ਠੋਸ, ਤਰਲ, ਗੈਸ", "ਗਰਮ, ਠੰਡਾ, ਗੁਨਗੁਨਾ", "ਵੱਡਾ, ਛੋਟਾ, ਮੱਧਮ", "ਤੇਜ਼, ਹੌਲੀ, ਸਥਿਰ"]
                            },
                            correct: 0,
                            explanation: {
                                en: "Matter exists in three states: solid, liquid, and gas",
                                hi: "पदार्थ तीन अवस्थाओं में मौजूद है: ठोस, तरल और गैस",
                                pa: "ਪਦਾਰਥ ਤਿੰਨ ਅਵਸਥਾਵਾਂ ਵਿੱਚ ਮੌਜੂਦ ਹੈ: ਠੋਸ, ਤਰਲ ਅਤੇ ਗੈਸ"
                            }
                        }
                    ]
                },
                {
                    id: "q3",
                    courseId: "punjabi6",
                    title: {
                        en: "Punjabi Language Quiz",
                        hi: "पंजाबी भाषा प्रश्नोत्तरी",
                        pa: "ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਪ੍ਰਸ਼ਨ-ਉੱਤਰ"
                    },
                    questions: [
                        {
                            id: "q3_1",
                            question: {
                                en: "How many letters are in the Gurmukhi alphabet?",
                                hi: "गुरमुखी वर्णमाला में कितने अक्षर हैं?",
                                pa: "ਗੁਰਮੁਖੀ ਵਰਣਮਾਲਾ ਵਿੱਚ ਕਿੰਨੇ ਅੱਖਰ ਹਨ?"
                            },
                            options: {
                                en: ["35", "32", "38", "40"],
                                hi: ["35", "32", "38", "40"],
                                pa: ["35", "32", "38", "40"]
                            },
                            correct: 0,
                            explanation: {
                                en: "Gurmukhi alphabet has 35 letters",
                                hi: "गुरमुखी वर्णमाला में 35 अक्षर हैं",
                                pa: "ਗੁਰਮੁਖੀ ਵਰਣਮਾਲਾ ਵਿੱਚ 35 ਅੱਖਰ ਹਨ"
                            }
                        }
                    ]
                }
            ],
            badges: [
                {
                    id: "quiz_master",
                    name: {
                        en: "Quiz Master",
                        hi: "प्रश्नोत्तरी मास्टर",
                        pa: "ਪ੍ਰਸ਼ਨ-ਉੱਤਰ ਮਾਸਟਰ"
                    },
                    description: {
                        en: "Complete 10 quizzes with 80%+ score",
                        hi: "80% से अधिक अंक के साथ 10 प्रश्नोत्तरी पूरी करें",
                        pa: "80% ਤੋਂ ਵੱਧ ਅੰਕਾਂ ਨਾਲ 10 ਪ੍ਰਸ਼ਨ-ਉੱਤਰ ਪੂਰੇ ਕਰੋ"
                    },
                    icon: "🏆"
                },
                {
                    id: "perfect_attendance",
                    name: {
                        en: "Perfect Attendance",
                        hi: "पूर्ण उपस्थिति",
                        pa: "ਪੂਰੀ ਹਾਜ਼ਰੀ"
                    },
                    description: {
                        en: "7 days consecutive login",
                        hi: "लगातार 7 दिन लॉगिन",
                        pa: "ਲਗਾਤਾਰ 7 ਦਿਨ ਲਾਗਇਨ"
                    },
                    icon: "⭐"
                },
                {
                    id: "speed_learner",
                    name: {
                        en: "Speed Learner",
                        hi: "तेज़ सीखने वाला",
                        pa: "ਤੇਜ਼ ਸਿੱਖਣ ਵਾਲਾ"
                    },
                    description: {
                        en: "Complete 5 lessons in one day",
                        hi: "एक दिन में 5 पाठ पूरे करें",
                        pa: "ਇੱਕ ਦਿਨ ਵਿੱਚ 5 ਪਾਠ ਪੂਰੇ ਕਰੋ"
                    },
                    icon: "🚀"
                },
                {
                    id: "star_student",
                    name: {
                        en: "Star Student",
                        hi: "स्टार छात्र",
                        pa: "ਸਟਾਰ ਵਿਦਿਆਰਥੀ"
                    },
                    description: {
                        en: "Achieve 500+ points",
                        hi: "500+ अंक प्राप्त करें",
                        pa: "500+ ਅੰਕ ਪ੍ਰਾਪਤ ਕਰੋ"
                    },
                    icon: "🌟"
                },
                {
                    id: "punjabi_scholar",
                    name: {
                        en: "Punjabi Scholar",
                        hi: "पंजाबी विद्वान",
                        pa: "ਪੰਜਾਬੀ ਵਿਦਵਾਨ"
                    },
                    description: {
                        en: "Master Punjabi language lessons",
                        hi: "पंजाबी भाषा के पाठों में महारत हासिल करें",
                        pa: "ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦੇ ਪਾਠਾਂ ਵਿੱਚ ਮਹਾਰਤ ਹਾਸਲ ਕਰੋ"
                    },
                    icon: "📚"
                }
            ],
            performanceData: {
                weekly: [
                    {
                        week: {en: "Week 1", hi: "सप्ताह 1", pa: "ਹਫ਼ਤਾ 1"},
                        score: 75,
                        lessons: 5
                    },
                    {
                        week: {en: "Week 2", hi: "सप्ताह 2", pa: "ਹਫ਼ਤਾ 2"},
                        score: 82,
                        lessons: 7
                    },
                    {
                        week: {en: "Week 3", hi: "सप्ताह 3", pa: "ਹਫ਼ਤਾ 3"},
                        score: 78,
                        lessons: 6
                    },
                    {
                        week: {en: "Week 4", hi: "सप्ताह 4", pa: "ਹਫ਼ਤਾ 4"},
                        score: 88,
                        lessons: 8
                    }
                ],
                subjects: [
                    {
                        subject: {en: "Mathematics", hi: "गणित", pa: "ਗਣਿਤ"},
                        score: 85,
                        progress: 75
                    },
                    {
                        subject: {en: "Science", hi: "विज्ञान", pa: "ਵਿਗਿਆਨ"},
                        score: 78,
                        progress: 60
                    },
                    {
                        subject: {en: "English", hi: "अंग्रेजी", pa: "ਅੰਗਰੇਜ਼ੀ"},
                        score: 82,
                        progress: 65
                    },
                    {
                        subject: {en: "Punjabi", hi: "पंजाबी", pa: "ਪੰਜਾਬੀ"},
                        score: 88,
                        progress: 70
                    }
                ]
            }
        };
    }

    initializeTranslations() {
        return {
            common: {
                loading: {en: "Loading...", hi: "लोड हो रहा है...", pa: "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ..."},
                error: {en: "Error", hi: "त्रुटि", pa: "ਗਲਤੀ"},
                success: {en: "Success", hi: "सफलता", pa: "ਸਫ਼ਲਤਾ"},
                save: {en: "Save", hi: "सेव करें", pa: "ਸੇਵ ਕਰੋ"},
                cancel: {en: "Cancel", hi: "रद्द करें", pa: "ਰੱਦ ਕਰੋ"},
                continue: {en: "Continue", hi: "जारी रखें", pa: "ਜਾਰੀ ਰੱਖੋ"},
                back: {en: "Back", hi: "वापस", pa: "ਵਾਪਸ"},
                next: {en: "Next", hi: "अगला", pa: "ਅਗਲਾ"},
                previous: {en: "Previous", hi: "पिछला", pa: "ਪਿਛਲਾ"},
                finish: {en: "Finish", hi: "समाप्त", pa: "ਖ਼ਤਮ"},
                days: {en: "days", hi: "दिन", pa: "ਦਿਨ"}
            },
            auth: {
                loginSuccess: {
                    en: "Login successful! Welcome back.",
                    hi: "लॉगिन सफल! वापस आपका स्वागत है।",
                    pa: "ਲਾਗਇਨ ਸਫ਼ਲ! ਵਾਪਸ ਜੀ ਆਇਆਂ ਨੂੰ।"
                },
                loginError: {
                    en: "Invalid credentials. Please use the demo credentials shown above.",
                    hi: "गलत क्रेडेंशियल। कृपया ऊपर दिए गए डेमो क्रेडेंशियल का उपयोग करें।",
                    pa: "ਗਲਤ ਲਾਗਇਨ ਵੇਰਵੇ। ਕਿਰਪਾ ਕਰਕੇ ਉੱਪਰ ਦਿੱਤੇ ਡੈਮੋ ਲਾਗਇਨ ਵਰਤੋ।"
                },
                logoutSuccess: {
                    en: "Logged out successfully!",
                    hi: "सफलतापूर्वक लॉग आउट!",
                    pa: "ਸਫ਼ਲਤਾਪੂਰਵਕ ਲਾਗਆਉਟ!"
                }
            },
            quiz: {
                selectAnswer: {
                    en: "Please select an answer",
                    hi: "कृपया एक उत्तर चुनें",
                    pa: "ਕਿਰਪਾ ਕਰਕੇ ਜਵਾਬ ਚੁਣੋ"
                },
                timeUp: {
                    en: "Time's up! Quiz completed.",
                    hi: "समय समाप्त! क्विज़ पूरा।",
                    pa: "ਸਮਾਂ ਖ਼ਤਮ! ਪ੍ਰਸ਼ਨ-ਉੱਤਰ ਪੂਰਾ।"
                },
                goodScore: {
                    en: "Excellent performance!",
                    hi: "उत्कृष्ट प्रदर्शन!",
                    pa: "ਸ਼ਾਨਦਾਰ ਪ੍ਰਦਰਸ਼ਨ!"
                }
            },
            achievements: {
                lessonComplete: {
                    en: "Lesson completed! +10 points earned",
                    hi: "पाठ पूरा! +10 अंक अर्जित",
                    pa: "ਪਾਠ ਪੂਰਾ! +10 ਅੰਕ ਕਮਾਏ"
                },
                newBadge: {
                    en: "New badge unlocked!",
                    hi: "नया बैज अनलॉक!",
                    pa: "ਨਵਾਂ ਬੈਜ ਅਨਲਾਕ!"
                },
                backOnline: {
                    en: "Back online! Data synced successfully",
                    hi: "वापस ऑनलाइन! डेटा सफलतापूर्वक सिंक हुआ",
                    pa: "ਵਾਪਸ ਔਨਲਾਈਨ! ਡੇਟਾ ਸਫ਼ਲਤਾਪੂਰਵਕ ਸਿੰਕ ਹੋਇਆ"
                }
            },
            performance: {
                excellent: {en: "Excellent", hi: "उत्कृष्ट", pa: "ਸ਼ਾਨਦਾਰ"},
                good: {en: "Good", hi: "अच्छा", pa: "ਚੰਗਾ"},
                needsImprovement: {en: "Needs Improvement", hi: "सुधार की आवश्यकता", pa: "ਸੁਧਾਰ ਦੀ ਲੋੜ"}
            }
        };
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupApplication());
        } else {
            this.setupApplication();
        }
    }

    setupApplication() {
        console.log('Setting up trilingual learning platform...');
        this.setupEventListeners();
        this.updateOnlineStatus();
        this.loadStoredData();
        this.updateLanguage();
        this.showPage('landingPage');
        
        // Simulate connectivity changes
        setInterval(() => {
            if (Math.random() > 0.98) {
                this.isOnline = !this.isOnline;
                this.updateOnlineStatus();
            }
        }, 10000);
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Language toggle button
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Language toggle clicked');
                this.cycleThroughLanguages();
            });
        }

        // Language selection buttons - Set up with delay to ensure DOM is ready
        setTimeout(() => {
            const languageOptions = document.querySelectorAll('.language-option');
            console.log('Found language options:', languageOptions.length);
            languageOptions.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log('Language selected:', button.dataset.lang);
                    this.setLanguage(button.dataset.lang);
                });
            });
        }, 100);

        // Role selection - Set up with delay to ensure DOM is ready
        setTimeout(() => {
            const roleCards = document.querySelectorAll('.role-card');
            console.log('Found role cards:', roleCards.length);
            roleCards.forEach(card => {
                card.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log('Role selected:', card.dataset.role);
                    this.selectRole(card.dataset.role);
                });
            });
        }, 100);

        // Login form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                console.log('Login form submitted');
                this.handleLogin();
            });
        }

        // Navigation buttons
        this.setupNavigationListeners();
        
        // Quiz and lesson actions
        this.setupLessonListeners();

        // Back to landing
        const backToLanding = document.getElementById('backToLanding');
        if (backToLanding) {
            backToLanding.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Back to landing clicked');
                this.showPage('landingPage');
            });
        }

        // Online/offline events
        window.addEventListener('online', () => this.setOnlineStatus(true));
        window.addEventListener('offline', () => this.setOnlineStatus(false));
    }

    setupNavigationListeners() {
        const logoutButtons = ['studentLogout', 'teacherLogout', 'parentLogout'];
        logoutButtons.forEach(id => {
            const button = document.getElementById(id);
            if (button) {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.logout();
                });
            }
        });

        const navButtons = [
            { id: 'backToDashboard', action: () => this.showStudentDashboard() },
            { id: 'backToCourses', action: () => this.showStudentDashboard() }
        ];

        navButtons.forEach(({ id, action }) => {
            const button = document.getElementById(id);
            if (button) {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    action();
                });
            }
        });
    }

    setupLessonListeners() {
        const actionButtons = [
            { id: 'startQuiz', action: () => this.startQuiz() },
            { id: 'submitAnswer', action: () => this.submitAnswer() },
            { id: 'retakeQuiz', action: () => this.retakeQuiz() },
            { id: 'markComplete', action: () => this.markLessonComplete() }
        ];

        actionButtons.forEach(({ id, action }) => {
            const button = document.getElementById(id);
            if (button) {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    action();
                });
            }
        });
    }

    setLanguage(lang) {
        console.log('Setting language to:', lang);
        this.currentLanguage = lang;
        this.updateLanguageSelection();
        this.updateLanguage();
        this.saveToStorage();
    }

    cycleThroughLanguages() {
        const languages = ['en', 'hi', 'pa'];
        const currentIndex = languages.indexOf(this.currentLanguage);
        const nextIndex = (currentIndex + 1) % languages.length;
        console.log('Cycling from', this.currentLanguage, 'to', languages[nextIndex]);
        this.setLanguage(languages[nextIndex]);
    }

    updateLanguageSelection() {
        document.querySelectorAll('.language-option').forEach(option => {
            option.classList.toggle('active', option.dataset.lang === this.currentLanguage);
        });
    }

    updateLanguage() {
        console.log('Updating UI language to:', this.currentLanguage);
        
        // Update language toggle button
        const langButton = document.getElementById('langToggle');
        if (langButton) {
            const langNames = {
                en: '🌐 हिंदी / ਪੰਜਾਬੀ',
                hi: '🌐 English / ਪੰਜਾਬੀ', 
                pa: '🌐 English / हिंदी'
            };
            langButton.textContent = langNames[this.currentLanguage];
        }
        
        // Update all translatable elements
        document.querySelectorAll('[data-en][data-hi][data-pa]').forEach(element => {
            const text = element.dataset[this.currentLanguage];
            if (text) {
                element.textContent = text;
            }
        });

        // Update language selection
        this.updateLanguageSelection();

        // Refresh current page content
        this.refreshCurrentPageContent();
    }

    refreshCurrentPageContent() {
        switch (this.currentPage) {
            case 'studentDashboard':
                this.renderCourses();
                this.renderBadges();
                this.renderLeaderboard();
                break;
            case 'teacherDashboard':
                this.renderStudentsTable();
                break;
            case 'parentDashboard':
                this.renderSubjectProgress();
                this.renderChildBadges();
                break;
        }
    }

    selectRole(role) {
        console.log('Selecting role:', role);
        this.selectedRole = role;
        this.showPage('loginPage');
    }

    handleLogin() {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        console.log('Login attempt:', username, password);

        // Find user by username and password
        let authenticatedUser = null;
        
        for (const userType of Object.keys(this.appData.users)) {
            const user = this.appData.users[userType].find(u => 
                u.username === username && u.password === password
            );
            if (user) {
                authenticatedUser = { ...user, role: userType.slice(0, -1) }; // Remove 's' from role
                break;
            }
        }

        if (authenticatedUser) {
            console.log('Authentication successful for:', authenticatedUser.role);
            this.currentUser = authenticatedUser;
            
            // Set language preference if available
            if (authenticatedUser.preferredLanguage) {
                this.setLanguage(authenticatedUser.preferredLanguage);
            }
            
            // Redirect to appropriate dashboard
            switch (authenticatedUser.role) {
                case 'student':
                    this.showStudentDashboard();
                    break;
                case 'teacher':
                    this.showTeacherDashboard();
                    break;
                case 'parent':
                    this.showParentDashboard();
                    break;
            }
            
            this.showAchievementNotification(
                this.translations.auth.loginSuccess[this.currentLanguage],
                this.getLocalizedText(this.currentUser.name)
            );
        } else {
            console.log('Authentication failed');
            alert(this.translations.auth.loginError[this.currentLanguage]);
        }
    }

    logout() {
        this.showAchievementNotification(
            this.translations.auth.logoutSuccess[this.currentLanguage],
            ''
        );
        
        setTimeout(() => {
            this.currentUser = null;
            this.selectedRole = null;
            this.showPage('landingPage');
            
            // Clear form fields
            const username = document.getElementById('username');
            const password = document.getElementById('password');
            if (username) username.value = '';
            if (password) password.value = '';
        }, 1000);
    }

    showPage(pageId) {
        console.log('Showing page:', pageId);
        
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Show target page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            this.currentPage = pageId;
        }
    }

    showStudentDashboard() {
        this.showPage('studentDashboard');
        this.updateStudentStats();
        this.renderCourses();
        this.renderBadges();
        this.renderLeaderboard();
        this.updateUserName('studentName');
    }

    updateStudentStats() {
        if (!this.currentUser || this.currentUser.role !== 'student') return;
        
        const pointsEl = document.getElementById('studentPoints');
        const levelEl = document.getElementById('studentLevel');
        const streakEl = document.getElementById('studentStreak');
        
        if (pointsEl) pointsEl.textContent = this.currentUser.points;
        if (levelEl) levelEl.textContent = `Level ${this.currentUser.level}`;
        if (streakEl) {
            streakEl.textContent = `${this.currentUser.streak} ${this.translations.common.days[this.currentLanguage]}`;
        }
    }

    updateUserName(elementId) {
        const nameEl = document.getElementById(elementId);
        if (nameEl && this.currentUser) {
            nameEl.textContent = this.getLocalizedText(this.currentUser.name);
        }
    }

    getLocalizedText(textObj) {
        if (typeof textObj === 'string') return textObj;
        return textObj[this.currentLanguage] || textObj.en || '';
    }

    renderCourses() {
        const coursesList = document.getElementById('coursesList');
        if (!coursesList) return;

        coursesList.innerHTML = this.appData.courses.map(course => {
            const title = this.getLocalizedText(course.title);
            const progressPercent = Math.round((course.completedLessons / course.totalLessons) * 100);
            
            return `
                <div class="course-card" data-course-id="${course.id}">
                    <div class="course-header">
                        <h3 class="course-title">${title}</h3>
                        <div class="course-progress">
                            <div class="progress-text">${progressPercent}%</div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progressPercent}%"></div>
                    </div>
                    <div class="course-lessons">
                        ${course.lessons.map(lesson => {
                            const lessonTitle = this.getLocalizedText(lesson.title);
                            return `
                                <div class="lesson-item ${lesson.completed ? 'completed' : ''}" data-lesson-id="${lesson.id}" data-course-id="${course.id}">
                                    <div class="lesson-info">
                                        <span class="lesson-status">${lesson.completed ? '✅' : '⭕'}</span>
                                        <div>
                                            <div class="lesson-title">${lessonTitle}</div>
                                            <div class="lesson-duration">${lesson.duration}</div>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }).join('');

        // Add click listeners for lessons
        coursesList.querySelectorAll('.lesson-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.openLesson(item.dataset.lessonId, item.dataset.courseId);
            });
        });
    }

    renderBadges() {
        const badgesList = document.getElementById('badgesList');
        if (!badgesList || !this.currentUser) return;

        const userBadges = this.currentUser.badges || [];
        badgesList.innerHTML = userBadges.map(badgeId => {
            const badge = this.appData.badges.find(b => b.id === badgeId);
            if (!badge) return '';
            
            const name = this.getLocalizedText(badge.name);
            const description = this.getLocalizedText(badge.description);
            
            return `
                <div class="badge-item">
                    <div class="badge-icon">${badge.icon}</div>
                    <div class="badge-info">
                        <h4>${name}</h4>
                        <p>${description}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderLeaderboard() {
        const leaderboard = document.getElementById('leaderboard');
        if (!leaderboard) return;

        const sortedStudents = [...this.appData.users.students].sort((a, b) => b.points - a.points);
        
        leaderboard.innerHTML = sortedStudents.map((student, index) => {
            const isCurrentUser = this.currentUser && student.id === this.currentUser.id;
            const studentName = this.getLocalizedText(student.name);
            
            return `
                <div class="leaderboard-item ${isCurrentUser ? 'current-user' : ''}">
                    <div class="leaderboard-rank">${index + 1}</div>
                    <div class="leaderboard-name">${studentName}</div>
                    <div class="leaderboard-points">${student.points}</div>
                </div>
            `;
        }).join('');
    }

    openLesson(lessonId, courseId) {
        this.currentLesson = lessonId;
        this.currentCourse = courseId;
        
        const lesson = this.findLessonById(lessonId);
        if (lesson) {
            const title = this.getLocalizedText(lesson.title);
            const titleEl = document.getElementById('lessonTitle');
            if (titleEl) {
                titleEl.textContent = title;
            }
            this.showPage('lessonPlayer');
        }
    }

    findLessonById(lessonId) {
        for (const course of this.appData.courses) {
            const lesson = course.lessons.find(l => l.id === lessonId);
            if (lesson) return lesson;
        }
        return null;
    }

    markLessonComplete() {
        const lesson = this.findLessonById(this.currentLesson);
        if (lesson && !lesson.completed) {
            lesson.completed = true;
            this.awardPoints(10);
            this.showAchievementNotification(
                this.translations.achievements.lessonComplete[this.currentLanguage],
                ''
            );
            setTimeout(() => this.showStudentDashboard(), 2000);
        }
    }

    startQuiz() {
        // Find quiz for current course
        const quiz = this.appData.quizzes.find(q => q.courseId === this.currentCourse) || this.appData.quizzes[0];
        
        this.quizState = {
            currentQuiz: quiz,
            currentQuestion: 0,
            answers: [],
            score: 0,
            startTime: Date.now(),
            timer: null
        };
        
        this.showPage('quizInterface');
        this.renderQuizQuestion();
        this.startQuizTimer();
    }

    renderQuizQuestion() {
        const quiz = this.quizState.currentQuiz;
        const question = quiz.questions[this.quizState.currentQuestion];
        
        const title = this.getLocalizedText(quiz.title);
        const questionText = this.getLocalizedText(question.question);
        const options = this.getLocalizedText(question.options);
        
        // Update UI elements
        const elements = {
            quizTitle: document.getElementById('quizTitle'),
            currentQuestion: document.getElementById('currentQuestion'),
            totalQuestions: document.getElementById('totalQuestions'),
            questionText: document.getElementById('questionText'),
            quizProgressFill: document.getElementById('quizProgressFill')
        };
        
        if (elements.quizTitle) elements.quizTitle.textContent = title;
        if (elements.currentQuestion) elements.currentQuestion.textContent = this.quizState.currentQuestion + 1;
        if (elements.totalQuestions) elements.totalQuestions.textContent = quiz.questions.length;
        if (elements.questionText) elements.questionText.textContent = questionText;
        
        const progressPercent = ((this.quizState.currentQuestion + 1) / quiz.questions.length) * 100;
        if (elements.quizProgressFill) elements.quizProgressFill.style.width = `${progressPercent}%`;
        
        // Render options
        const optionsList = document.getElementById('optionsList');
        if (optionsList) {
            optionsList.innerHTML = options.map((option, index) => `
                <div class="option-item" data-option="${index}">
                    ${option}
                </div>
            `).join('');
            
            // Add click listeners
            optionsList.querySelectorAll('.option-item').forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.selectOption(item);
                });
            });
        }
        
        this.selectedAnswer = undefined;
    }

    selectOption(selectedElement) {
        document.querySelectorAll('.option-item').forEach(item => item.classList.remove('selected'));
        selectedElement.classList.add('selected');
        this.selectedAnswer = parseInt(selectedElement.dataset.option);
    }

    submitAnswer() {
        if (this.selectedAnswer === undefined) {
            alert(this.translations.quiz.selectAnswer[this.currentLanguage]);
            return;
        }

        const question = this.quizState.currentQuiz.questions[this.quizState.currentQuestion];
        const isCorrect = this.selectedAnswer === question.correct;
        
        // Show feedback
        document.querySelectorAll('.option-item').forEach((item, index) => {
            if (index === question.correct) {
                item.classList.add('correct');
            } else if (index === this.selectedAnswer && !isCorrect) {
                item.classList.add('incorrect');
            }
        });

        if (isCorrect) {
            this.quizState.score++;
        }

        this.quizState.answers.push({
            question: this.quizState.currentQuestion,
            selected: this.selectedAnswer,
            correct: isCorrect
        });

        setTimeout(() => {
            this.quizState.currentQuestion++;
            this.selectedAnswer = undefined;
            
            if (this.quizState.currentQuestion >= this.quizState.currentQuiz.questions.length) {
                this.finishQuiz();
            } else {
                this.renderQuizQuestion();
            }
        }, 1500);
    }

    finishQuiz() {
        if (this.quizState.timer) {
            clearInterval(this.quizState.timer);
        }

        const totalQuestions = this.quizState.currentQuiz.questions.length;
        const scorePercent = Math.round((this.quizState.score / totalQuestions) * 100);
        const pointsEarned = this.quizState.score * 5;
        
        const finalScoreEl = document.getElementById('finalScore');
        const pointsEarnedEl = document.getElementById('pointsEarned');
        
        if (finalScoreEl) finalScoreEl.textContent = `${scorePercent}%`;
        if (pointsEarnedEl) pointsEarnedEl.textContent = `+${pointsEarned}`;
        
        // Show results
        const quizCard = document.querySelector('.quiz-card');
        const quizResults = document.getElementById('quizResults');
        
        if (quizCard) quizCard.classList.add('hidden');
        if (quizResults) quizResults.classList.remove('hidden');
        
        this.awardPoints(pointsEarned);
        
        if (scorePercent >= 80) {
            this.checkForNewBadges();
            setTimeout(() => {
                this.showAchievementNotification(
                    this.translations.quiz.goodScore[this.currentLanguage],
                    ''
                );
            }, 1000);
        }
    }

    retakeQuiz() {
        this.startQuiz();
        const quizCard = document.querySelector('.quiz-card');
        const quizResults = document.getElementById('quizResults');
        
        if (quizCard) quizCard.classList.remove('hidden');
        if (quizResults) quizResults.classList.add('hidden');
    }

    startQuizTimer() {
        let timeLeft = 300; // 5 minutes
        const timer = document.getElementById('timer');
        
        this.quizState.timer = setInterval(() => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            if (timer) {
                timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
            
            timeLeft--;
            
            if (timeLeft < 0) {
                clearInterval(this.quizState.timer);
                this.showAchievementNotification(
                    this.translations.quiz.timeUp[this.currentLanguage],
                    ''
                );
                this.finishQuiz();
            }
        }, 1000);
    }

    awardPoints(points) {
        if (this.currentUser && this.currentUser.role === 'student') {
            this.currentUser.points += points;
            this.updateStudentStats();
            this.saveToStorage();
        }
    }

    checkForNewBadges() {
        if (!this.currentUser || this.currentUser.role !== 'student') return;
        
        const userBadges = this.currentUser.badges || [];
        let newBadges = [];
        
        // Check for Star Student badge (500+ points)
        if (this.currentUser.points >= 500 && !userBadges.includes('star_student')) {
            newBadges.push('star_student');
        }
        
        if (newBadges.length > 0) {
            this.currentUser.badges = [...userBadges, ...newBadges];
            
            newBadges.forEach(badgeId => {
                const badge = this.appData.badges.find(b => b.id === badgeId);
                if (badge) {
                    const badgeName = this.getLocalizedText(badge.name);
                    setTimeout(() => {
                        this.showAchievementNotification(
                            this.translations.achievements.newBadge[this.currentLanguage],
                            `${badge.icon} ${badgeName}`
                        );
                    }, 2000);
                }
            });
            
            this.renderBadges();
            this.saveToStorage();
        }
    }

    showAchievementNotification(title, message) {
        const notification = document.getElementById('achievementNotification');
        const messageElement = document.getElementById('achievementMessage');
        
        if (messageElement) messageElement.textContent = message;
        if (notification) {
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }
    }

    showTeacherDashboard() {
        this.showPage('teacherDashboard');
        this.updateTeacherStats();
        this.renderStudentsTable();
        this.updateUserName('teacherName');
        setTimeout(() => this.renderPerformanceChart(), 100);
    }

    updateTeacherStats() {
        if (!this.currentUser || this.currentUser.role !== 'teacher') return;
        
        const studentsEl = document.getElementById('teacherStudents');
        const classesEl = document.getElementById('teacherClasses');
        
        if (studentsEl) studentsEl.textContent = this.currentUser.students;
        if (classesEl) classesEl.textContent = this.currentUser.classes.length;
    }

    renderStudentsTable() {
        const studentsList = document.getElementById('studentsList');
        if (!studentsList) return;

        const headerLabels = {
            en: ['Student Name', 'Class', 'Points', 'Progress', 'Performance'],
            hi: ['छात्र का नाम', 'कक्षा', 'अंक', 'प्रगति', 'प्रदर्शन'],
            pa: ['ਵਿਦਿਆਰਥੀ ਦਾ ਨਾਮ', 'ਕਲਾਸ', 'ਅੰਕ', 'ਤਰੱਕੀ', 'ਪ੍ਰਦਰਸ਼ਨ']
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
                const progressPercent = Math.round((student.completedLessons / student.totalLessons) * 100);
                let performanceClass = 'performance-excellent';
                let performanceText = this.translations.performance.excellent[this.currentLanguage];
                
                if (progressPercent < 70) {
                    performanceClass = 'performance-good';
                    performanceText = this.translations.performance.good[this.currentLanguage];
                }
                if (progressPercent < 50) {
                    performanceClass = 'performance-needs-improvement';
                    performanceText = this.translations.performance.needsImprovement[this.currentLanguage];
                }
                
                const studentName = this.getLocalizedText(student.name);
                
                return `
                    <div class="student-row">
                        <div class="student-name">${studentName}</div>
                        <div class="student-class">${student.class}</div>
                        <div>${student.points}</div>
                        <div>${progressPercent}%</div>
                        <div class="performance-indicator ${performanceClass}">${performanceText}</div>
                    </div>
                `;
            }).join('')}
        `;
    }

    renderPerformanceChart() {
        const ctx = document.getElementById('performanceChart');
        if (!ctx) return;

        const data = this.appData.performanceData.weekly;
        const labels = data.map(d => this.getLocalizedText(d.week));
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: this.currentLanguage === 'en' ? 'Average Score' : 
                           this.currentLanguage === 'hi' ? 'औसत स्कोर' : 'ਔਸਤ ਸਕੋਰ',
                    data: data.map(d => d.score),
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    fill: true,
                    tension: 0.4
                }, {
                    label: this.currentLanguage === 'en' ? 'Lessons Completed' :
                           this.currentLanguage === 'hi' ? 'पूरे किए गए पाठ' : 'ਪੂਰੇ ਕੀਤੇ ਪਾਠ',
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

    showParentDashboard() {
        this.showPage('parentDashboard');
        this.updateChildInfo();
        this.renderSubjectProgress();
        this.renderChildBadges();
        this.updateUserName('parentName');
        setTimeout(() => this.renderWeeklyChart(), 100);
    }

    updateChildInfo() {
        const childNameEl = document.getElementById('childName');
        const badgesCountEl = document.getElementById('childBadgesCount');
        
        // Get child data (assuming first student for demo)
        const child = this.appData.users.students[0];
        
        if (childNameEl) {
            const childName = this.getLocalizedText(child.name);
            const classInfo = this.currentLanguage === 'pa' ? 'ਕਲਾਸ' : 
                             this.currentLanguage === 'hi' ? 'कक्षा' : 'Grade';
            childNameEl.textContent = `${childName} - ${classInfo} ${child.class}`;
        }
        
        if (badgesCountEl) {
            badgesCountEl.textContent = child.badges.length;
        }
    }

    renderSubjectProgress() {
        const subjectProgress = document.getElementById('subjectProgress');
        if (!subjectProgress) return;

        const scoreLabel = this.currentLanguage === 'en' ? 'Score' :
                          this.currentLanguage === 'hi' ? 'स्कोर' : 'ਸਕੋਰ';

        subjectProgress.innerHTML = this.appData.performanceData.subjects.map(subject => {
            const subjectName = this.getLocalizedText(subject.subject);
            
            return `
                <div class="subject-item">
                    <div class="subject-info">
                        <div class="subject-name">${subjectName}</div>
                        <div class="subject-score">${scoreLabel}: ${subject.score}%</div>
                    </div>
                    <div class="subject-progress-bar">
                        <div class="subject-progress-fill" style="width: ${subject.progress}%"></div>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderWeeklyChart() {
        const ctx = document.getElementById('weeklyChart');
        if (!ctx) return;

        const data = this.appData.performanceData.weekly;
        const labels = data.map(d => this.getLocalizedText(d.week));
        
        const chartLabel = this.currentLanguage === 'en' ? 'Weekly Score' :
                          this.currentLanguage === 'hi' ? 'साप्ताहिक स्कोर' : 'ਹਫ਼ਤਾਵਾਰੀ ਸਕੋਰ';
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: chartLabel,
                    data: data.map(d => d.score),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F'],
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    renderChildBadges() {
        const childBadges = document.getElementById('childBadges');
        if (!childBadges) return;

        const child = this.appData.users.students[0];
        const userBadges = child.badges || [];
        
        childBadges.innerHTML = userBadges.map(badgeId => {
            const badge = this.appData.badges.find(b => b.id === badgeId);
            if (!badge) return '';
            
            const name = this.getLocalizedText(badge.name);
            const description = this.getLocalizedText(badge.description);
            
            return `
                <div class="badge-item">
                    <div class="badge-icon">${badge.icon}</div>
                    <div class="badge-info">
                        <h4>${name}</h4>
                        <p>${description}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    updateOnlineStatus() {
        const indicator = document.getElementById('offlineIndicator');
        const status = document.getElementById('offlineStatus');
        
        if (indicator && status) {
            if (this.isOnline) {
                indicator.classList.remove('offline');
                const onlineText = this.currentLanguage === 'en' ? '🌐 Online' :
                                 this.currentLanguage === 'hi' ? '🌐 ऑनलाइन' : '🌐 ਔਨਲਾਈਨ';
                status.textContent = onlineText;
            } else {
                indicator.classList.add('offline');
                const offlineText = this.currentLanguage === 'en' ? '📱 Offline' :
                                   this.currentLanguage === 'hi' ? '📱 ऑफलाइन' : '📱 ਔਫਲਾਈਨ';
                status.textContent = offlineText;
            }
        }
    }

    setOnlineStatus(status) {
        this.isOnline = status;
        this.updateOnlineStatus();
        
        if (status) {
            this.showAchievementNotification(
                this.translations.achievements.backOnline[this.currentLanguage],
                ''
            );
        }
    }

    saveToStorage() {
        try {
            const dataToSave = {
                currentLanguage: this.currentLanguage,
                appData: this.appData,
                lastSaved: Date.now()
            };
            localStorage.setItem('trilingualLearningData', JSON.stringify(dataToSave));
        } catch (e) {
            console.log('Storage not available in sandbox environment');
        }
    }

    loadStoredData() {
        try {
            const stored = localStorage.getItem('trilingualLearningData');
            if (stored) {
                const data = JSON.parse(stored);
                if (data.currentLanguage) {
                    this.currentLanguage = data.currentLanguage;
                }
                // Merge any saved progress data
                if (data.appData) {
                    this.mergeStoredData(data.appData);
                }
            }
        } catch (e) {
            console.log('Could not load stored data');
        }
    }

    mergeStoredData(storedData) {
        // Merge user progress, points, badges, etc. from stored data
        if (storedData.users) {
            ['students', 'teachers', 'parents'].forEach(userType => {
                if (storedData.users[userType]) {
                    storedData.users[userType].forEach(storedUser => {
                        const currentUser = this.appData.users[userType].find(u => u.id === storedUser.id);
                        if (currentUser) {
                            // Merge progress data
                            currentUser.points = Math.max(currentUser.points, storedUser.points || 0);
                            currentUser.badges = [...new Set([...currentUser.badges, ...(storedUser.badges || [])])];
                            currentUser.completedLessons = Math.max(currentUser.completedLessons, storedUser.completedLessons || 0);
                        }
                    });
                }
            });
        }

        // Merge course completion data
        if (storedData.courses) {
            storedData.courses.forEach(storedCourse => {
                const currentCourse = this.appData.courses.find(c => c.id === storedCourse.id);
                if (currentCourse && storedCourse.lessons) {
                    storedCourse.lessons.forEach(storedLesson => {
                        const currentLesson = currentCourse.lessons.find(l => l.id === storedLesson.id);
                        if (currentLesson && storedLesson.completed) {
                            currentLesson.completed = true;
                        }
                    });
                }
            });
        }
    }
}

// Initialize the application
console.log('Initializing Trilingual Learning Platform...');
document.addEventListener('DOMContentLoaded', () => {
    window.trilingualPlatform = new TrilingualLearningPlatform();
});