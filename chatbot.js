/*// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', function (event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  // Generate chatbot response
  const response = generateResponse(input);

  // Add chatbot response to conversation
  message = document.createElement('div');
  message.classList.add('chatbot-message', 'chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({ behavior: 'smooth' });
});

// Generate chatbot response function
function generateResponse(input) {
  // Add chatbot logic here
  const greetings = [
    "Hello! Welcome to KKWIEER College's admission chatbot. 😊",
    "Greetings! How can I assist you with the education-related queries today? 🚀",
    "Hi there! Ready to explore education opportunities? 💬",
  ];

  const admissionInfo = "For information about the admission process, eligibility, and other details, please visit our official website: <a href='https://engg.kkwagh.edu.in/' target='_blank'>KKWIEER College</a>";

  const syllabusResponse = "If you're looking for the syllabus, you can find the Savitribai Phule Pune University's syllabus for our courses on their official website.";

  const referenceBookLink = "For additional reference, you can check out our recommended reference book in PDF format: <a href='your_reference_book_link.pdf' target='_blank'>Reference Book PDF</a>";

  const genericResponses = [
    "I'm here to assist you with education-related questions. Feel free to ask anything! 😊",
    "Curious about education? Ask me anything related to courses, admissions, or syllabus. 🤔",
    "Wondering how to get started with your educational journey? Let me know! 💡",
  ];

  // Check user input for specific queries
  if (input.toLowerCase().includes("admission")) {
    return greetings[Math.floor(Math.random() * greetings.length)] + "<br>" + admissionInfo;
  } else if (input.toLowerCase().includes("syllabus")) {
    return syllabusResponse;
  } else if (input.toLowerCase().includes("reference book")) {
    return referenceBookLink;
  } else {
    // Return a random generic response
    return genericResponses[Math.floor(Math.random() * genericResponses.length)];
  }
}*/

// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Define patterns and corresponding responses
const patterns = [
  ["Hi", "How are you", "Is anyone there?", "Hello", "Good day", "Whats up", "how are ya", "heyy", "whatsup"],
  ["Goodbye", "I am Leaving", "Bye", "Have a Good day", "talk to you later", "tyyl", "i got to go", "gtg"],
  ["who created you", "who create you", "creators", "who made you", "who designed you"],
  ["whats your name?", "what are you", "who are you"],
  ["what is my college time", "college timing", "timing college"],
  ["more info", "contact info", "how to contact college", "college telephone number", "college number", "What is your contact no", "Contact number?", "how to call you", "College phone no?", "how can i contact you", "Can i get your phone number", "how can i call you", "phone number", "phone no", "call"],
  ["list of courses", "list of courses offered", "list of courses offered in kkwieer", "what are the courses offered in your college?", "courses?", "courses offered", "courses offered in kkw", "courses you offer", "branches?", "courses available at k.k.wagh"],
  ["information about fee", "information on fee", "tell me the fee", "college fee", "fee per semester", "what is the fee of each semester", "what is the fees of each year", "what is fee", "what is the fees"],
  ["where is college located", "address of college", "how to reach college", "college location", "college address", "wheres the college", "how can I reach college", "whats is the college address", "what is the address of college", "address", "location"],
  ["hostel servive", "hostel location", "hostel address", "hostel facilities", "hostel fees", "Does college provide hostel", "Is there any hostel", "Where is hostel", "do you have hostel", "do you guys have hostel", "hostel", "hostel capacity"],
  ["list of events", "list of events organised in college", "list of events conducted in college", "What events are conducted in college", "Are there any event held at college", "Events?", "functions", "what are the events", "tell me about events", "what about events"]
];

