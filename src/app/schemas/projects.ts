import { Project, DisplayCardType } from '../projects/project/project.model';

export const projects: Project[] = [
  {
    title: 'StoryBot Adventures',
    id: 'storybot',
    description:
      'StoryBot Adventures is designed to help kids develop their artistic talent, improve their visualization skills, and encourage their creativity like never before. They not only read but also become the storytellers, guiding the narrative in their own unique way',
    imageSrc: 'assets/projects/storybot/front-page.png',
    displayCardsConfig: [
      {
        type: DisplayCardType.text,
        title: 'Description',
        innerHtml:
          "Storybot Adventure is an innovative system designed to foster creativity and imagination in children by merging the power of artificial intelligence with the boundless world of storytelling. When a child inputs a prompt, the system crafts a unique, engaging story tailored to that idea. But the magic doesn't stop there. Once the story is generated, children are given the tools to illustrate each scene, bringing their own personal touch and vision to the narrative. This encourages artistic expression and deepens their connection to the story. Upon completion, the system offers an option to export the entire project, allowing children to have a tangible book of their own creation. Storybot Adventure is more than just a storytelling tool; it's a bridge between technology and the timeless art of storytelling, empowering the next generation of writers and illustrators. <br /><br />Source code: <a href='https://github.com/kayrux/Story-Sketch'>Github</a> <br />Website: <a href='https://kayrux.github.io/Story-Sketch/'>StoryBot Adventures</a>",
      },
      {
        type: DisplayCardType.video,
        title: 'Demo',
        src: 'https://www.youtube.com/embed/jssGwbnWTWA',
      },
      {
        type: DisplayCardType.text,
        title: 'Concept Sketches',
        innerHtml:
          "These concept sketches serve as the visual foundation for our storyboard system, a tool we've developed to facilitate discussions on system design. They are instrumental in helping us visualize and refine the user interface, functionality, and overall user experience",
      },
      {
        type: DisplayCardType.carousel,
        title: '10 Concept Sketches',
        items: [
          {
            imageSrc: 'assets/projects/storybot/p1.png',
            description:
              'Drag and drop: A delightful, user-friendly system for kids to craft imaginative pictures by effortlessly dragging and dropping playful elements onto a dynamic drawing board.',
          },
          {
            imageSrc: 'assets/projects/storybot/p2.png',
            description:
              'Child-AI Artistry: Kids sketch their ideas, and AI enhances them for stunning results',
          },
          {
            imageSrc: 'assets/projects/storybot/p3.png',
            description:
              'Advanced AI generates initial drafts, providing a creative starting point for children. Kids then add their unique magic, modifying, embellishing, and customizing the artwork to align with their artistic vision.',
          },
          {
            imageSrc: 'assets/projects/storybot/p4.png',
            description:
              'Children become the creative directors, providing prompts or ideas; the AI transforms their words into vivid and personalized drawings.',
          },
          {
            imageSrc: 'assets/projects/storybot/p5.png',
            description:
              "Children's creativity takes center stage as they write prompts that AI turns into captivating stories. Afterward, a drawing board allows kids to bring those stories to life through illustrations, fostering storytelling skills and artistic expression in a dynamic and engaging way.",
          },
          {
            imageSrc: 'assets/projects/storybot/p6.png',
            description:
              'ColorMatch Canvas: An interactive system where children paint objects to match specified colors',
          },
          {
            imageSrc: 'assets/projects/storybot/p7.png',
            description:
              'With a simple click, children select a story base, and like magic, the AI crafts a one-of-a-kind tale, igniting their imagination and nurturing their storytelling skills with each enchanting click.',
          },
          {
            imageSrc: 'assets/projects/storybot/p8.png',
            description:
              'StoryGenie: A magical system where children simply click to choose a theme, and AI conjures up a unique story, sparking imagination and storytelling prowess with each enchanting click.',
          },
          {
            imageSrc: 'assets/projects/storybot/p9.png',
            description:
              'Children can explore animated stories on the right side of the screen, sparking their imagination and engagement. On the left side, they are presented with a fun and educational challenge: sorting text into a box. This system seamlessly combines entertainment and learning, making it an enjoyable and enriching experience for young minds.',
          },
          {
            imageSrc: 'assets/projects/storybot/p10.png',
            description:
              'Children share the story they have with another person and co-illustrate the story with them.',
          },
        ],
      },
      {
        type: DisplayCardType.text,
        title: 'Idea Selection',
        innerHtml:
          'After a thorough discussion among our team members, we have collectively decided to embrace the fifth concept sketch as the cornerstone of our project. The primary reason for this choice is our unwavering commitment to providing children with a flexible and creative platform to design their own books. This concept aligns perfectly with our mission to empower young minds, allowing them to shape and personalize their storytelling experiences. We believe that this decision will not only enrich the user experience but also inspire a new generation of young authors and artists. For these sketches, I focused mainly on the AI aspects that we could include.',
      },
      {
        type: DisplayCardType.text,
        title: 'Detailed Sketches',
        innerHtml:
          "Detailed sketches: Following the selection of our concept from the initial concept sketches, we embarked on the next phase of our project by creating detailed sketches. These intricate renderings provide a comprehensive visual blueprint, capturing every nuance of our system's design and functionality. With these detailed sketches in hand, we are prepared to translate our creative vision into a tangible and user-friendly system that will both entertain and educate children.",
      },
      {
        type: DisplayCardType.carousel,
        title: '10 Detailed Sketches',
        items: [
          {
            imageSrc: 'assets/projects/storybot/d1.png',
            description: 'Save temporary work',
          },
          {
            imageSrc: 'assets/projects/storybot/d2.png',
            description: 'Clear everything in the drawing',
          },
          {
            imageSrc: 'assets/projects/storybot/d3.png',
            description: 'Change pen thickness',
          },
          {
            imageSrc: 'assets/projects/storybot/d4.png',
            description: 'Erase some parts of the drawing',
          },
          {
            imageSrc: 'assets/projects/storybot/d5.png',
            description: 'Undo the last step',
          },
          {
            imageSrc: 'assets/projects/storybot/d6.png',
            description: 'Share the drawing with someone else',
          },
          {
            imageSrc: 'assets/projects/storybot/d7.png',
            description: 'View someone’s gallery',
          },
          {
            imageSrc: 'assets/projects/storybot/d8.png',
            description:
              'Children can use voice to text if they don’t want the story from the AI',
          },
          {
            imageSrc: 'assets/projects/storybot/d9.png',
            description:
              'Children should be able to have voice-to-text so the story can be read to them',
          },
          {
            imageSrc: 'assets/projects/storybot/d10.png',
            description: 'Predesigned background',
          },
        ],
      },
      {
        type: DisplayCardType.text,
        title: 'Detailed Sketches Idea Selection',
        innerHtml:
          'Out of the ten meticulously crafted detailed sketches, our selection process has led us to prioritize the implementation of the first seven sketches and the ninth sketch. These particular sketches have been chosen because of their fundamental importance in providing children with the necessary support and guidance for their drawing endeavors. Equally significant is our commitment to maintaining a system that is both easy to understand and executable within a relatively short timeframe. By focusing on these key sketches, we aim to ensure that our system strikes the right balance between accessibility and functionality, ultimately enhancing the overall user experience. My sketches were mainly focused on the interface design, and what sort of features we should include.',
      },
      {
        type: DisplayCardType.text,
        title: 'Contribution',
        innerHtml:
          'For this project I was in charge of creating the foundations of the website, and making all the different components work together. I also worked on the main theme and design of the website.',
      },
      {
        type: DisplayCardType.embeddedWebsite,
        title: 'Story Sketch',
        url: 'https://kayrux.github.io/Story-Sketch/',
      },
    ],
  },
  {
    title: 'Fish and Ships Lock',
    id: 'fish-and-ships',
    bannerBackgroundColour: 'light-blue',
    description:
      'The Fish-and-Ships lock introduces an innovative approach to phone security. Set against a serene ocean backdrop in a soothing shade of blue, users must steer a boat to catch designated fish to unlock their device.',
    imageSrc: 'assets/projects/fish-and-ships-lock/lock-screen.jpg',
    displayCardsConfig: [
      {
        type: DisplayCardType.text,
        title: 'Description',
        innerHtml:
          "The Fish-and-Ships lock introduces an innovative approach to phone security. Set against a serene ocean backdrop in a soothing shade of blue, users must steer a boat to catch designated fish to unlock their device. Various fishes appear on the screen, each representing a unique part of the unlocking code. By tilting their phone to the left or right, users can navigate the boat in pursuit of these fishes. To verify the password, the user should tilt the phone beyond 90 degrees. Successfully capturing the correct sequence of fishes, as predefined by the password, grants access to the phone. However, if the user misses the mark, they'll have another chance to embark on this aquatic quest to unlock their device. <br /><br />Source code: <a href='https://github.com/kayrux/fish-and-ships'>Github</a> <br />Website: <a href='https://kayrux.github.io/fish-and-ships/'>Fish and Ships Lock</a>",
      },
      {
        type: DisplayCardType.video,
        title: 'Demo',
        src: 'https://www.youtube.com/embed/bhDPqhmAPGI',
      },
      {
        type: DisplayCardType.text,
        title: 'Concept Sketches',
        innerHtml:
          'When juxtaposed with the touch-based lock, the sensor-based lock presents a distinct set of challenges and opportunities. While it might initially seem more intricate for users to navigate, with meticulous design and user-centric considerations, it holds the potential to be exceptionally convenient and interactive. The inherent nature of sensor-based systems allows for a more immersive experience, bridging the gap between the user and the device in a seamless manner. Understanding the inherent complexities of sensor-based systems, we approached the design process with a blend of caution and creativity. After numerous discussions, we have distilled our ideas into 10 concept sketches. These sketches represent the most promising and innovative solutions, each offering a distinct approach to how sensor-based locks can be integrated into daily life.',
      },
      {
        type: DisplayCardType.carousel,
        title: '10 Concept Sketches',
        items: [
          {
            imageSrc: 'assets/projects/fish-and-ships-lock/p1.png',
            description: 'Record the hand doing a series of hand symbols.',
          },
          {
            imageSrc: 'assets/projects/fish-and-ships-lock/p2.png',
            description:
              'Shake the phone until the bar fills up to the correct level.',
          },
          {
            imageSrc: 'assets/projects/fish-and-ships-lock/p3.png',
            description: 'Move eyes in a pattern.',
          },
          {
            imageSrc: 'assets/projects/fish-and-ships-lock/p4.png',
            description: 'Draw a pattern in the air with your finger.',
          },
          {
            imageSrc: 'assets/projects/fish-and-ships-lock/p5.png',
            description:
              'Rotate the phone to the correct number (numbers are located on a clock) 4 times.',
          },
          {
            imageSrc: 'assets/projects/fish-and-ships-lock/p6.png',
            description:
              'Gravity-balanced ball (the user needs to move the ball to the correct hole).',
          },
          {
            imageSrc: 'assets/projects/fish-and-ships-lock/p7.png',
            description: 'Scan the pupil to unlock.',
          },
          {
            imageSrc: 'assets/projects/fish-and-ships-lock/p8.png',
            description: 'Tilt the phone to add branches to the tree.',
          },
          {
            imageSrc: 'assets/projects/fish-and-ships-lock/p9.png',
            description:
              'Directional combination lock (move the lock to the right combination of directions to unlock).',
          },
          {
            imageSrc: 'assets/projects/fish-and-ships-lock/p10.png',
            description: 'Rotate phone to enter password.',
          },
        ],
      },
      {
        type: DisplayCardType.text,
        title: 'Idea Selection',
        innerHtml:
          "Upon thorough deliberation, we've come to the conclusion that the concept of tilting the phone to introduce branches stands out as the most promising. Several reasons underpin this decision. Firstly, the simplicity of the idea ensures that users can quickly grasp the concept without a steep learning curve. The act of tilting the phone is a natural and intuitive motion, which means users are likely to find the experience seamless and fluid. Furthermore, the immediate visual feedback on the interface as branches appear in response to the user's actions enhances the interactive nature of the system. This real-time responsiveness not only makes the system more engaging but also provides users with a sense of control and satisfaction. In a world where user experience is paramount, ensuring that our system is both intuitive and interactive is crucial, and this concept effectively addresses both these aspects.",
      },
      {
        type: DisplayCardType.text,
        title: 'Detailed Sketches',
        innerHtml:
          'Upon finalizing our decisions regarding the initial concept sketches, every member of our team delved deeper into the design process, crafting their own intricate and detailed sketches. This method not only allowed for a multitude of perspectives but also ensured that we tapped into the collective creativity of our team. Following this, we gathered for a collaborative session where we showcased and discussed these detailed sketches, fostering an environment of constructive feedback and mutual learning. Displayed below are ten of these elaborately designed sketches, each reflecting a unique vision and approach. From this rich tapestry of ideas, we selected specific designs to form the backbone of our system. Our selection criteria were rooted in practicality and synergy. We carefully evaluated the feasibility of implementing each sketch and considered how seamlessly they could integrate with one another. Our primary goal was to ensure that the final system encapsulated the core principles of our sensor-based system: to be both convenient for the user and to offer an interactive experience. Through this rigorous process, we aimed to strike the perfect balance between innovation and usability.',
      },
      {
        type: DisplayCardType.carousel,
        title: '10 Detailed Sketches',
        items: [
          {
            imageSrc: 'assets/projects/fish-and-ships-lock/d1.png',
            description:
              'Tilt the phone to the left or right to add branches and move it up or down to add fruits.',
          },
          {
            imageSrc: 'assets/projects/fish-and-ships-lock/d2.png',
            description: 'Use voice to choose direction to add objects.',
          },
          {
            imageSrc: 'assets/projects/fish-and-ships-lock/d3.png',
            description:
              'Move the finger in front of the camera to navigate the boat.',
          },
          {
            imageSrc: 'assets/projects/fish-and-ships-lock/d4.png',
            description: 'Step in some directions to navigate the character .',
          },
          {
            imageSrc: 'assets/projects/fish-and-ships-lock/d5.png',
            description: 'Flip the phone to confirm the password.',
          },
          {
            imageSrc: 'assets/projects/fish-and-ships-lock/d6.png',
            description: 'Shake the phone to confirm the password.',
          },
          {
            imageSrc: 'assets/projects/fish-and-ships-lock/d7.png',
            description: 'Twirl the phone to unlock.',
          },
          {
            imageSrc: 'assets/projects/fish-and-ships-lock/d8.png',
            description: 'Use voice to confirm the password.',
          },
          {
            imageSrc: 'assets/projects/fish-and-ships-lock/d9.png',
            description: 'Nod to confirm the password.',
          },
          {
            imageSrc: 'assets/projects/fish-and-ships-lock/d10.png',
            description: 'Snap to unlock the phone.',
          },
        ],
      },
      {
        type: DisplayCardType.text,
        title: 'Detailed Sketches Idea Selection',
        innerHtml:
          "Out of the myriad of detailed sketches we had at our disposal, our team collectively decided to focus on the first and fifth sketches as the primary blueprints for our system's functions. While these sketches originally revolved around a plant theme, we felt a shift was necessary to enhance user interactivity. Thus, we transitioned to a catching fish theme, which we believed would resonate more with users and provide a dynamic experience. In this revamped theme, every time a user tilts their phone, the action doesn't result in the growth of a branch or the appearance of a fruit, as originally conceptualized. Instead, a boat on the screen captures a fish, making the interaction more lively and engaging. Furthermore, we opted for the flipping motion as the method of initiation. This choice was influenced by its similarity to the tilting motion, ensuring a cohesive user experience. While both motions are related, their distinct directions ensure that users can easily differentiate between the two, without accidentally starting entering the password. This design choice ensures that the system remains intuitive, reducing the chances of user confusion while maintaining a seamless and interactive experience.",
      },
      {
        type: DisplayCardType.text,
        title: 'Contribution',
        innerHtml:
          'I made the website more mobile-friendly and added logic for resetting the state each time an incorrect passcode is entered. To make the display more user-friendly I added prompts and a small display for the current passcode sequence. Preventing accidental activation was also important so I made sure the user has to tilt the phone towards them before being able to enter their passcode.',
      },
    ],
  },
  {
    title: 'Guitar Hero Lock',
    id: 'guitar-hero',
    description:
      "Introducing an innovative unlock screen method inspired by the rhythm and excitement of Guitar Hero. Say goodbye to traditional passcodes and patterns. With our new method, you'll tap your way into your device to the beat of your favorite pattern.",
    imageSrc: 'assets/projects/guitar-hero-lock/lock-screen.png',
    displayCardsConfig: [
      {
        type: DisplayCardType.text,
        title: 'Description',
        innerHtml:
          "The Guitar Hero Lock draws its inspiration from the iconic and much-loved game, Guitar Hero. In this unique locking mechanism, users are presented with three distinct buttons, each colored red, green, or blue, reminiscent of the game's signature color-coded notes. To successfully unlock their device, users must tap these buttons in a specific sequence, mirroring the rhythm and pattern challenges of the original game. If the sequence entered is incorrect, the device remains locked, prompting the user to try their hand at the sequence once more. This not only adds an element of fun to the unlocking process but also provides an additional layer of security, as the correct sequence becomes akin to a musical password. <br /><br />Source code: <a href='https://github.com/kayrux/Guitar-Hero-Lock'>Github</a> <br />Website: <a href='https://kayrux.github.io/Guitar-Hero-Lock/'>Guitar Hero Lock</a>",
      },
      {
        type: DisplayCardType.video,
        title: 'Demo',
        src: 'https://www.youtube.com/embed/a24nZyWsh9g',
      },
      {
        type: DisplayCardType.text,
        title: 'Concept Sketches',
        innerHtml:
          'When we embarked on the journey to create a touch-based lock, our overarching goal was to strike a balance between user interactivity and simplicity. We believed that for a product to be truly embraced by its users, it needed to offer an engaging experience without overwhelming them with complexity. With this philosophy in mind, we delved deep into brainstorming sessions, exploring a myriad of possibilities and potential designs. From these sessions, ten standout concept sketches emerged, each representing a unique approach and vision for our system. These sketches not only served as a testament to our creative process but also laid the foundational blueprint for the development of our innovative touch-based lock system.',
      },
      {
        type: DisplayCardType.carousel,
        title: '10 Concept Sketches',
        items: [
          {
            imageSrc: 'assets/projects/guitar-hero-lock/p1.png',
            description: 'Unlock by tapping a specific rhythm.',
          },
          {
            imageSrc: 'assets/projects/guitar-hero-lock/p2.png',
            description: 'Simultaneously touch both sides in  pattern.',
          },
          {
            imageSrc: 'assets/projects/guitar-hero-lock/p3.png',
            description:
              'Draw a single item using both fingers simultaneously.',
          },
          {
            imageSrc: 'assets/projects/guitar-hero-lock/p4.png',
            description: 'Sign to unlock.',
          },
          {
            imageSrc: 'assets/projects/guitar-hero-lock/p5.png',
            description: 'Solve a question to unlock.',
          },
          {
            imageSrc: 'assets/projects/guitar-hero-lock/p6.png',
            description: 'Feed the virtual pet to unlock.',
          },
          {
            imageSrc: 'assets/projects/guitar-hero-lock/p7.png',
            description: 'Water the tree to unlock.',
          },
          {
            imageSrc: 'assets/projects/guitar-hero-lock/p8.png',
            description: 'Enter the emoji password.',
          },
          {
            imageSrc: 'assets/projects/guitar-hero-lock/p9.png',
            description: 'Guitar hero lock.',
          },
          {
            imageSrc: 'assets/projects/guitar-hero-lock/p10.png',
            description: 'Solve the maze to unlock.',
          },
        ],
      },
      {
        type: DisplayCardType.text,
        title: 'Idea Selection',
        innerHtml:
          "After thorough examination and reflection, we've determined that the lock inspired by 'Guitar Hero' emerges as the top contender. Its distinctiveness and captivating interface truly differentiate it. Given the widespread recognition of the Guitar Hero game, many individuals already possess foundational knowledge of how it operates. Its simple rules mean that even those new to the game can easily understand and adapt to its mechanics. Integrating a gaming theme into the lock's design not only introduces a playful element but also boosts user engagement. This innovative approach elevates a routine action, such as unlocking, into a delightful and interactive experience, heightening its allure for users.",
      },
      {
        type: DisplayCardType.text,
        title: 'Detailed Sketches',
        innerHtml:
          "After finalizing our initial concept sketches, each member of our team took the initiative to further refine and develop their own detailed sketches. This collaborative approach resulted in a collection of ten intricate and well-thought-out designs, each showcasing unique features and functionalities. These sketches were then collectively reviewed and discussed in depth, ensuring that every perspective was taken into account. Our primary criteria for selecting the most suitable sketches were twofold. Firstly, we considered the feasibility of implementing each design into our touch-based system. It was essential for us to ensure that the chosen designs could be realistically transformed into functional features without compromising their integrity or the overall system's performance. Secondly, we evaluated how well each sketch could integrate with others to create a cohesive user experience. Our ultimate goal was to ensure that our touch-based system was not only interactive but also user-friendly and straightforward. By focusing on these criteria, we aimed to strike a balance between innovation and practicality, ensuring that our final product would be both cutting-edge and accessible to our target audience.",
      },
      {
        type: DisplayCardType.carousel,
        title: '10 Detailed Sketches',
        items: [
          {
            imageSrc: 'assets/projects/guitar-hero-lock/d1.png',
            description: 'Tapping on the circles to create a rhythm.',
          },
          {
            imageSrc: 'assets/projects/guitar-hero-lock/d2.png',
            description: 'Tap 10 times in a rhythm.',
          },
          {
            imageSrc: 'assets/projects/guitar-hero-lock/d3.png',
            description:
              '4 sets of 4 circles will fall. Tap the correct circles each time.',
          },
          {
            imageSrc: 'assets/projects/guitar-hero-lock/d4.png',
            description: 'Press all buttons on the screen to start.',
          },
          {
            imageSrc: 'assets/projects/guitar-hero-lock/d5.png',
            description: 'Connect the dots to form a pattern.',
          },
          {
            imageSrc: 'assets/projects/guitar-hero-lock/d6.png',
            description:
              'Transparent circles at the bottom so that the user knows when to tap the button.',
          },
          {
            imageSrc: 'assets/projects/guitar-hero-lock/d7.png',
            description: 'The circles fall from the top.',
          },
          {
            imageSrc: 'assets/projects/guitar-hero-lock/d8.png',
            description: 'The board to keep track of chosen colours.',
          },
          {
            imageSrc: 'assets/projects/guitar-hero-lock/d9.png',
            description: 'Tap to start entering password.',
          },
          {
            imageSrc: 'assets/projects/guitar-hero-lock/d10.png',
            description:
              'Round displayer, this represents the number of the current round.',
          },
        ],
      },
      {
        type: DisplayCardType.text,
        title: 'Detailed Sketches Idea Selection',
        innerHtml:
          "From the collection of detailed sketches, we decided to move forward with the final eight designs, excluding the fifth one, to be incorporated as key features of our system. To prevent accidental initiation, users are required to tap specific buttons on the screen to begin the passcode entry process. We've integrated transparent buttons at the bottom and incorporated the flow of balls, reminiscent of the iconic Guitar Hero game design. This was a deliberate choice to evoke a sense of familiarity among users. Additionally, we've implemented a board that keeps a record of the selected colors, paired with a circular display, to keep users informed about their ongoing progress. By amalgamating these elements, we've managed to enhance the system's user-friendliness and interactive nature.",
      },
      {
        type: DisplayCardType.text,
        title: 'Contribution',
        innerHtml:
          'I worked on the logic, moving animations, and user-friendly design of the website.',
      },
    ],
  },
  {
    title: 'Hydrobot',
    id: 'hydrobot',
    bannerBackgroundColour: 'light-blue',
    description:
      'A charming and friendly robot designed to encourage hydration.',
    imageSrc: 'assets/projects/hydrobot/hydrobot.png',
    displayCardsConfig: [
      {
        type: DisplayCardType.text,
        title: 'Description',
        innerHtml:
          "Hydrobot is a charming and friendly robot designed to encourage hydration. Each day at a set time, it rolls towards you, bearing a cup. Notable for the light on its top, Hydrobot also makes a unique sound as a hydration reminder. Its wheels are crafted from Toio, a Sony-developed system that combines robotics with interactive play, making Hydrobot's movements smooth and precise. The robot's inner workings are built from Arduino components, known for their versatility in electronics projects, while its exterior is fashioned from cartons, lending a creative and eco-friendly aspect to its design.<br /><br />Source code (for arduino): <a href='https://github.com/thao3005/HydroBot/tree/main'>Github</a>",
      },
      {
        type: DisplayCardType.video,
        title: 'Final demo',
        src: 'https://www.youtube.com/embed/nJIYapTestc',
      },
      {
        type: DisplayCardType.text,
        title: 'Concept Sketches',
        innerHtml:
          'In our quest to address daily challenges, we brainstormed various ideas. Below are ten of these concepts. Our aim was to create a system that is not only interactive and intelligent but also practical and applicable in everyday life.',
      },
      {
        type: DisplayCardType.carousel,
        title: '10 Concept Sketches',
        items: [
          {
            imageSrc: 'assets/projects/hydrobot/p1.png',
            description:
              'A machine to automatically dispense one cup of water six times a day. It has signaling mechanisms to prompt you to drink the water it provides.',
          },
          {
            imageSrc: 'assets/projects/hydrobot/p2.png',
            description: 'Smart locker with embedded AI.',
          },
          {
            imageSrc: 'assets/projects/hydrobot/p3.png',
            description:
              'Smart calculator that can solve complicated math problems.',
          },
          {
            imageSrc: 'assets/projects/hydrobot/p4.png',
            description: 'Smart alarm.',
          },
          {
            imageSrc: 'assets/projects/hydrobot/p5.png',
            description: 'Weather forecast system.',
          },
          {
            imageSrc: 'assets/projects/hydrobot/p6.png',
            description:
              'A system to detect unknown objects using radar waves.',
          },
          {
            imageSrc: 'assets/projects/hydrobot/p7.png',
            description: 'Fingerprint authenticator.',
          },
          {
            imageSrc: 'assets/projects/hydrobot/p8.png',
            description: 'Music LED light controller.',
          },
          {
            imageSrc: 'assets/projects/hydrobot/p9.png',
            description: 'Automatically feeding fish system.',
          },
          {
            imageSrc: 'assets/projects/hydrobot/p10.png',
            description: 'Automatic street light.',
          },
        ],
      },
      {
        type: DisplayCardType.text,
        title: 'Idea Selection',
        innerHtml:
          "Following thorough deliberation, we opted to proceed with our first idea. While this concept isn't entirely novel, as there has been some prior work in this area, existing solutions lack sufficient interactivity and practicality. This gap presents us with ample opportunities for innovation and enhancement.",
      },
      {
        type: DisplayCardType.video,
        title: 'Concept video',
        src: 'https://www.youtube.com/embed/wo5_qvfUgU0',
      },
      {
        type: DisplayCardType.text,
        title: 'Detailed Sketches',
        innerHtml:
          "After finalizing our main idea, we delved into creating detailed sketches, categorizing them into three main functionalities: a water dispenser, a water bottle, and a water-drinking reminder system. Initially, we focused on the water dispenser but soon realized that fully developing its novel functions would be time-consuming. Additionally, we recognized its lack of flexibility due to its fixed location, which isn't practical as people often move around throughout the day. We then considered the water bottle concept but faced challenges in design, particularly in integrating Arduino components within the bottle's structure. Consequently, we decided to pursue the drinking water reminder robot, seeing it as the most feasible and innovative option.",
      },
      {
        type: DisplayCardType.carousel,
        title: '10 Detailed Sketches',
        items: [
          {
            imageSrc: 'assets/projects/hydrobot/d1.png',
            description:
              'Digital screen to show the facial expression of the robot',
          },
          {
            imageSrc: 'assets/projects/hydrobot/d2.png',
            description: 'Wheels for movements',
          },
          {
            imageSrc: 'assets/projects/hydrobot/d3.png',
            description: 'Camera to detect obstacles and navigate',
          },
          {
            imageSrc: 'assets/projects/hydrobot/d4.png',
            description: 'Sensors to detect if the cup is on',
          },
          {
            imageSrc: 'assets/projects/hydrobot/d5.png',
            description: 'LED to indicate the status of the robot',
          },
          {
            imageSrc: 'assets/projects/hydrobot/d6.png',
            description: 'Speaker for notification',
          },
          {
            imageSrc: 'assets/projects/hydrobot/d7.png',
            description: 'Bar indicating how much water has been drunk',
          },
          {
            imageSrc: 'assets/projects/hydrobot/d8.png',
            description:
              'Water bottles divided into compartments by the divider',
          },
          {
            imageSrc: 'assets/projects/hydrobot/d9.png',
            description: 'Automatically refill the cup with water',
          },
          {
            imageSrc: 'assets/projects/hydrobot/d10.png',
            description:
              'A scale to detect the weight of the cup to check if it’s placed on the robot',
          },
        ],
      },
      {
        type: DisplayCardType.text,
        title: 'Detailed Sketches Idea Selection',
        innerHtml:
          "Proceeding with the drinking water reminder robot, we carefully selected its features to ensure both functionality and user-friendly interaction. These include wheels for mobility, sensors to detect the presence of a cup, an LED to show the robot's status, and a speaker for auditory notifications. These elements are designed to enable the robot to efficiently fulfill its task and facilitate seamless interaction with the user.",
      },
      {
        type: DisplayCardType.text,
        title: 'Contribution',
        innerHtml:
          'I programmed the arduino and assisted in wiring up all the parts.',
      },
    ],
  },
  {
    title: 'Virtual Office',
    id: 'hydrobot',
    bannerBackgroundColour: 'light-blue',
    description:
      'A simulation of an office space designed to connect fellow coworkers and create a collaborative environment.',
    imageSrc: 'assets/projects/virtual-office/front-page.png',
    displayCardsConfig: [
      {
        type: DisplayCardType.text,
        title: 'Description',
        innerHtml:
          " In an increasingly digital world, our virtual office opens up a new way of working. It is a digital space that simulates the office environment, aiming to break the limitations of physical distance and make remote work more collaborative. The virtual office allows team members to work closely together, as if they were in person. <br /><br />Source code: <a href='https://github.com/kayrux/virtual-office'>Github</a><br />Website link: <a href='https://kayrux.github.io/virtual-office/'>Virtual Office</a>",
      },

      {
        type: DisplayCardType.text,
        title: 'Concept Sketches',
        innerHtml:
          'We brainstormed various ideas as we sought solutions to everyday remote communication and collaboration. Here are ten of those concepts. Our goal was to create a system that was not only more interactive but also practical and suitable for everyday life and work.',
      },
      {
        type: DisplayCardType.carousel,
        title: '10 Concept Sketches',
        items: [
          {
            imageSrc: 'assets/projects/virtual-office/p1.png',
            description:
              'Virtual meeting room/ classrooms. Have vr avatars that sit in chairs and look at board instead of zoom calls to make more interactive.',
          },
          {
            imageSrc: 'assets/projects/virtual-office/p2.png',
            description:
              'VR networking business cards. At networking events/sharing business card/resume can be very boring more fun and fast way by having scannable vr profiles can look at while talking to person perhaps relevant information ex) looking for a programmer will be highlighted.',
          },
          {
            imageSrc: 'assets/projects/virtual-office/p3.png',
            description:
              'A remote-controlled home monitoring robot equipped with a camera that mimics your head movements, allowing you to navigate and visually inspect your home from anywhere using either physical movements or a mouse.',
          },
          {
            imageSrc: 'assets/projects/virtual-office/p4.png',
            description:
              'Group chat system, you can invite people (such as your family) into the group chat and share information with them.',
          },
          {
            imageSrc: 'assets/projects/virtual-office/p5.png',
            description:
              'A video call system equipped with eye-tracking technology that displays where each participant is looking on the screen, enabling the monitoring of attendee attention during meetings or classes. ',
          },
          {
            imageSrc: 'assets/projects/virtual-office/p6.png',
            description:
              'The virtual office has the same functions as a real office. You can control the characters in the virtual office to communicate and communicate with other people.',
          },
          {
            imageSrc: 'assets/projects/virtual-office/p7.png',
            description:
              "Simulate real-life scenarios, you can control the character's direction and talk to other people.",
          },
          {
            imageSrc: 'assets/projects/virtual-office/p8.png',
            description:
              'Source file terminal, files can be projected to terminals around the world and read and modified.',
          },
          {
            imageSrc: 'assets/projects/virtual-office/p9.png',
            description:
              'Terminal for reading files, files can be projected to terminals around the world and read and modified.',
          },
          {
            imageSrc: 'assets/projects/virtual-office/p10.png',
            description:
              'All team members work on the same document and share their ideas in real time.',
          },
        ],
      },

      {
        type: DisplayCardType.text,
        title: 'Idea Selection',
        innerHtml:
          'After careful consideration, we chose Virtual Office. We think this concept is novel because a Virtual Office can simulate all scenarios in the office, reduce communication costs, enhance the efficiency of remote communication and collaboration, and make remote work more efficient and humane.',
      },
      {
        type: DisplayCardType.carousel,
        title: 'Rotoscope Sketches',
        items: [
          {
            imageSrc: 'assets/projects/virtual-office/r1.png',
            description: '',
          },
          {
            imageSrc: 'assets/projects/virtual-office/r2.png',
            description: '',
          },
          {
            imageSrc: 'assets/projects/virtual-office/r3.png',
            description: '.',
          },
        ],
      },
      {
        type: DisplayCardType.video,
        title: 'Concept video',
        src: 'https://www.youtube.com/embed/DTAwcMM8OYQ',
      },
      {
        type: DisplayCardType.text,
        title: 'Detailed Sketches',
        innerHtml:
          'After deciding on the main idea, we dug into detailed sketches, dividing them into four main parts: the main interface, a group chat room, a one-to-one chat room, and an area that displays the number of people online. Our virtual office software simulates all scenarios in the office, so users can communicate with colleagues remotely and learn about events in the office for the first time, which greatly reduces communication costs in the office and enhances remote communication and collaboration.',
      },
      {
        type: DisplayCardType.carousel,
        title: '10 Detailed Sketches',
        items: [
          {
            imageSrc: 'assets/projects/virtual-office/d1.png',
            description:
              'The area displays the number of people online in the Office',
          },
          {
            imageSrc: 'assets/projects/virtual-office/d2.png',
            description: 'Chat with others',
          },
          {
            imageSrc: 'assets/projects/virtual-office/d3.png',
            description: 'View the status of your colleagues',
          },
          {
            imageSrc: 'assets/projects/virtual-office/d4.png',
            description: 'Character status to display whether you are busy',
          },
          {
            imageSrc: 'assets/projects/virtual-office/d5.png',
            description: 'View the current time',
          },
          {
            imageSrc: 'assets/projects/virtual-office/d6.png',
            description:
              'Notifications for all users that can be triggered by the administer (Boss)',
          },
          {
            imageSrc: 'assets/projects/virtual-office/d7.png',
            description: 'Clock in and clock out of work',
          },
          {
            imageSrc: 'assets/projects/virtual-office/d8.png',
            description:
              'One-to-one chat interface (you can have a one-to-one conversation with any online colleague)',
          },
          {
            imageSrc: 'assets/projects/virtual-office/d9.png',
            description:
              'Group chat interface (you can have a conversation with all online colleagues)',
          },
          {
            imageSrc: 'assets/projects/virtual-office/d10.png',
            description:
              'The main interface of the virtual office, you can control the role you play to move around and talk to other colleagues',
          },
        ],
      },
      {
        type: DisplayCardType.text,
        title: 'Detailed Sketches Idea Selection',
        innerHtml:
          'Starting with the design of the virtual office, we carefully selected its features to ensure functionality and efficient interaction. These include a main interface simulating an office scene, a group chat room for project discussions, brainstorming, daily communication, or a one-on-one chat room for more private and focused conversations. These elements are designed to enable virtual offices to effectively enhance the efficiency of remote communication and collaboration. This allows team members to work together as closely as if they were in the same office, even in different locations, and jointly promote the progress of the project.',
      },
      {
        type: DisplayCardType.video,
        title: 'Final demo',
        src: 'https://www.youtube.com/embed/aBFW85r5K8M',
      },
      {
        type: DisplayCardType.video,
        title:
          'Final Presentation (Sketches, Concept Video, and Final Demo combined)',
        src: 'https://www.youtube.com/embed/75UNt1imQkA',
      },
      {
        type: DisplayCardType.text,
        title: 'Contribution',
        innerHtml:
          'I modified the game code to suit our project, and connected the game to the chats. I also redesigned a small portion of the art.',
      },
      {
        type: DisplayCardType.embeddedWebsite,
        title: 'Virtual Office',
        url: 'https://kayrux.github.io/virtual-office/',
      },
    ],
  },
];
