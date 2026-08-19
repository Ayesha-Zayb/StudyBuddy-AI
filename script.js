// ==========================================
// STUDYBUDDY AI
// Dynamic Learning Engine
// ==========================================

let currentTopic = "";
let currentQuestion = 0;
let score = 0;
let currentCard = 0;

let studyStats = {

    sessions: 0,
    quizzes: 0,
    totalScore: 0,
    flashcards: 0

};


// ==========================================
// TOPIC DATABASE
// ==========================================

const topicLibrary = {

    "machine learning": {

        overview:
            "Machine Learning is a branch of artificial intelligence that enables computers to learn patterns from data and make predictions or decisions without being explicitly programmed for every task.",

        points: [
            "Machine Learning learns patterns from data.",
            "Supervised learning uses labeled data.",
            "Unsupervised learning discovers hidden patterns.",
            "Models are trained using algorithms.",
            "Evaluation measures how well a model performs."
        ],

        cards: [

            {
                question:
                    "What is Machine Learning?",

                answer:
                    "Machine Learning is a field of AI where computers learn patterns from data to make predictions or decisions."
            },

            {
                question:
                    "What is supervised learning?",

                answer:
                    "Supervised learning trains a model using labeled examples where the desired output is already known."
            },

            {
                question:
                    "What is unsupervised learning?",

                answer:
                    "Unsupervised learning finds patterns or structures in data without predefined labels."
            }

        ],

        quiz: [

            {
                question:
                    "What does Machine Learning primarily learn from?",

                options: [
                    "Data",
                    "Electricity",
                    "HTML",
                    "Computer screens"
                ],

                answer: 0
            },

            {
                question:
                    "Which learning type uses labeled data?",

                options: [
                    "Supervised learning",
                    "Unsupervised learning",
                    "Random learning",
                    "Manual learning"
                ],

                answer: 0
            },

            {
                question:
                    "What is the purpose of model evaluation?",

                options: [
                    "Measure model performance",
                    "Delete the dataset",
                    "Create hardware",
                    "Change the operating system"
                ],

                answer: 0
            }

        ]

    },


    "neural networks": {

        overview:
            "Neural Networks are computational models inspired by the human brain. They use interconnected layers of artificial neurons to learn patterns and relationships within data.",

        points: [
            "Neural networks contain interconnected neurons.",
            "Layers process information step by step.",
            "Weights determine the importance of inputs.",
            "Activation functions introduce non-linearity.",
            "Training adjusts weights to reduce error."
        ],

        cards: [

            {
                question:
                    "What is a neural network?",

                answer:
                    "A neural network is a computational model made of interconnected artificial neurons that learns patterns from data."
            },

            {
                question:
                    "What is a neuron?",

                answer:
                    "A neuron is a basic computational unit that receives inputs, applies weights and produces an output."
            },

            {
                question:
                    "Why are activation functions used?",

                answer:
                    "Activation functions introduce non-linearity, allowing neural networks to learn complex relationships."
            }

        ],

        quiz: [

            {
                question:
                    "Neural networks are inspired by what?",

                options: [
                    "The human brain",
                    "A database",
                    "A web browser",
                    "A keyboard"
                ],

                answer: 0
            },

            {
                question:
                    "What do neural networks adjust during training?",

                options: [
                    "Weights",
                    "Screen size",
                    "File names",
                    "Keyboard keys"
                ],

                answer: 0
            },

            {
                question:
                    "What do activation functions provide?",

                options: [
                    "Non-linearity",
                    "Internet access",
                    "Storage",
                    "Encryption"
                ],

                answer: 0
            }

        ]

    },


    "python": {

        overview:
            "Python is a high-level programming language known for its readable syntax, large ecosystem and applications in areas such as AI, data science, automation and web development.",

        points: [
            "Python has simple and readable syntax.",
            "Variables do not require explicit type declarations.",
            "Functions organize reusable code.",
            "Lists store collections of values.",
            "Python is widely used in AI and data science."
        ],

        cards: [

            {
                question:
                    "What is Python?",

                answer:
                    "Python is a high-level programming language widely used for software development, automation, data science and AI."
            },

            {
                question:
                    "What is a Python function?",

                answer:
                    "A function is a reusable block of code designed to perform a particular task."
            },

            {
                question:
                    "What is a Python list?",

                answer:
                    "A list is an ordered collection that can store multiple values in a single variable."
            }

        ],

        quiz: [

            {
                question:
                    "Python is primarily known for what?",

                options: [
                    "Readable syntax",
                    "Only game development",
                    "Hardware manufacturing",
                    "Operating systems only"
                ],

                answer: 0
            },

            {
                question:
                    "What is used to organize reusable code?",

                options: [
                    "Functions",
                    "Screens",
                    "Folders",
                    "Monitors"
                ],

                answer: 0
            },

            {
                question:
                    "Which structure stores multiple values?",

                options: [
                    "List",
                    "Monitor",
                    "Keyboard",
                    "Browser"
                ],

                answer: 0
            }

        ]

    }

};


