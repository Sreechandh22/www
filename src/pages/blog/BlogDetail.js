// src/pages/blog/BlogDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './blog.css';

// Updated blog posts data with full content
const blogPosts = [
  {
    id: 3,
    title: 'Lessons from a Dual Degree in Computer Science and Statistics',
    content: `
      <h2>Introduction: My Journey into the Intersection of Computer Science and Statistics</h2>
      <p>It wasn’t a grand revelation or a lightbulb moment that made me choose a dual degree in Computer Science and Statistics. Instead, it was a series of small, almost mundane experiences that snowballed into a realization. I remember one incident vividly: I was in high school, trying to predict the outcome of a cricket match for a friendly bet with my friends. I spent hours pouring over player stats, recent match performances, and even weather conditions, manually jotting down probabilities and outcomes. Despite all my efforts, my prediction was hilariously off. My friends had a good laugh, but for me, it was a wake-up call. It wasn't just that my prediction was wrong—I realized that I lacked the proper tools to analyze data and draw meaningful conclusions.</p>
      <p>A few months later, I tried something different. I wrote a basic program in Python to automate what I had done by hand. It was clunky and slow, but there was something exhilarating about watching the code process data and spit out predictions. The program still didn't get everything right, but it was much closer than my manual attempts. I remember feeling a mix of frustration and excitement. Frustration because I knew there had to be a better way, and excitement because I had tasted a glimpse of the power of combining programming with data analysis. This was the first time I saw the synergy between Computer Science and Statistics.</p>
      <p>But the real clincher came during a family trip when I was about 17. We were driving through the mountains, and my dad was obsessively checking a weather app that seemed to update every two minutes with conflicting predictions. "Why can’t they just get it right?" he muttered, clearly annoyed. Sitting in the backseat, I began to think about how much data goes into weather predictions and how often they fail. I started daydreaming about writing algorithms that could process this data better—more accurately, more reliably. It was a long car ride, and by the time we got home, I had filled an entire notebook with ideas.</p>
      <p>These small but impactful moments made me realize that I wanted more than just to write code or solve equations—I wanted to understand the why behind the data. I wanted to know how to make sense of the patterns and use them to make better decisions. That’s when it became clear: a dual degree in Computer Science and Statistics was my path forward.</p>

      <h3>Core Lessons:</h3>
      <h4>1. Data-Driven Decision Making: The Power of Statistical Methods in Tech</h4>
      <p>From my experience, data isn't just numbers on a spreadsheet; it's a living, breathing entity that tells a story. I remember a class project where we analyzed social media trends to predict movie box office success. While my teammates focused on scraping data and building flashy interfaces, I found myself diving deep into regression models and hypothesis testing, trying to understand the nuances of correlation versus causation. It wasn't just about predicting which movie would be a hit—it was about understanding why. The moment our model successfully predicted a blockbuster that everyone else thought would flop was incredibly rewarding. It showed me the power of using statistical methods to make data-driven decisions in tech.</p>

      <h4>2. Programming Skills Meet Analytical Thinking: Bridging Two Worlds</h4>
      <p>During an internship, I worked on a project that aimed to optimize traffic flow in urban areas using machine learning. My job was to write the algorithms that processed real-time traffic data, but I quickly realized that without a solid understanding of statistical distributions and probabilities, my models were just educated guesses. It was like trying to build a house without understanding architecture. My statistical background allowed me to see beyond the code, to understand the underlying patterns in the data and refine my algorithms accordingly. This fusion of programming skills with analytical thinking proved invaluable and highlighted how these two fields complement each other perfectly.</p>

      <h4>3. Real-World Applications: Where Computer Science and Statistics Converge</h4>
      <p>One of my favorite projects was during a hackathon where we developed a machine learning model to detect fraudulent transactions in real-time. The stakes were high, and the timeline was tight. My knowledge of statistics allowed me to implement anomaly detection techniques that identified outliers with uncanny accuracy, while my programming skills enabled me to build and deploy a robust, scalable system. Seeing our model catch fraudulent transactions that the existing system missed was not just a technical win but also a validation of my decision to study both Computer Science and Statistics. It felt like everything I had learned was coming together in perfect harmony.</p>

      <h3>Conclusion: Preparing for the Future</h3>
      <p>Looking back, choosing a dual degree in Computer Science and Statistics was one of the best decisions I’ve ever made. It has given me a unique perspective—one that allows me to approach problems from multiple angles and find innovative solutions. If you're considering a similar path, my advice is simple: follow your curiosity. Don’t just focus on what looks good on paper or what’s trending. Think about the moments that make you excited, frustrated, or deeply curious—those are the clues to your true passion. For me, it was a series of tiny, seemingly insignificant moments that led to a profound realization. Your journey might look different, but trust it. Every small step counts.</p>
    `
  },
  {
    id: 4,
    title: 'Navigating the Challenges of Being an International Student',
    content: `
      <h2>Introduction: My Journey from India to the USA</h2>
      <p>When I first landed in Arizona, the heat was so intense it felt like I had walked into an oven—so different from the monsoon season back in India. Everything was new and strange. I still remember the drive to my dorm, my eyes glued to the endless desert horizon and the occasional cactus, trying to comprehend that this was going to be my home for the next few years. I was thrilled to start my dual degree in Computer Science and Statistics at Arizona State University, but I was also hit with an overwhelming sense of anxiety and homesickness. I was stepping into a world where nothing was familiar, not the food, not the culture, and certainly not the academic environment.</p>
      <p>In India, I was used to a more structured education system where the focus was on following a set curriculum and excelling in exams. Here, I was encouraged to ask questions, challenge the status quo, and think critically—skills that were essential for a career in tech but that didn’t come naturally to me. I felt like a fish out of water, struggling to find my footing in a new country and a new education system. However, it was these very challenges that eventually became the stepping stones of my growth.</p>

      <h3>Challenges Faced:</h3>
      <h4>1. Language and Communication Barriers: Finding My Voice</h4>
      <p>One of the toughest parts of my transition was the language barrier. Although I was fluent in English, there was a huge difference between understanding textbook English and participating in a fast-paced classroom discussion or casual conversation peppered with slang. In one of my first classes, a professor made a joke referencing a popular American TV show. The whole class burst into laughter, and I just sat there, feeling isolated and confused. It was a small moment, but it made me acutely aware of the cultural and linguistic gap I needed to bridge.</p>
      <p>Then there were the group projects. I remember one where I hesitated to speak up, worried my accent or phrasing might not be clear. But there was a pivotal moment during a late-night coding session. We were stuck on a problem, and I had an idea, but I was too shy to share it. After what felt like an eternity of silence and everyone growing frustrated, I finally blurted out my suggestion. To my surprise, the team embraced it, and it worked. That moment was a breakthrough for me. It taught me that my ideas were valuable, and it didn’t matter if I stumbled over my words sometimes. Overcoming this barrier was more about finding the courage to be myself than perfecting my English.</p>

      <h4>2. Different Learning Styles: Adapting to a New Academic Culture</h4>
      <p>Adapting to the U.S. education system was another major challenge. I was accustomed to memorizing formulas and regurgitating facts for exams. Here, I was expected to think critically and independently. I recall one of my first assignments in a statistics class where we were asked to explore a dataset and draw our own conclusions. Back home, I would have been given clear guidelines and a specific path to follow. But here, the open-ended nature of the task left me paralyzed. I spent hours trying to figure out what the professor "wanted," only to realize that what they wanted was for me to think for myself.</p>
      <p>There was another moment in a computer science class where the professor encouraged us to question the validity of an algorithm we were studying. Back in India, questioning the textbook would have been unthinkable. But here, my challenge was to move beyond rote learning and embrace curiosity and exploration. I gradually learned to ask questions, even when I wasn’t sure of the answers, and this shifted my entire approach to learning. It became less about getting the ‘right’ answer and more about understanding the ‘why’ and ‘how’ behind it.</p>

      <h4>3. Homesickness and Cultural Adjustment: Creating a New Home</h4>
      <p>Homesickness hit me the hardest during my first Diwali away from home. Back in India, Diwali was all about family, lights, and delicious food. Here, it was just another day, and I felt an overwhelming sense of loneliness. But instead of letting it get to me, I decided to celebrate Diwali with a few other international students. We cooked a simple meal, lit some candles, and shared stories from home. It wasn’t the same as being with my family, but it was a small step towards finding comfort in a new place. I learned that home is where you create it, and I started to find joy in small things—like discovering an Indian grocery store nearby or making new friends who understood my journey.</p>
      <p>Then there was the culture shock. I had to get used to the more laid-back, informal way people interacted in the U.S. I was used to a culture where respecting elders and authority figures meant being reserved and formal. Here, professors encouraged us to call them by their first names, and casual attire was the norm in most places. I had to learn to navigate this new cultural landscape and find my own balance between staying true to my roots and adapting to my new environment.</p>

      <h3>Conclusion: Growth Beyond the Classroom</h3>
      <p>Looking back, my experience as an international student has been one of the most challenging yet rewarding journeys of my life. It forced me to step out of my comfort zone, adapt, and grow in ways I never imagined. It taught me resilience, open-mindedness, and the value of diverse perspectives. Today, I am more than just a computer science and statistics student; I am a bridge between cultures, a storyteller of experiences, and a testament to the power of stepping into the unknown. If you’re an international student or considering becoming one, my advice is simple: embrace the journey. It won’t always be easy, but it will be worth it.</p>
    `
  },
  {
    id: 1,
    title: 'The Power of AI in Transforming Healthcare',
    content: `
      <h2>Introduction: The Power of AI in Transforming Healthcare</h2>
      <p>The first time I heard about machine learning was during my freshman year at Arizona State University. I was in a statistics class, and the professor was explaining how algorithms could be used to predict patterns in large datasets. I remember sitting there, half-listening, half-doodling in my notebook, when he mentioned how these techniques were being used to diagnose diseases. That caught my attention. The idea that a machine could learn from data to potentially save lives was mind-blowing to me. At that moment, I knew I wanted to explore this field further. It wasn’t just about the technology; it was about the impact it could have on people’s lives.</p>
      <p>As I delved deeper into AI and machine learning, my fascination only grew. I realized that these technologies had the potential to revolutionize healthcare, particularly in diagnostics and personalized medicine. AI could analyze complex medical data more quickly and accurately than any human ever could, identifying patterns that might be invisible to the naked eye. But as I got more involved, I also encountered the challenges and ethical dilemmas that come with developing AI models for healthcare. I learned that building effective AI models isn’t just about the technology—it’s about the data, the algorithms, the validation processes, and the ethical considerations that ensure these models are both accurate and fair.</p>

      <h3>Key Components of Effective AI Models:</h3>
      <h4>1. Data Quality and Preparation: The Foundation of Robust AI Models</h4>
      <p>My first attempt at building an AI model was during a freshman project where we had to create a simple predictive model using publicly available health data. I thought it would be a straightforward task—just feed the data into the algorithm, and voila! But I quickly learned that the quality of the data is everything. The dataset was messy, full of missing values, and poorly annotated. I remember spending countless nights cleaning and organizing the data, often feeling frustrated and questioning if I had chosen the right field. But as tedious as it was, this experience taught me a critical lesson: garbage in, garbage out. In healthcare, where the stakes are so high, ensuring that datasets are clean, accurate, and well-annotated is essential. Poor data quality can lead to unreliable models, which, in turn, can lead to incorrect diagnoses or treatments—a risk that’s simply unacceptable.</p>

      <h4>2. Choosing the Right Algorithms: Matching Techniques to the Problem</h4>
      <p>In my early days, I thought all algorithms were created equal. I remember a joke among my freshman peers: "If it’s not working, just throw a neural network at it!" It was funny then, but as I learned more, I realized how naive that mindset was. In healthcare, the choice of algorithm is critical. Different problems require different approaches. For instance, when working on a project to develop an AI model for early-stage skin cancer detection, I learned that Convolutional Neural Networks (CNNs) are particularly effective for imaging data. Their ability to recognize patterns in visual data made them ideal for this type of problem.</p>
      <p>However, choosing the right algorithm is only half the battle. I faced significant challenges tuning the model to achieve the desired accuracy. At one point, the model’s diagnostic accuracy was stuck at 70%, far below the benchmark we needed. I was frustrated and doubted my skills. Did I really understand what I was doing? Should I even be pursuing this field? But with persistence, countless hours of research, and the support of my team, I eventually identified the problem: our model was overfitting. By adjusting the regularization parameters and augmenting the training data, we were able to improve the accuracy to 98%, far exceeding our initial goals. It was a huge breakthrough and a personal triumph that reaffirmed my passion for AI in healthcare.</p>

      <h4>3. Model Validation and Bias: Ensuring Accuracy and Fairness</h4>
      <p>Validation is another critical component, especially in healthcare. One of the most nerve-wracking moments of my academic career came when we were validating our colon cancer risk model. We had put months of work into developing this model, and it all came down to this final test. My hands were sweating as we ran the validation tests. The first few results were promising, but then we hit a snag—there was a significant bias in the model’s predictions. It was more accurate for some demographic groups than others, a flaw that could have serious real-world implications.</p>
      <p>That experience was a wake-up call. It taught me that an AI model is only as good as its validation process. In healthcare, it’s not enough for a model to be accurate; it must also be fair and unbiased. We went back to the drawing board, working tirelessly to identify the sources of bias and correct them. We implemented a more diverse dataset and adjusted our algorithms to ensure they were treating all demographic groups fairly. The process was challenging, but in the end, our model not only met but exceeded our expectations for both accuracy and fairness.</p>

      <h3>Real-World Application: The Colon Cancer Risk Assessment Model</h3>
      <p>One of the most impactful projects I’ve worked on was the colon cancer risk assessment model during my research assistant role at Barrett Research Program. This project was a culmination of all the lessons I’d learned. We used advanced NLP models and implemented ResNet18 models to analyze over 10,000 patient records. The aim was to improve predictive accuracy and provide more personalized care plans.</p>
      <p>There were moments of self-doubt, especially when the model’s performance plateaued, and I worried we wouldn’t be able to achieve our goals. But with each setback, we learned something new. One particularly memorable challenge was dealing with unstructured data. We had piles of handwritten doctor notes and inconsistent patient records to contend with. The solution involved not just technological skills, but also collaboration with medical professionals to correctly interpret the data. When we finally achieved a 45% increase in predictive accuracy, it wasn’t just a statistical success—it was a moment of immense personal pride.</p>

      <h3>Conclusion: The Future of AI in Healthcare and the Path Forward</h3>
      <p>Looking back, my journey from a curious freshman to someone who has contributed to meaningful AI healthcare projects has been incredible. The challenges I faced, the self-doubt I overcame, and the breakthroughs I achieved have all been part of a learning curve that I wouldn’t trade for anything. The future of AI in healthcare is bright, but it also comes with significant ethical considerations. As we continue to develop these technologies, it’s crucial that we do so responsibly, ensuring our models are accurate, fair, and free from bias.</p>
      <p>To anyone considering a path in AI, especially in healthcare, my advice is simple: embrace the challenges and don’t be afraid to make mistakes. Every setback is an opportunity to learn and grow. Stay curious, stay ethical, and most importantly, stay human. AI has the power to change the world, but it’s up to us to make sure it does so for the better.</p>
    `
  },
  {
    id: 2,
    title: 'From Backend to Frontend: Building Scalable Full-Stack Applications',
    content: `
      <h2>Introduction: The Hackathon That Almost Fell Apart</h2>
      <p>Let me start this blog by sharing a funny story from my first hackathon at school. My team and I were extremely excited but had no clue how to integrate the backend and frontend components of our project. In fact, we were so confused that we decided to split the work across two laptops—one running the backend and the other handling the frontend. When it came time to present, we had no idea how to connect the two. So, we presented from two laptops, switching between them to showcase our project. While it was hilarious and embarrassing at the time, it’s one of my favorite memories because it highlights how far I’ve come in mastering full-stack development!</p>

      <h3>Understanding Full-Stack Development: The Basics</h3>
      <p>Full-stack development is about building both the backend (server, database) and frontend (user interface) of an application. It requires understanding how to design APIs, manage databases, and ensure that data is efficiently passed from server to client, all while making sure the frontend is interactive and user-friendly.</p>
      <p>In the years since that first hackathon, I’ve worked on several full-stack projects, and the experience has given me a deep appreciation for how different technologies can work together to build scalable applications. Full-stack development isn't just about writing code; it’s about architecting a solution that’s efficient, maintainable, and user-centered.</p>

      <h3>1. The Backend: Building a Solid Foundation</h3>
      <p>The backend is the engine that powers your application. It's where business logic is executed, databases are queried, and APIs are managed. In my project work, I typically use technologies like <strong>Spring Boot</strong> and <strong>Flask</strong> for building RESTful APIs, along with databases like <strong>SQL</strong> and <strong>MongoDB</strong> for managing data.</p>
      <p>One of the key lessons I’ve learned from backend development is the importance of designing scalable systems. Early in my career, I worked on an emergency response app that needed to handle thousands of users in real time. We had to make sure the backend was capable of scaling with demand, implementing techniques like <em>caching</em> and <em>load balancing</em> to keep the system running smoothly under heavy traffic.</p>

      <h3>2. The Frontend: Creating an Intuitive User Experience</h3>
      <p>If the backend is the engine, the frontend is the user interface—the part of the application that users interact with. Technologies like <strong>React</strong> and <strong>Angular</strong> are essential for building dynamic and responsive web applications.</p>
      <p>In one of my projects, we developed a water crisis analysis tool using remote sensing data. The backend was responsible for heavy data processing, but the real challenge was presenting this data in a way that made sense to users. I focused on building a clean, intuitive UI with interactive charts and maps to help users visualize complex data in a user-friendly format.</p>

      <h3>3. Integrating the Backend and Frontend</h3>
      <p>This is where my hackathon story becomes relevant again. Back then, I didn’t fully understand how to bridge the gap between backend services and the frontend UI. Today, however, integrating backend and frontend is a crucial part of full-stack development. This is done using <strong>APIs</strong> (Application Programming Interfaces), which allow the frontend to communicate with the backend, sending and receiving data.</p>
      <p>During one project, I built a machine learning model to analyze medical data for predictive analysis. The backend used Python with Flask to manage the AI model, and the frontend was built using React. The key was to expose the model through a RESTful API so that the frontend could request predictions and display results in real-time.</p>

      <h3>4. Lessons Learned: Building for Scalability and Maintenance</h3>
      <p>Over time, I’ve learned that building scalable full-stack applications isn’t just about connecting the pieces; it’s about designing them to work together efficiently over time. Whether it’s handling a large number of API requests or ensuring the frontend remains responsive under heavy loads, scalability is key.</p>
      <p>One valuable lesson I’ve learned is the importance of using <strong>microservices</strong>. Breaking down your application into smaller, independent services helps ensure scalability and makes maintenance easier. In my experience, deploying a monolithic app is often faster in the short term but can become a nightmare to maintain. Microservices, on the other hand, allow you to update individual components without affecting the entire system.</p>

      <h3>Conclusion: From Two Laptops to a Full-Stack Engineer</h3>
      <p>Looking back, that hackathon was just the beginning of my journey in full-stack development. Today, I’ve mastered the tools and techniques needed to build scalable, maintainable applications that integrate the backend and frontend seamlessly. From working on emergency response apps to building AI-driven solutions, I’ve learned that full-stack development is about more than just writing code—it’s about creating efficient, user-friendly applications that can grow with the needs of the users.</p>
      <p>And while I’ll never forget presenting from two laptops, I’m proud of how far I’ve come. If you’re new to full-stack development, my advice is to embrace the challenges. Every mistake is a learning opportunity, and every successful integration is a step towards mastering the craft!</p>
    `
  },

];

const BlogDetail = () => {
  const { id } = useParams();
  const blogPost = blogPosts.find(post => post.id === parseInt(id));

  if (!blogPost) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="blog-page">
      <h1>{blogPost.title}</h1>
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
    </div>
  );
};

export { BlogDetail };