const responses = [
  [
    "Hello!",
    "Good to see you again!",
    "Hi there, how can I help?",
  ],
  [
    "Sad to see you go :(",
    "Talk to you later",
    "Goodbye!",
    "Come back soon"
  ],
  [
    "ROSHANI AMRUTKAR and SHRUTI WARE developed me in 2024, for their mini project"
  ],
  [
    "You can call me KKWIEER Chatbot.",
    "I'm College Enquiry Chatbot",
    "I'm KKWIEER Chatbot College Enquiry ChatboT"
  ],
  [
    "College contains two shifts, morning shift(8-12) and afternoon shift(10:30-4) Monday-Saturday!"
  ],
  [
    "You can contact at +91 253 2512876 / 2512867. Fax No.: +91 253 2511962 / 2518870"
  ],
  [
    "Bachelors Programmes provided are Automobile Engineering, Civil Engineering, Computer Engineering, Electrical Engineering, Electronics and Telecommunications Engineering, Information Technology Engineering, Mechanical Engineering and Applied Sciences. For more details visit <a target=https://engg.kkwagh.edu.in/home>here</a>"
  ],
  [
    "For Fee details visit <a target=https://engg.kkwagh.edu.in/media/pdf/BTechEngineeringMTechFYMBA-FYMCA-AdmissionFeesAY2023-24>here</a>"
  ],
  [
    "Hirabai Haridas Vidyanagari, Amrutdham, Panchavati, Nashik – 422003 <a target=https://maps.app.goo.gl/LngkPm4ZuCmHxQfc6>Click here for location</a>"
  ],
  [
    "KKWIEER provides safe and affordable hostel facilities for boys and girls. For more details visit <a target=https://engg.kkwagh.edu.in/hostel_mess here</a>"
  ],
  [
    "Our college organizes various events during academics. Many Events are useful for technical skills and placements activities. There are many events which are held by different departments."
  ]
];

// Add event listener to input form
inputForm.addEventListener('submit', function (event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Add user input to conversation
  appendMessage(input, 'user-message');

  // Check for pattern-based response
  const patternResponse = getPatternResponse(input);
  if (patternResponse !== null) {
    appendMessage(patternResponse, 'chatbot');
  } else {
    // Generate chatbot response
    const response = generateResponse(input);

    // Add chatbot response to conversation
    appendMessage(response, 'chatbot');
  }

  message.scrollIntoView({ behavior: 'smooth' });
});

// Function to append a message to the conversation
function appendMessage(messageContent, messageClass) {
  let message = document.createElement('div');
  message.classList.add('chatbot-message', messageClass);
  message.innerHTML = `<p class="chatbot-text">${messageContent}</p>`;
  conversation.appendChild(message);
}

// Function to check for pattern-based response
function getPatternResponse(input) {
  const lowerInput = input.toLowerCase();
  for (let i = 0; i < patterns.length; i++) {
    for (let j = 0; j < patterns[i].length; j++) {
      if (lowerInput.includes(patterns[i][j].toLowerCase())) {
        const responseArray = responses[i];
        return responseArray[Math.floor(Math.random() * responseArray.length)];
      }
    }
  }
  return null;
}

// Generate chatbot response function
function generateResponse(input) {
  // Define keyword-based responses
  const keywordResponses = {
    "admission": [
      "Hello! Welcome to KKWIEER College's admission chatbot. 😊",
      "Greetings! How can I assist you with the education-related queries today? 🚀",
      "Hi there! Ready to explore education opportunities? 💬"
    ],
    "syllabus": "If you're looking for the syllabus, you can find it on our website.",
    "reference book": "For additional reference, you can check out our recommended reference book in PDF format.",
    "default": [
      "I'm here to assist you. Feel free to ask anything! 😊",
      "Curious about something? Ask me anything! 🤔",
      "Wondering how to get started? Let me know! 💡"
    ]
  };

  // Search for keywords in user input
  for (const keyword in keywordResponses) {
    if (input.toLowerCase().includes(keyword)) {
      const responseArray = keywordResponses[keyword];
      // If there are multiple responses for the keyword, choose one randomly
      if (Array.isArray(responseArray)) {
        return responseArray[Math.floor(Math.random() * responseArray.length)];
      } else {
        return responseArray; // If only one response is available, return it directly
      }
    }
  }

  // If no specific keyword found, return a random generic response
  const genericResponses = keywordResponses["default"];
  return genericResponses[Math.floor(Math.random() * genericResponses.length)];
}