// ==========================================
// GENERIC TOPIC GENERATOR
// ==========================================

function createGenericTopic(topic) {

    return {

        overview:
            `${topic} is an important concept that can be understood by breaking it into its fundamental principles, terminology, examples and practical applications.`,

        points: [

            `Understand the basic definition of ${topic}.`,

            `Identify the major concepts related to ${topic}.`,

            `Learn important terminology used with ${topic}.`,

            `Study practical examples of ${topic}.`,

            `Test your understanding through active recall.`

        ],

        cards: [

            {
                question:
                    `What is ${topic}?`,

                answer:
                    `${topic} can be understood by studying its fundamental concepts, terminology, examples and practical applications.`
            },

            {
                question:
                    `Why is ${topic} important?`,

                answer:
                    `${topic} is important because understanding its principles allows learners to apply the concept effectively in real-world situations.`
            },

            {
                question:
                    `How should you study ${topic}?`,

                answer:
                    `Start with the fundamentals, study examples, practice recalling key ideas and review areas where your understanding is weak.`
            }

        ],

        quiz: [

            {
                question:
                    `What should you learn first about ${topic}?`,

                options: [
                    "Its fundamental concepts",
                    "Only advanced details",
                    "Nothing",
                    "Only its history"
                ],

                answer: 0
            },

            {
                question:
                    `What improves understanding of ${topic}?`,

                options: [
                    "Practice and active recall",
                    "Avoiding examples",
                    "Never reviewing",
                    "Memorizing without understanding"
                ],

                answer: 0
            },

            {
                question:
                    `What is useful when studying ${topic}?`,

                options: [
                    "Examples and practice",
                    "Ignoring concepts",
                    "Skipping revision",
                    "Avoiding questions"
                ],

                answer: 0
            }

        ]

    };

}


// ==========================================
// GET TOPIC DATA
// ==========================================

function getTopicData(topic) {

    const key =
        topic.toLowerCase().trim();


    if (topicLibrary[key]) {

        return topicLibrary[key];

    }


    return createGenericTopic(topic);

}


// ==========================================
// NAVIGATION
// ==========================================

function scrollToStudy() {

    const section =
        document.getElementById("study");


    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ==========================================
// GENERATE STUDY SESSION
// ==========================================

function generateStudySession() {

    const topicInput =
        document.getElementById("topic");

    const subject =
        document.getElementById("subject").value;

    const difficulty =
        document.getElementById("difficulty").value;

    const result =
        document.getElementById("studyResult");

    const topic =
        topicInput.value.trim();


    if (!topic) {

        topicInput.focus();

        return;

    }


    currentTopic = topic;

    studyStats.sessions++;


    updateDashboard();


    result.innerHTML = `

        <div class="result-placeholder">

            <div class="placeholder-mark">
                S
            </div>

            <div class="placeholder-line large"></div>

            <div class="placeholder-line medium"></div>

            <div class="placeholder-line small"></div>

            <h3>
                Preparing your study session
            </h3>

            <p>
                Analyzing ${escapeHTML(topic)}
                and preparing personalized
                learning material...
            </p>

        </div>

    `;


    setTimeout(() => {

        showGeneratedSession(
            subject,
            difficulty
        );

    }, 900);

}


// ==========================================
// SHOW SESSION
// ==========================================

function showGeneratedSession(
    subject,
    difficulty
) {

    const result =
        document.getElementById("studyResult");


    result.innerHTML = `

        <div class="generated-content">

            <div class="study-tabs">

                <button
                    class="study-tab active"
                    onclick="showNotes()"
                >
                    Notes
                </button>

                <button
                    class="study-tab"
                    onclick="showFlashcards()"
                >
                    Flashcards
                </button>

                <button
                    class="study-tab"
                    onclick="startQuiz()"
                >
                    Quiz
                </button>

            </div>


            <div id="contentArea"></div>

        </div>

    `;


    showNotes();

}


// ==========================================
// TAB STATE
// ==========================================

function setActiveTab(index) {

    const tabs =
        document.querySelectorAll(
            ".study-tab"
        );


    tabs.forEach((tab, i) => {

        tab.classList.toggle(
            "active",
            i === index
        );

    });

}


// ==========================================
// NOTES
// ==========================================

function showNotes() {

    setActiveTab(0);


    const area =
        document.getElementById("contentArea");


    const data =
        getTopicData(currentTopic);


    area.innerHTML = `

        <span class="content-label">
            STUDY NOTES
        </span>

        <h3>
            ${escapeHTML(currentTopic)}
        </h3>

        <p class="content-description">
            AI-generated study material
            for focused revision.
        </p>


        <div class="note-box">

            <h4>
                Overview
            </h4>

            <p>
                ${data.overview}
            </p>


            <div class="note-divider"></div>


            <h4>
                Key Points
            </h4>

            <p>
                ${data.points
                    .map(
                        point =>
                            `• ${point}`
                    )
                    .join("<br>")
                }
            </p>

        </div>

    `;

}


// ==========================================
// FLASHCARDS
// ==========================================

function showFlashcards() {

    setActiveTab(1);

    currentCard = 0;

    renderFlashcard();

}


function renderFlashcard() {

    const area =
        document.getElementById("contentArea");


    const data =
        getTopicData(currentTopic);


    const card =
        data.cards[currentCard];


    area.innerHTML = `

        <div class="flashcard-section">

            <span class="content-label">
                ACTIVE RECALL
            </span>

            <h3>
                Flashcards
            </h3>

            <p class="card-counter">
                Card ${currentCard + 1}
                of ${data.cards.length}
            </p>


            <div
                class="flashcard"
                onclick="flipCard()"
            >

                <div class="flashcard-inner">

                    <div class="flashcard-front">

                        <span>
                            QUESTION
                        </span>

                        <h4>
                            ${card.question}
                        </h4>

                        <small>
                            Click to reveal the answer
                        </small>

                    </div>


                    <div class="flashcard-back">

                        <span>
                            ANSWER
                        </span>

                        <h4>
                            ${card.answer}
                        </h4>

                    </div>

                </div>

            </div>


            <div class="flashcard-controls">

                <button
                    onclick="
                        event.stopPropagation();
                        previousCard();
                    "
                >
                    Previous
                </button>

                <button
                    onclick="
                        event.stopPropagation();
                        nextCard();
                    "
                >
                    Next
                </button>

            </div>

        </div>

    `;

}


// ==========================================
// FLIP CARD
// ==========================================

function flipCard() {

    const card =
        document.querySelector(".flashcard");


    if (card) {

        card.classList.toggle(
            "flipped"
        );

    }

}


// ==========================================
// NEXT CARD
// ==========================================

function nextCard() {

    const data =
        getTopicData(currentTopic);


    studyStats.flashcards++;


    updateDashboard();


    currentCard++;


    if (
        currentCard >=
        data.cards.length
    ) {

        currentCard = 0;

    }


    renderFlashcard();

}


// ==========================================
// PREVIOUS CARD
// ==========================================

function previousCard() {

    const data =
        getTopicData(currentTopic);


    studyStats.flashcards++;


    updateDashboard();


    currentCard--;


    if (currentCard < 0) {

        currentCard =
            data.cards.length - 1;

    }


    renderFlashcard();

}


// ==========================================
// QUIZ
// ==========================================

function startQuiz() {

    setActiveTab(2);


    currentQuestion = 0;

    score = 0;


    renderQuestion();

}


function renderQuestion() {

    const area =
        document.getElementById("contentArea");


    const data =
        getTopicData(currentTopic);


    const question =
        data.quiz[currentQuestion];


    const progress =
        (
            currentQuestion /
            data.quiz.length
        ) * 100;


    area.innerHTML = `

        <div class="quiz-header">

            <div>

                <span>
                    QUIZ MODE
                </span>

                <h3>
                    Test Your Knowledge
                </h3>

            </div>

            <strong>
                ${currentQuestion + 1}
                /
                ${data.quiz.length}
            </strong>

        </div>


        <div class="progress-bar">

            <div
                style="width:${progress}%"
            ></div>

        </div>


        <div class="note-box">

            <h4>
                ${question.question}
            </h4>


            <div class="quiz-options">

                ${question.options
                    .map(
                        (option, index) => `

                            <button
                                onclick="
                                    answerQuestion(${index})
                                "
                            >
                                ${String.fromCharCode(
                                    65 + index
                                )}.
                                ${option}

                            </button>

                        `
                    )
                    .join("")
                }

            </div>

        </div>

    `;

}


// ==========================================
// ANSWER QUESTION
// ==========================================

function answerQuestion(selected) {

    const data =
        getTopicData(currentTopic);


    const question =
        data.quiz[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".quiz-options button"
        );


    buttons.forEach(button => {

        button.disabled = true;

    });


    if (
        selected ===
        question.answer
    ) {

        score++;


        buttons[selected]
            .classList.add("correct");

    } else {

        buttons[selected]
            .classList.add("wrong");


        buttons[question.answer]
            .classList.add("correct");

    }


    setTimeout(() => {

        currentQuestion++;


        if (
            currentQuestion <
            data.quiz.length
        ) {

            renderQuestion();

        } else {

            showQuizResult();

        }

    }, 700);

}


// ==========================================
// QUIZ RESULT
// ==========================================

function showQuizResult() {

    const area =
        document.getElementById("contentArea");


    const data =
        getTopicData(currentTopic);


    const percentage =
        Math.round(
            (
                score /
                data.quiz.length
            ) * 100
        );


    studyStats.quizzes++;

    studyStats.totalScore += percentage;


    updateDashboard();


    let message;


    if (percentage >= 80) {

        message =
            "Excellent understanding.";

    } else if (percentage >= 60) {

        message =
            "Good progress. Keep reviewing.";

    } else {

        message =
            "Keep practicing and try again.";

    }


    area.innerHTML = `

        <div class="quiz-result">

            <div class="result-icon">
                ${percentage}
            </div>

            <span>
                QUIZ COMPLETE
            </span>

            <h3>
                ${message}
            </h3>

            <div class="score">
                ${percentage}%
            </div>

            <p>
                You answered
                <strong>${score}</strong>
                out of
                <strong>${data.quiz.length}</strong>
                questions correctly.
            </p>


            <button
                class="generate-button"
                onclick="startQuiz()"
            >
                Try Quiz Again
            </button>

        </div>

    `;

}


// ==========================================
// DASHBOARD
// ==========================================

function updateDashboard() {

    const sessionCount =
        document.getElementById(
            "sessionCount"
        );

    const quizCount =
        document.getElementById(
            "quizCount"
        );

    const averageScore =
        document.getElementById(
            "averageScore"
        );

    const cardCount =
        document.getElementById(
            "cardCount"
        );


    if (!sessionCount) {
        return;
    }


    sessionCount.textContent =
        studyStats.sessions;


    quizCount.textContent =
        studyStats.quizzes;


    cardCount.textContent =
        studyStats.flashcards;


    const average =
        studyStats.quizzes > 0

            ? Math.round(
                studyStats.totalScore /
                studyStats.quizzes
            )

            : 0;


    averageScore.textContent =
        `${average}%`;


    const sessionBar =
        document.getElementById(
            "sessionBar"
        );

    const quizBar =
        document.getElementById(
            "quizBar"
        );

    const scoreBar =
        document.getElementById(
            "scoreBar"
        );

    const cardBar =
        document.getElementById(
            "cardBar"
        );


    if (sessionBar) {

        sessionBar.style.width =
            `${Math.min(
                studyStats.sessions * 20,
                100
            )}%`;

    }


    if (quizBar) {

        quizBar.style.width =
            `${Math.min(
                studyStats.quizzes * 20,
                100
            )}%`;

    }


    if (scoreBar) {

        scoreBar.style.width =
            `${average}%`;

    }


    if (cardBar) {

        cardBar.style.width =
            `${Math.min(
                studyStats.flashcards * 10,
                100
            )}%`;

    }

}


// ==========================================
// AI STUDY ASSISTANT
// ==========================================

function handleChatKey(event) {

    if (event.key === "Enter") {

        sendChatMessage();

    }

}


// ==========================================
// SEND CHAT MESSAGE
// ==========================================

function sendChatMessage() {

    const input =
        document.getElementById(
            "chatInput"
        );


    const chatWindow =
        document.getElementById(
            "chatWindow"
        );


    if (!input || !chatWindow) {
        return;
    }


    const message =
        input.value.trim();


    if (!message) {

        input.focus();

        return;

    }


    addUserMessage(message);


    input.value = "";


    showTypingIndicator();


    setTimeout(() => {

        removeTypingIndicator();


        const response =
            generateAssistantResponse(
                message
            );


        addAssistantMessage(
            response
        );

    }, 700);

}


// ==========================================
// QUICK PROMPTS
// ==========================================

function sendQuickPrompt(message) {

    const input =
        document.getElementById(
            "chatInput"
        );


    if (!input) {
        return;
    }


    input.value = message;


    sendChatMessage();

}


// ==========================================
// ADD USER MESSAGE
// ==========================================

function addUserMessage(message) {

    const chatWindow =
        document.getElementById(
            "chatWindow"
        );


    if (!chatWindow) {
        return;
    }


    const messageElement =
        document.createElement("div");


    messageElement.className =
        "chat-message user-message";


    messageElement.innerHTML = `

        <div class="message-content">

            <span class="message-name">
                You
            </span>

            <p>
                ${escapeHTML(message)}
            </p>

        </div>

    `;


    chatWindow.appendChild(
        messageElement
    );


    scrollChatToBottom();

}


// ==========================================
// ADD ASSISTANT MESSAGE
// ==========================================

function addAssistantMessage(message) {

    const chatWindow =
        document.getElementById(
            "chatWindow"
        );


    if (!chatWindow) {
        return;
    }


    const messageElement =
        document.createElement("div");


    messageElement.className =
        "chat-message assistant-message";


    messageElement.innerHTML = `

        <div class="message-avatar">
            S
        </div>

        <div class="message-content">

            <span class="message-name">
                StudyBuddy AI
            </span>

            <p>
                ${message}
            </p>

        </div>

    `;


    chatWindow.appendChild(
        messageElement
    );


    scrollChatToBottom();

}


// ==========================================
// TYPING INDICATOR
// ==========================================

function showTypingIndicator() {

    const chatWindow =
        document.getElementById(
            "chatWindow"
        );


    if (!chatWindow) {
        return;
    }


    if (
        document.getElementById(
            "typingIndicator"
        )
    ) {

        return;

    }


    const typing =
        document.createElement("div");


    typing.id =
        "typingIndicator";


    typing.className =
        "chat-message assistant-message";


    typing.innerHTML = `

        <div class="message-avatar">
            S
        </div>

        <div class="typing-bubble">

            <span></span>
            <span></span>
            <span></span>

        </div>

    `;


    chatWindow.appendChild(
        typing
    );


    scrollChatToBottom();

}


// ==========================================
// REMOVE TYPING INDICATOR
// ==========================================

function removeTypingIndicator() {

    const typing =
        document.getElementById(
            "typingIndicator"
        );


    if (typing) {

        typing.remove();

    }

}


// ==========================================
// ASSISTANT RESPONSE ENGINE
// ==========================================

function generateAssistantResponse(message) {

    const text =
        message.toLowerCase();


    if (
        text.includes("neural network")
    ) {

        return `
            <strong>Neural Networks</strong> are
            computational models inspired by the human
            brain. They contain interconnected neurons
            arranged in layers. During training, the
            network adjusts its weights to recognize
            patterns in data.
        `;

    }


    if (
        text.includes("machine learning")
    ) {

        return `
            <strong>Machine Learning</strong> is a
            branch of AI where computers learn patterns
            from data and use those patterns to make
            predictions or decisions. Common approaches
            include supervised, unsupervised and
            reinforcement learning.
        `;

    }


    if (
        text.includes("python")
    ) {

        return `
            <strong>Python</strong> is a high-level
            programming language known for readable
            syntax and a large ecosystem. It is widely
            used in AI, data science, automation,
            web development and software development.
        `;

    }


    if (
        text.includes("study tip") ||
        text.includes("study tips")
    ) {

        return `
            Try focused study sessions. Start with the
            most important concepts, explain them in
            your own words, use active recall instead
            of simply rereading, and finish with
            practice questions.
        `;

    }


    if (
        text.includes("exam")
    ) {

        return `
            For exam preparation, list the topics you
            need to cover and prioritize difficult
            concepts. Create short revision notes,
            practice questions without looking at the
            answers, and review your mistakes.
        `;

    }


    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return `
            Hello. I'm ready to help you learn.
            Ask me to explain a concept, create a
            study strategy, or help you prepare
            for an exam.
        `;

    }


    if (
        text.includes("what is ai") ||
        text.includes("artificial intelligence")
    ) {

        return `
            <strong>Artificial Intelligence</strong>
            is the field of computing focused on
            creating systems capable of tasks that
            normally require human intelligence,
            including learning, reasoning, perception
            and decision-making.
        `;

    }


    if (
        text.includes("motivate")
    ) {

        return `
            Progress comes from consistency rather
            than trying to study everything at once.
            Focus on one concept, understand it,
            test yourself, and then move forward.
            Small improvements compound over time.
        `;

    }


    return `
        That's an interesting study question.
        Try breaking the topic into its definition,
        key concepts, examples and practical
        applications. Give me a specific concept
        and I'll explain it in a simpler way.
    `;

}


// ==========================================
// ESCAPE HTML
// ==========================================

function escapeHTML(text) {

    const element =
        document.createElement("div");


    element.textContent =
        text;


    return element.innerHTML;

}


// ==========================================
// CHAT SCROLL
// ==========================================

function scrollChatToBottom() {

    const chatWindow =
        document.getElementById(
            "chatWindow"
        );


    if (chatWindow) {

        chatWindow.scrollTop =
            chatWindow.scrollHeight;

    }

}